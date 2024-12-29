import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Landing.css';

function Landing() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/main');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="landing">
            <h1 className="landing__title">Bienvenido a Relatos de Papel</h1>
            <button className="landing__button" onClick={() => navigate('/main')}>Ingresar</button>
        </div>
    );
}

export default Landing;