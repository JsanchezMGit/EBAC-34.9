import { useState } from "react";
import userDB from "../../data/users.json";
import { useDispatch } from "react-redux";
import { userLoggIn } from "../../state/session.slice";
import { useNavigate } from "react-router";
import { User } from "../../models/User";
import { Button, FormContainer, InputContainer, Error, Input } from "../communStyles";
import { useSelector } from "react-redux";
import { IState } from "../../interfaces/State";

const Login = () => {

    const navigate = useNavigate();

    const [userFormData, setUserFormData] = useState<User>({userName: "", password: ""});

    const dispatch = useDispatch();

    const [loginError, setLoginError] = useState<string>("");

    const handleSubmit = (e:React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        setLoginError("");
        if (userDB.find(c => c.name === userFormData.userName && c.password === userFormData.password) ||
        tempRegisterUserState.find(c => c.userName === userFormData.userName && c.password === userFormData.password)) {
            dispatch(userLoggIn({ userName: userFormData.userName, password: "" }));
            navigate("/");
        } else {
            setLoginError("El usuario y/o contraseña no son correctos");
        }
    };

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserFormData(c => ({...c, [name]: value}));
    }

    const tempRegisterUserState = useSelector<IState, User[]>(state => state.user);

    return(
        <FormContainer onSubmit={handleSubmit}>
            <InputContainer>
                <label htmlFor="userName">Nombre de usuario</label>
                <Input
                    id="userName"
                    required
                    name="userName"
                    type="text"
                    value={userFormData.userName}
                    onChange={handleInputChange} />
            </InputContainer>
            <InputContainer>
                <label htmlFor="password">Contraseña</label>
                <Input
                    id="password"
                    required
                    name="password"
                    type="password"
                    value={userFormData.password}
                    onChange={handleInputChange} />
            </InputContainer>
            <Button type="submit">Entrar</Button>
            { loginError != "" ? <Error>{loginError}</Error> : <></> }
        </FormContainer>
    )
}

export default Login;