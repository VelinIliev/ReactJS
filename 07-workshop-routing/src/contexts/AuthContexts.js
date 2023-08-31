import { createContext, useContext, useState } from 'react';
import * as authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});

    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        const result = await authService.login(data);
        if (result.accessToken) {
            setAuth(result);
            navigate('/catalogue')
        } else {
            setAuth({ "message": result.message });
        }
    };

    const onRegisterSubmit = async (data) => {
        const { confirmPassword, ...registerData } = data;
        if (confirmPassword !== registerData.password) {
            setAuth({ "message": "passwords don't match" });
            return;
        }
        const result = await authService.register(registerData);
        if (result.accessToken) {
            setAuth(result);
            navigate('/catalogue');
        } else {
            setAuth({ "message": result.message });
        }
    };

    const onLogout = async () => {
        const result = await authService.logout(auth.accessToken)
        setAuth({});
        return
    };

    const context = {
        onLogout,
        onRegisterSubmit,
        onLoginSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        message: auth.message,
        isAuthenticated: auth._id ? true : false 
    };

    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    )
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context
}