function App() {
  // Déclaration du faux tableau de données (Mock) avec la structure demandée
  const idees = [
    { id: 1, titre: "Transport Solaire", description: "Une solution de transport écologique utilisant l'énergie solaire pour les zones rurales." },
    { id: 2, titre: "Éducation Interactive", description: "Une plateforme mobile pour apprendre les langues locales de manière ludique." },
    { id: 3, titre: "Gestion des Déchets", description: "Des poubelles intelligentes qui informent les services de collecte en temps réel." }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#ffffff' }}>Sunu-Idées</h1>
      {idees.map((idee) => (
        <CardIdee
          key={idee.id}
          titre={idee.titre}
          description={idee.description}
        />
      ))}
    </div>
  );
}

// Le Moule (UI) : Composant CardIdee isolé et intelligent
function CardIdee({ titre, description }) {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ marginTop: 0, color: '#34495e' }}>{titre}</h2>
      <p>{description}</p>
      <button style={{ padding: '10px 15px', cursor: 'pointer', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }}>Voter</button>
    </div>
  );
}
export default App;