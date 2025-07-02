// scripts/weather-ui.js
// Interface para consumir buscarClima e atualizar a UI

async function handleWeatherForm(event) {
  event.preventDefault();
  const cityInput = document.getElementById('city-input');
  const resultSection = document.getElementById('weather-result');
  const city = cityInput.value.trim();

  if (!city) {
    resultSection.textContent = 'Por favor, digite o nome de uma cidade.';
    resultSection.focus();
    return;
  }

  resultSection.textContent = 'Buscando...';

  try {
    const res = await buscarClima(city);
    if (res.erro) {
      resultSection.textContent = res.erro;
    } else {
      resultSection.innerHTML = `
        <strong>${res.cidade}</strong><br>
        Temperatura: <span aria-label="Temperatura em Celsius">${res.temperatura_celsius}°C</span><br>
        Velocidade do vento: <span aria-label="Velocidade do vento em km/h">${res.velocidade_vento} km/h</span><br>
        Condição: <span>${res.descricao}</span>
      `;
    }
  } catch (e) {
    resultSection.textContent = 'Erro inesperado. Tente novamente.';
  }
  resultSection.focus();
}

document.getElementById('weather-form').addEventListener('submit', handleWeatherForm);
