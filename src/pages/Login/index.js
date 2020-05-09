import React, { useState, useEffect } from "react";

import {
    Container,
    LoginContainer,
    LogoContainer,
    SignInButton,
    LoginButton,
    Form,
    Separator,
} from "./styles";
import { api } from "../../services/api";
import Ripples from "react-ripples";
import { FaEnvelope } from "react-icons/fa";
import {useHistory} from 'react-router-dom';


function Login({}) {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [loading, setLoading] = useState(false);
    const [registrar, setRegistrar] = useState(false);

    let history = useHistory();

    useEffect(() => {
        setEmail("claudioyvens10@gmail.com");
        setPasswd("asd123");
    }, []);
    const handleLogin = async (event) => {


        event.preventDefault();
        setLoading(true);
        await api
            .post("/authenticate", {
                email: email,
                password: passwd,
            })
            .then((res) => {
                setLoading(false);
                history.push('/Main');
            }).catch((err)=>{
                console.log('algo errado');
                setLoading(false);
            });
    };

    return (
        <Container>
            <LogoContainer>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="Logo" />
            </LogoContainer>
            <Separator animate={registrar}>
                <div>
                </div>
                <div>
                </div>
            </Separator>
            <LoginContainer>
                <h1>Bem vindo</h1>
                <h3>Por favor, identifique-se</h3>
                <Form
                    onSubmit={handleLogin}
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail"
                    />
                    <input
                        type="password"
                        value={passwd}
                        onChange={(e) => setPasswd(e.target.value)}
                        placeholder="Senha"
                    />
                    <div
                        style={{
                            display: "inline-flex",
                            borderRadiu: 5,
                            justifyContent: "center",
                        }}
                    >
                        <Ripples during={1000}>
                            <LoginButton loading={loading} type="submit">
                                Entrar
                            </LoginButton>
                        </Ripples>
                    </div>

                    <SignInButton onClick={()=>setRegistrar(true)}>Registrar</SignInButton>
                </Form>
            </LoginContainer>
        </Container>
    );
}

export default Login;
