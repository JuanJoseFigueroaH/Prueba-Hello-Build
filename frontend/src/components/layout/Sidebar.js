import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';

const Sidebar = () => {
    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion  } = authContext;

    useEffect(() => {
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return ( 
        <aside>
            <h1>Prueba<span> Hello Build</span></h1>

            <div className="proyectos">
                <button 
                    className="btn btn-blank nav-text cerrar-sesion"
                >Dashboard</button>
                <button 
                    className="btn btn-blank nav-text cerrar-sesion"
                >Perfil</button>
                <button 
                    className="btn btn-blank nav-text cerrar-sesion"
                >Repositorios</button>
                <button 
                    className="btn btn-blank nav-text cerrar-sesion"
                    onClick={() => cerrarSesion() }
                >Cerrar Sesión</button>
            </div>
        </aside>
     );
}
 
export default Sidebar;