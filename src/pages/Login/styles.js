import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    background-color: #001f23;
`;

export const Form = styled.form`
    /* button {
        color: #fff;
        background-color: #f2681b;
        border-width: 0;
        border-radius: 5px;
        height: 40px;
        width: 40vh;
        max-width: 300px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
    } */
    input {
        border-radius: 5px;
        height: 40px;
        max-width: 400px;
        width: 60vh;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        padding-left: 5px;
        border-width: 1px;
    }
`;
export const LoginButton = styled.button.attrs(props=>({
    type:'submit',
    disabled:props.loading,
})
)`
    color: #fff;
    background-color: #f2681b;
    border-width: 0;
    border-radius: 5px;
    height: 40px;
    width: 40vh;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;


    &[disabled]{
        cursor:not-allowed;
        opacity:0.6;
    }

`;
export const LogoContainer = styled.div`
    flex: 1;
    margin: 10vh;
    margin-right: 0;
    padding: 15vh;
    padding-right: 0;
    padding-left: 0;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 10vh;
    border-left-style: solid;
    border-left-width: 1px;
    border-left-color: #fff;
    padding: 15vh;
    padding-right: 0;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const Title = styled.h1`
    align-self: center;
    font-family: "Noto Serif", serif;
    color: #fff;
    font-weight: 100;
`;

export const SubTitle = styled.h3`
    align-self: center;

    color: #fff;
    font-size: 16px;
    font-weight: 100;
`;

export const SignInButton = styled.a`
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
`;
