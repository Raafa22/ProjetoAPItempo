async function getWeather(city) {
  try {
    // 1. Obter latitude e longitude da cidade
    const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      console.log("Cidade não encontrada.");
      return;
    }

    const { latitude, longitude } = geoData.results[0];

    // 2. Buscar dados meteorológicos
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherData = await weatherRes.json();

    const temperature = weatherData.current_weather.temperature;
    console.log(`Temperatura atual em ${city}: ${temperature}°C`);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

// Exemplo de uso
getWeather("São Paulo");
