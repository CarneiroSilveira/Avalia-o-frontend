import { Link } from 'react-router-dom';
import Button from '../../components/Button'
import './styles.css'

export default function About() {
    return (
        <div className='about-container'>
            <h1>Congratulations, you are our 1,000,000th user! 🥳🥳🥳</h1>
            <p>
                To celebrate this incredible milestone, we re giving you an all-expenses-paid trip to Acapulco! 
                To claim your prize, click the button below and enter your credit card number.
            </p>
            <input className="card-info" type="text" placeholder="Card Number"/>
            <input className="card-info" type="text" placeholder="CVV"/>
            <input className="card-info" type="text" placeholder="Expiry Date"/>
            <Link to='/error'><Button/></Link>
        </div>
    );
}