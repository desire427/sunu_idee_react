import { useParams, Link } from "react-router-dom";

function Details({ idees }) {
    // On récupère l'ID de l'URL (ex: le "1" dans /details/1)
    const { id } = useParams();

    // On cherche l'idée correspondante dans la liste fournie par App.jsx
    // On utilise parseInt pour comparer des nombres
    const idee = idees?.find((item) => item.id === parseInt(id));
    

    // Si l'idée n'existe pas (mauvais ID dans l'URL)
    if (!idee) {
        return <div style={{ padding: '20px' }}>Idée introuvable. <Link to="/">Retour à la liste</Link></div>;
    }

    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#fff' }}>
            <h2 style={{ marginTop: 0, color: '#34495e' }}>{idee.titre}</h2>
            <p style={{ lineHeight: '1.6' }}>{idee.description}</p>
            <hr />
            <Link to="/" style={{ color: '#3498db', textDecoration: 'none', fontWeight: 'bold' }}>← Retour à la liste</Link>
        </div>
    );
}

export default Details;