import { useAuthContext } from "../contexts/AuthContexts";

export const withAuth = (Component) => {
    const WrapperComponent = (props) =>  {
        const AuthContext = useAuthContext();

        return ( 
            <Component {...props} auth={AuthContext}/>
        );
    };
    return WrapperComponent;
};