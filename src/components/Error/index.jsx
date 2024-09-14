import { Link } from 'react-router-dom'
import './styles.css'

export default function Error() {
    return (
        <div className="page-not-found">
            <img src='src/assets/404.jpeg' alt="404 Not Found" className="image-404" />
            <h1>Ops! Página não encontrada</h1>
            <p>A página que você está procurando não existe ou foi movida.</p>
            <Link to="/" className="back-home">Voltar para a página inicial</Link>
        </div>
    );
}