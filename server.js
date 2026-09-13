app.all('*', (req, res) => {
  console.log("===========================");
  console.log(`NOVA REQUISIÇÃO DO JOGO: ${req.method} ${req.url}`);
  console.log("Cabeçalhos:", req.headers);
  console.log("Corpo da requisição:", req.body);
  console.log("===========================");
  
  // Responde um JSON genérico de sucesso só para ver se o jogo passa da tela
  res.json({
    "status": "success",
    "result": true,
    "error_code": 0
  });
});
