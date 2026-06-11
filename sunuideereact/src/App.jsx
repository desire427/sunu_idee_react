import CardIdee from './Cardidee';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './detailes.jsx';


function App() {
  // Déclaration du faux tableau de données (Mock) avec la structure demandée
  const idees = [
    { id: 1, titre: "Transport Solaire", description: "Une solution de transport écologique utilisant l'énergie solaire pour les zones rurales." },
    { id: 2, titre: "Éducation Interactive", description: "Une plateforme mobile pour apprendre les langues locales de manière ludique." },
    { id: 3, titre: "Gestion des Déchets", description: "Des poubelles intelligentes qui informent les services de collecte en temps réel." }
  ];

  return (
    <BrowserRouter>
      <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Sunu-Idées</h1>
        
        <Routes>
          {/* Route pour la liste des idées */}
          <Route path="/" element={
            <div>
              {idees.map((idee) => (
                <CardIdee
                  key={idee.id}
                  id={idee.id}
                  titre={idee.titre}
                  description={idee.description}
                />
              ))}
            </div>
          } />
          {/* Route dynamique pour les détails d'une idée */}
          <Route path="/details/:id" element={<Details idees={idees} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;