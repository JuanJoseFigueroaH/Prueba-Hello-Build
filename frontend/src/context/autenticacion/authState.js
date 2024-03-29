import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import clienteAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import { 
    REGISTRO_EXITOSO,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    CERRAR_SESION
} from '../../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null, 
        mensaje: null, 
        cargando: true
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    const registrarUsuario = async datos => {
        const respuesta = await clienteAxios.post('/api/usuarios', datos);

        dispatch({
            type: REGISTRO_EXITOSO,
            payload: respuesta.data
        });

        // Obtener el usuario
        usuarioAutenticado();
    }

    // Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if(token) {
            tokenAuth(token);
        }

        const respuesta = await clienteAxios.get('/api/auth');
        dispatch({
            type: OBTENER_USUARIO,
            payload: respuesta.data.usuario
        });
    }

    // Cuando el usuario inicia sesión
    const iniciarSesion = async datos => {
        const respuesta = await clienteAxios.post('/api/auth', datos);
        
        dispatch({
            type: LOGIN_EXITOSO,
            payload: respuesta.data
        });

        // Obtener el usuario
        usuarioAutenticado();
    }

    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion,
            }}
        >{props.children}
        </AuthContext.Provider>
    )
}
export default AuthState;