import { Link } from 'react-router-dom'
import './styles.css'

export default function Error() {
    return (
        <Link to='/'>
            <img src="../assets/404.jpeg" alt="Pagina não encontrada" />
        </Link>
    );
}