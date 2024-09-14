import { useEffect, useState } from 'react'
import './styles.css'
import Loader from '../../components/Loader'
import Error from '../../components/Error';

export default function Api() {
    const [conteudo, setConteudo] = useState(<Loader />);
    const [gifPath, setGifPath] = useState(null);  // Estado para o caminho do GIF

    function gifRandomizer() {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const path = `src/assets/meme${randomNumber}.gif`;
        return path;
    }

    async function getMensages() {
        const reqOptions = {
            method: "GET",
            redirect: "follow"
        }

        const response = await fetch(
            "https://api.adviceslip.com/advice",
            reqOptions
        );

        if (!response.ok) {
            return <Error />;
        }

        const apiResponse = await response.json();
        return apiResponse.slip.advice;
    }

    useEffect(() => {
        async function getConteudo() {
            const mensagem = await getMensages();
            setConteudo(mensagem);
            setGifPath(gifRandomizer());  // Define o caminho do GIF após a mensagem ser carregada
        }
        getConteudo();
    }, []);

    return (
        <main className='api-content'>
            {gifPath && (  // Só exibe o GIF quando o gifPath estiver definido
                <img src={gifPath} alt="Meme image" className='meme-image'/>
            )}
            <h2 className='api-menssge'>{conteudo}</h2>
        </main>
    );
}
