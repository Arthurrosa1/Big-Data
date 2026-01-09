# 📊 Projeto Big Data — Simulação de Rotas

Este repositório contém um **projeto de Big Data** focado em **análise e visualização de rotas de entrega** usando dados geográficos e métricas de tempo/distância.  
O objetivo é aplicar conceitos de manipulação de dados, visualização e lógica de front-end para simular e analisar rotas partindo de um ponto central (a distribuidora) para múltiplos destinos (bairros ou locais).

---

## 🧠 Visão Geral

Este trabalho foi desenvolvido como parte de um estudo/prática em Big Data, aplicando:
- **JavaScript** para manipulação de dados e lógica
- **HTML/CSS** para interface e apresentação visual
- **Dados CSV** para insumo das rotas  

O projeto carrega um conjunto de rotas, processa os dados e apresenta as informações de forma interativa para análise.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| 🐍 **Python** | Utilizado para análise de dados e regressão linear, aplicando bibliotecas como Pandas, NumPy, Statsmodels e Scikit-learn. |
| ⚙️ **Apache Spark (PySpark)** | Ferramenta principal de processamento distribuído no Databricks, usada para manipular grandes volumes de dados de forma paralela e eficiente. |
| ☁️ **Databricks** | Ambiente de Big Data e análise colaborativa utilizado para rodar os notebooks e integrar com o Delta Lake. |
| 💾 **Delta Lake** | Data Lake que armazena os dados tratados em formato otimizado e confiável, garantindo versionamento e integridade. |
| 📊 **Plotly** | Biblioteca interativa de visualização usada para gerar gráficos de tempo, distância e preço. |
| 📁 **CSV** | Formato base de entrada dos dados das rotas (fonte principal de dados brutos). |
| 🗺️ **Google Maps API** | Integrada ao dashboard HTML para exibir as rotas, distâncias e tempo de viagem de forma visual. |
| 🌦️ **OpenWeatherMap API** | Usada para complementar a análise com informações climáticas em tempo real durante as rotas. |
| 🧱 **HTML5, CSS3 e JavaScript** | Tecnologias front-end para criação do dashboard interativo, onde são exibidos mapas, gráficos e análises. |
| 🧮 **Jupyter Notebook** | Ambiente usado para desenvolvimento e experimentação dos scripts Python localmente. |

---

💡 **Resumo:**  
O projeto combina **Big Data (Spark + Databricks)** com **visualização interativa (Plotly + Google Maps)** e **análise estatística (Python + Scikit-learn)**, resultando em um pipeline completo — da coleta e tratamento até a visualização dos resultados.


## 🗂️ Estrutura do Projeto

Big-Data/

├── dadosRotas.js - Dados ou funções de manipulação de rotas

├── index.html - Página principal do projeto

├── script.js - Lógica principal em JavaScript

├── style.css - Estilos e layout da interface

├── rotas.csv - Arquivo de dados com informações das rotas

└── README.md - Documentação do projeto

---

## ▶️ Resultado Final

Acesse o resultado final da página 👉 https://arthurrosa1.github.io/Jogo-Detona-Ralph/

---

## ⭐ Apoiando o Projeto

Se este projeto te ajudou de alguma forma ou você achou interessante, deixe uma ⭐ no repositório — isso ajuda a manter a motivação para novos projetos 🚀
