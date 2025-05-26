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
  ];

  const [selecionado, setSelecionado] = useState(null);

  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-4">Rotas do Transporte Escolar</h1>
      <Link to="/" className="botao">
        Voltar
      </Link>
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
              <div style={{
                background: 'white',
                padding: '4px 8px',
                borderRadius: '8px',
                boxShadow: '0 0 5px rgba(0,0,0,0.3)',
                fontSize: '12px',
                marginBottom: '4px'
              }}>
                {ponto.nome}
              </div>
            )}
          </Marker>
        ))}
      </Map>
    </div>
  );
}

// Você pode exportar as duas telas, se quiser rotas diferentes
export { Home, TransportMap };

// Ou exportar uma só, caso use apenas uma rota:
export default TransportMap;
