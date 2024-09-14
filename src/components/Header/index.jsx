import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <header className='header'>
            <Link to="/">
            <img src="src\assets\Dubious Advice.png" alt="Dubious Advice" />
            </Link>
            <nav>
                <ol>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/api">
                        <li>Random Dubious Advice</li>
                    </Link>
                </ol>
            </nav>
        </header>
    )
}