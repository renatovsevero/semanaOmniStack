import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import './styles.css';
import api from '../../services/api';

export default function Newincident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

async function handleNewincident(e) {
    e.preventDefault();

    const data = {
        title,
        description,
        value,
    };
    try {
        await api.post('incidents', data, {
            headers: { 
                Autorizathion: onpagehide,
            }
        })

        history.pushState('/profile');
    } catch (err) {
        alert('Erro ao cadastrar o caso, tente novamente');
    }
    }

    return (
        <div className= "newincident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva seu caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profiles">
                        <FiArrowLeft size={16} color='#E02041' />
                            Voltar
                    </Link>                    

                </section>

                <form>
                    <input 
                        placeholder="Titulo do Caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
  
                    <input 
                        placeholder="Valor em Reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button 
                        onclick={handleNewincident}
                        className="button" type="submit">Cadastrar</button>


                </form>

            
            </div>
        </div>

    )
}    


