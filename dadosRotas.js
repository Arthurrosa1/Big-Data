 let dadosRotas = [];

    Papa.parse("rotas.csv", {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: function(results) {
        dadosRotas = results.data.map(row => ({
          bairro: row.bairro,
          escola: row.escola,
          origem: { lat: row.origem_lat, lng: row.origem_lng },
          destino: { lat: row.destino_lat, lng: row.destino_lng },
          distancia_km: row.distancia_km,
          duracao_min: row.duracao_min,
          preco_estimado: row.preco_estimado
        }));

        gerarGraficos();
        initMap();
      }
    });