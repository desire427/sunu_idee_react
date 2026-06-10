import { useState } from 'react';

// Le Moule (UI) : Composant CardIdee isolé et intelligent
function CardIdee({ id, titre, description }) {
  // État pour le nombre de votes et l'état visuel (A voté)
  const [votes, setVotes] = useState(0);

  // Déclencheur : Fonction de gestion du clic
  const handleVote = () => {
    setVotes(votes + 1);
    console.log(`Vote enregistré pour l'idée ID: ${id}`);
  };

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
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button 
          onClick={handleVote}
          style={{ 
            padding: '10px 15px', 
            cursor: 'pointer', 
            backgroundColor: '#3498db', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px',
            transition: 'background-color 0.3s'
          }}
        >
          {'Voter'}
        </button>
        <span style={{ fontWeight: 'bold', color: '#7f8c8d' }}>{votes} votes</span>
      </div>
    </div>
  );
}

export default CardIdee;