// Ponto.js
import { Link } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
import './Pontos.css';

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Transporte Escolar</h1>
      <Link to="/mapa" className="botao">
        Pontos
      </Link>
    </div>
  );
}

function TransportMap() {
  const [center] = useState([-22.175, -46.745]);
  const zoom = 14;
  const pontos = [
    { id: 1, nome: "oficina do vava", coords: [-22.194547, -46.766363] },
    { id: 2, nome: "mercadinho da silvia", coords: [-22.194147, -46.763524] },
    { id: 3, nome: "esquina do postinho da dinda", coords: [-22.191741, -46.761822] },
    { id: 4, nome: "merenda municipal", coords: [-22.191207, -46.759700] },
    { id: 5, nome: "padaria pão nosso", coords: [-22.19212, -46.75644] },
    { id: 6, nome: "sorveteria Genari", coords: [-22.18953, -46.75728] },
    { id: 7, nome: "esquina do mercado do toninho", coords: [-22.18860, -46.75754] },
    { id: 8, nome: "esquina do super mercado possi", coords: [-22.18601, -46.75487] },
    { id: 9, nome: "EMEB Dr. Eduardo de Almeida Vergueiro Neto", coords: [-22.18626, -46.74975] },
    { id: 10, nome: "jardim nova pinhal", coords: [-22.18666, -46.74807] },
    { id: 11, nome: "kall importados", coords: [-22.18676, -46.74588] },
    { id: 12, nome: "igreja são pantaleao", coords: [-22.18457, -46.74542] },
    { id: 13, nome: "lago municipal", coords: [-22.18026, -46.74449] },
    { id: 14, nome: "EMEB Augusta Bortolucci Latarini", coords: [-22.17935, -46.74769] },
    { id: 15, nome: "esquina do bar do palmerense", coords: [-22.17829, -46.74981] },
    { id: 17, nome: "Assembléia de Deus", coords: [-22.193261, -46.777957] },
    { id: 18, nome: "Ponto de Ônibus", coords: [-22.191381, -46.776027] },
    { id: 19, nome: "Ponto de Ônibus", coords: [-22.189820, -46.777331] },
    { id: 20, nome: "Ponto de Ônibus", coords: [-22.191280, -46.778835] },
    { id: 21, nome: "helio4", coords: [-22.190580, -46.780205] },
    { id: 22, nome: "Ponto de Ônibus", coords: [-22.192327, -46.781187] },
    { id: 23, nome: "Espetinho do Zé Dito", coords: [-22.195557, -46.771277] },
    { id: 24, nome: "Ponto de Ônibus", coords: [-22.196469, -46.770066] },
    { id: 25, nome: "Ponto de Ônibus", coords: [-22.203473, -46.759133] },
    { id: 26, nome: "Ponto de Ônibus", coords: [-22.204699, -46.756168] },
    { id: 27, nome: "Escadão", coords: [-22.204495, -46.754574] },
    { id: 28, nome: "Bilheteria do Estadio", coords: [-22.201433, -46.755886] },
    { id: 29, nome: "Budega's bar", coords: [-22.198497, -46.750954] },
    { id: 30, nome: "Palácio do café", coords: [-22.195827, -46.745215] },
    { id: 31, nome: "Cardeal", coords: [-22.197112, -46.743708] },
    { id: 32, nome: "Sindicato Sinsaude", coords: [-22.193070, -46.743942] },
    { id: 33, nome: "Padaria Isabeli", coords: [-22.190439, -46.743865] },
    { id: 34, nome: "Juca", coords: [-22.183310, -46.743233] },
    { id: 35, nome: "Hospital", coords: [-22.193812, -46.742166] },
    { id: 36, nome: "COC", coords: [-22.190397, -46.741182] },
    { id: 37, nome: "Padaria Mama Mia", coords: [-22.188180, -46.741563] },
    { id: 38, nome: "Bar do Badola", coords: [-22.201711, -46.762309] },
    { id: 39, nome: "Abelardo", coords: [-22.201449, -46.760374] },
    { id: 40, nome: "El Shaday", coords: [-22.201447, -46.766082] },
    { id: 41, nome: "Baitakão do Irmão", coords: [-22.201395, -46.766972] },
      ];

  const [selecionado, setSelecionado] = useState(null);

  return (
    <div className="h-screen flex flex-col items-center">
      <header className="header">
      <div className="logo-box"></div>

      <div className="buttons">
       <Link to="/" id="botao">
        Voltar
      </Link>
      </div>
    </header>
      
    <div id="container-banner">
      <section id="banner">
        <div id="banner-content">          
          <h1>Nesta página, visualize as rotas que o ônibus passará, e quais pontos de parada aguardar</h1>
        </div>
        
      </section>
      <div id="imagemPinjente"></div>  
    </div>

      <div className="map-section">
  <div className="map-frame">
    <Map height={500} defaultCenter={center} defaultZoom={zoom}>
      {pontos.map((ponto) => (
        <Marker
          key={ponto.id}
          anchor={ponto.coords}
          onClick={() =>
            setSelecionado(selecionado === ponto.id ? null : ponto.id)
          }
        >
          {selecionado === ponto.id && (
            <div className="marker-label">
              {ponto.nome}
            </div>
          )}
        </Marker>
      ))}
    </Map>
  </div>
</div>

<div className="baseboard-container">      
        <div className="baseboard-name-project"><h1>EXPLORARUMO</h1></div>
        <div className="baseboard-contact"><h1>CONTATO</h1><p>email@exemplo.com <br /> ( 555 ) 555-555</p></div>      
    </div>
    </div>
  );
}

// Você pode exportar as duas telas, se quiser rotas diferentes
export { Home, TransportMap };

// Ou exportar uma só, caso use apenas uma rota:
export default TransportMap;
