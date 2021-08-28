import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import PerfilContext from '../../context/perfil/perfilContext';

const Perfil = () => {
    // Extrar proyectos de state inicial
    const perfilContext = useContext(PerfilContext);
    const { perfil_dashboard, obtenerPerfil } = perfilContext;

    useEffect(() => {
        obtenerPerfil();
        // eslint-disable-next-line
    }, [])

    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <Barra />
                <main>
                    <h1 className="nav-text cerrar-sesion">
                        Perfil
                    </h1>
                    <div className="div-perfil">
                        <img className="avatar" src={perfil_dashboard.data.avatar_url} />
                        <p className="perfil-text">Nombre: {perfil_dashboard.data.name}</p>
                        <p className="perfil-text">Url: {perfil_dashboard.data.url}</p>
                        <p className="perfil-text">Biografia: {perfil_dashboard.data.bio}</p>
                        <p className="perfil-text">Localización: {perfil_dashboard.data.location}</p>
                    </div>
                </main>
            </div>
        </div>
    );
}
 
export default Perfil;