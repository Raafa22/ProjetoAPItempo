async function buscarClima(cidade) {
  try {
    // Etapa 1: Buscar coordenadas da cidade
    const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cidade)}&count=1`;
    const geoResp = await fetch(geoURL);
    if (!geoResp.ok) throw new Error("Erro ao acessar a API de geocodificação.");
    const geoData = await geoResp.json();

    if (!geoData.results || geoData.results.length === 0) {
      return { erro: "Cidade não encontrada. Verifique o nome e tente novamente." };
    }

    const { name, latitude, longitude } = geoData.results[0];

    // Etapa 2: Buscar dados climáticos
    const climaURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const climaResp = await fetch(climaURL);
    if (!climaResp.ok) throw new Error("Erro ao acessar a API de clima.");
    const climaData = await climaResp.json();

    const { temperature, weathercode, windspeed } = climaData.current_weather;

    // Descrição simples baseada no código do tempo
    const descricoes = {
      0: "Céu limpo",
      1: "Principalmente claro",
      2: "Parcialmente nublado",
      3: "Nublado",
      45: "Névoa",
      48: "Névoa com geada",
      51: "Garoa leve",
      61: "Chuva leve",
      71: "Neve leve",
      80: "Pancadas de chuva leves",
      95: "Tempestade"
      // Adicione mais conforme necessário
    };

    return {
      cidade: name,
      temperatura_celsius: temperature,
      velocidade_vento: windspeed,
      descricao: descricoes[weathercode] || "Condição desconhecida"
    };

  } catch (erro) {
    return { erro: "Ocorreu um problema ao buscar os dados. Verifique sua conexão ou tente novamente mais tarde." };
  }
}

// Exemplo de uso:
buscarClima("São Paulo").then(console.log);
