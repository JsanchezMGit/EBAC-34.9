import { useState } from "react";
import userDB from "../../data/users.json";
import { useDispatch } from "react-redux";
import { userLoggIn } from "../../state/session.slice";
import { registerUser } from "../../state/user.slice";
import { useNavigate } from "react-router";
import { Button, FormContainer, InputContainer, Error, Input } from "../communStyles";
import { UserRegister } from "../../models/UserRegister";

const Register = () => {

    const navigate = useNavigate();

    const [userRegisterFormData, setUserRegisterFormData] = useState<UserRegister>({userName: "", password: "", passwordConfirmation: ""});

    const dispatch = useDispatch();

    const [registerError, setRegisterError] = useState<string>("");

    const handleSubmit = (e:React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        setRegisterError("");
        if (userDB.find(c => c.name === userRegisterFormData.userName)) {
            setRegisterError("El nombre de usuario ya se encuentra registrado");
        } else if (userRegisterFormData.password !== userRegisterFormData.passwordConfirmation) {
            setRegisterError("La contraseña y la confirmacion no son iguales");
        } else {
            dispatch(registerUser({ userName: userRegisterFormData.userName, password: userRegisterFormData.password }))
            dispatch(userLoggIn({ userName: userRegisterFormData.userName, password: "" }));
            navigate("/");
        }
    };

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserRegisterFormData(c => ({...c, [name]: value}));
    }

    return(
        <FormContainer onSubmit={handleSubmit}>
            <InputContainer>
                <label htmlFor="userName">Nombre de usuario</label>
                <Input
                    id="userName"
                    required
                    name="userName"
                    type="text"
                    value={userRegisterFormData.userName}
                    onChange={handleInputChange} />
            </InputContainer>
            <InputContainer>
                <label htmlFor="password">Contraseña</label>
                <Input
                    id="password"
                    required
                    name="password"
                    type="password"
                    value={userRegisterFormData.password}
                    onChange={handleInputChange} />
            </InputContainer>
            <InputContainer>
                <label htmlFor="passwordConfirmation">Confirma contraseña</label>
                <Input
                    id="passwordConfirmation"
                    required
                    name="passwordConfirmation"
                    type="password"
                    value={userRegisterFormData.passwordConfirmation}
                    onChange={handleInputChange} />
            </InputContainer>            
            <Button type="submit">Registrar</Button>
            { registerError !== "" ? <Error>{registerError}</Error> : <></> }
        </FormContainer>
    )
}

export default Register;