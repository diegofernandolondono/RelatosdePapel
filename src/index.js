import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import App from './App';
import './styles/App.css';

// Selecciona el contenedor raíz
const container = document.getElementById('root');

// Crea una raíz
const root = createRoot(container);

// Renderiza la aplicación
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);