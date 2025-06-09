function gerarGraficos() {
      const escolas = dadosRotas.map(d => `${d.bairro} - ${d.escola}`);
      const tempo = dadosRotas.map(d => d.duracao_min);
      const distancia = dadosRotas.map(d => d.distancia_km);
      const preco = dadosRotas.map(d => d.preco_estimado);

      const layout = {
        plot_bgcolor: "rgba(0,0,0,0)",
        paper_bgcolor: "rgba(0,0,0,0)",
        font: { color: "#ffffff" },
        xaxis: { tickangle: -45 },
        margin: { t: 40, b: 80 }
      };

      Plotly.newPlot("grafico-tempo", [{ x: escolas, y: tempo, type: 'bar', marker: { color: tempo, colorscale: [[0,'white'],[1,'red']], cmin: Math.min(...tempo), cmax: Math.max(...tempo) } }], { ...layout, title: "Tempo Estimado (min)" });

      Plotly.newPlot("grafico-distancia", [{ x: escolas, y: distancia, type: 'bar', marker: { color: distancia, colorscale: [[0,'white'],[1,'red']], cmin: Math.min(...distancia), cmax: Math.max(...distancia) } }], { ...layout, title: "Distância (km)" });

      Plotly.newPlot("grafico-preco", [{ x: escolas, y: preco, type: 'bar', marker: { color: preco, colorscale: [[0,'white'],[1,'red']], cmin: Math.min(...preco), cmax: Math.max(...preco) } }], { ...layout, title: "Custo Estimado (R$)" });
    }

    function initMap() {
      const mapa = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 12,
        center: dadosRotas[0].origem,
      });

      dadosRotas.forEach((rota, index) => {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
        directionsRenderer.setMap(mapa);

        const request = {
          origin: rota.origem,
          destination: rota.destino,
          travelMode: google.maps.TravelMode.DRIVING,
          drivingOptions: {
            departureTime: new Date(5),
            trafficModel: 'best_guess'
          }
        };

        directionsService.route(request, (response, status) => {
          if (status === 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            console.error(`Erro na rota ${index}: ${status}`);
          }
        });

        new google.maps.Marker({ position: rota.origem, map: mapa, icon: { url: 'https://maps.google.com/mapfiles/kml/shapes/truck.png', scaledSize: new google.maps.Size(24, 24) }, title: 'Distribuidora' });
        new google.maps.Marker({ position: rota.destino, map: mapa, icon: { url: 'https://maps.google.com/mapfiles/kml/shapes/schools.png', scaledSize: new google.maps.Size(24, 24) }, title: rota.escola });
      });
    }