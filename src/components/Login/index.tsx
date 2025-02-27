import { useState } from "react";
import userData from "../../data/user.json";
import { LoginContainer, LoginInput, LoginError, LoginButton, LoginInputContainer } from "./styles";
import { User } from "../../types/User";
import { useDispatch } from "react-redux";
import { setUserLogged } from "../../state/user.slice";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [userFormData, setUserFormData] = useState<User>(
        {
            userName: "",
            password: "",
            logged: false
        }
    );

    const dispatch = useDispatch();

    const [loginError, setLoginError] = useState<string>("");

    const handleSubmit = (e:React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        setLoginError("");
        if (userFormData.userName === userData.name && userFormData.password === userData.password) {
            setUserFormData(c => ({...c, logged: true}));
            dispatch(setUserLogged({ userName: userFormData.userName, logged: true }));
            navigate("/products");
        } else {
            setLoginError("El usuario y/o contraseña no son correctos");
        }
    };

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserFormData(c => ({...c, [name]: value}));
    }

    return(
        <LoginContainer onSubmit={handleSubmit}>
            <LoginInputContainer>
                <label>Nombre de usuario</label>
                <LoginInput
                    required
                    name="userName"
                    type="text"
                    value={userFormData.userName}
                    onChange={handleInputChange} />
            </LoginInputContainer>
            <LoginInputContainer>
                <label>Contraseña</label>
                <LoginInput
                    required
                    name="password"
                    type="password"
                    value={userFormData.password}
                    onChange={handleInputChange} />
            </LoginInputContainer>
            <LoginButton type="submit">Entrar</LoginButton>
            { loginError != "" ? <LoginError>{loginError}</LoginError> : <></> }
        </LoginContainer>
    )
}

export default Login;