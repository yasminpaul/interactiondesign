import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import dropdownMenu from "./dropdown_menu.svg";

const StyledWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const StyledMenu = styled.ul`
    animation: 0.5s ${keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })} linear;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    background: #D9D9D9;
    & li {

        &: hover {
            background: #8E2F9D;
        }

        cursor: pointer;
        text-align: center;
        width: 80%;
        height: 10px;
        list-style: none;
        margin-top: 1rem;
        padding: 30px;
    }
`;

const StyledDropdownMenu = styled.img`
    width: 300px;
    float: right;
    cursor: pointer;
`;

const Menu = (props) => {

    const { open, onClick } = props;

    return (
        <>

            {
                open && (<StyledMenu>
                    <li onClick={onClick}> X-small </li>
                    <li onClick={onClick}> Small </li>
                    <li onClick={onClick}> Medium </li>
                    <li onClick={onClick}> Large </li>
                    <li onClick={onClick}> X-large </li>
                </StyledMenu>)
            }
        </>
    )
};

const Week6 = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <StyledWrapper>
            <StyledDropdownMenu onClick={handleClick} src={dropdownMenu} />
            <Menu open={open} onClick={handleClick} />
        </StyledWrapper>)
};

export default Week6;