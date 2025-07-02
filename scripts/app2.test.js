const { buscarClima } = require('./app2');

global.fetch = jest.fn();

describe('buscarClima', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar clima para cidade válida', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ results: [{ name: 'São Paulo', latitude: -23.55, longitude: -46.63 }] })
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ current_weather: { temperature: 25, weathercode: 1 } })
      });
    const res = await buscarClima('São Paulo');
    expect(res).toEqual({ cidade: 'São Paulo', temperatura_celsius: 25, descricao: 'Principalmente claro' });
  });

  it('deve retornar erro para cidade inexistente', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [] })
    });
    const res = await buscarClima('Xyzabc');
    expect(res).toEqual({ erro: 'Cidade não encontrada. Verifique o nome e tente novamente.' });
  });

  it('deve retornar erro se API de geocodificação falhar', async () => {
    fetch.mockResolvedValueOnce({ ok: false });
    const res = await buscarClima('São Paulo');
    expect(res.erro).toMatch(/problema ao buscar os dados/i);
  });

  it('deve retornar erro se API de clima falhar', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ results: [{ name: 'São Paulo', latitude: -23.55, longitude: -46.63 }] })
      })
      .mockResolvedValueOnce({ ok: false });
    const res = await buscarClima('São Paulo');
    expect(res.erro).toMatch(/problema ao buscar os dados/i);
  });

  it('deve retornar descrição "Condição desconhecida" para weathercode não listado', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ results: [{ name: 'São Paulo', latitude: -23.55, longitude: -46.63 }] })
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ current_weather: { temperature: 20, weathercode: 999 } })
      });
    const res = await buscarClima('São Paulo');
    expect(res.descricao).toBe('Condição desconhecida');
  });

  it('deve retornar erro para nome de cidade vazio', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [] })
    });
    const res = await buscarClima('');
    expect(res.erro).toMatch(/cidade não encontrada/i);
  });

  it('deve retornar erro para nome de cidade com caracteres especiais', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [] })
    });
    const res = await buscarClima('@#$%');
    expect(res.erro).toMatch(/cidade não encontrada/i);
  });

  it('deve retornar erro se resposta da API de clima não tiver current_weather', async () => {
    fetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ results: [{ name: 'São Paulo', latitude: -23.55, longitude: -46.63 }] })
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({})
      });
    await expect(buscarClima('São Paulo')).rejects.toThrow();
  });
});
