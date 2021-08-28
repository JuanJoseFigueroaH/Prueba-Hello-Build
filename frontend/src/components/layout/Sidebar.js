import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    // Extraer la información de autenticación
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado, cerrarSesion  } = authContext;

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
                    onClick={() => cerrarSesion() }
                >Dashboard</button>
                <Link to={'/perfil'} className="nav-text cerrar-sesion">
                    Perfil
                </Link>
                <Link to={'/repositorios'} className="nav-text cerrar-sesion">
                    Repositorios
                </Link>
                <button 
                    className="btn btn-blank nav-text cerrar-sesion"
                    onClick={() => cerrarSesion() }
                >Cerrar Sesión</button>
            </div>
        </aside>
     );
}
 
export default Sidebar;