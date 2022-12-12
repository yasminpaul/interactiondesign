import React from "react";
import styled from "styled-components";
import loginInput from "./logininput.svg";


const StyledInput = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 28vw;
    height: 28vh;
    padding-top: 90px;
`;

const StyledWrapper = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const StyledButton = styled.button`

    color: #fff;
    background-color: ${(props) => props.color};
    padding: 1rem 2rem;
    font-size: 1.25rem;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.2rem rgba(0,0,0.3);
    cursor: pointer;
    margin: 2%;
`;

const StyledButton2 = styled.button`

    color: #000;
    background-color: ${(props) => props.color};
    padding: 1rem 2rem;
    font-size: 1.25rem;
    border-color: #000
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.2rem rgba(0,0,0.3);
    cursor: pointer;
    margin: 2%;
    &:hover {
        background: #494949
    }
`;

export const Button = (props) => {

    const { children, color, ...other } = props;
    return <StyledButton color={color}{...other}>{children}</StyledButton>;
};

export const Button2 = (props) => {

    const { children, color, ...other } = props;
    return <StyledButton2 color={color}{...other}>{children}</StyledButton2>;
};

const ButtonCom = () => {
    return (
        <><div>
            <StyledInput src={loginInput} />
        </div>
            <StyledWrapper>
                <Button color="#000000"> Sign in</Button>
                <Button2 color="#FFFFFF"> Checkout as guest </Button2>
            </StyledWrapper></>);
};

export default ButtonCom;