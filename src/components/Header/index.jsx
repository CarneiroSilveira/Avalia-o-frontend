import { Link } from 'react-router-dom'
import './styles.css'

export default function Header() {
    return (
        <header className='header'>
            <h1>dubious advice</h1>
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