import React, { useState } from "react";
import styled from "styled-components";
import closeIcon from "./close_icon.svg";
import burgerMenu from "./burger_menu.svg"
import { useSwipeable } from "react-swipeable";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

`;

const StyledSideNav = styled.div`
    height: 100vh;
    width: ${(props) => props.open ? '250px' : '0px'};
    transition: 1s;
    position: fixed;
    top: 0;
    left: 0;
    background: #111111;
`;

const StyledCLoseIcon = styled.img`
    float: right;
    width: 25px;
    height: 25px;
    fill: white;
    margin: 1rem 1rem;
    cursor: pointer;
`;

const StyledNav = styled.ul`
    display: flex;
    color: white;
    flex-direction: column;

    & li {
        text-align: center;
        list-style: none;
        margin-top: 4rem;
        cursor: pointer;
        &:hover {
            color: grey;
        }
    }`;

const StyledBurgerMenu = styled.img`
    float: right;
    width: 50px;
    height: 50px;
    fill: black;
    margin: 1rem 1rem;
    cursor: pointer;
`;


const Week5 = () => {

    const [navOpen, setNavOpen] = useState(true);
    const handleSwipe = useSwipeable({
        trackmouse: true,
        onSwipedRight: () => setNavOpen(true)
    });

    const handleClose = () => {
        setNavOpen(false);
    };

    const handleOpen = () => {
        setNavOpen(true);
    };


    return (<>
        <StyledWrapper {...handleSwipe} >
            <StyledSideNav open={navOpen}>
                <StyledCLoseIcon onClick={handleClose} src={closeIcon} />
                {
                    navOpen &&
                    (<StyledNav>
                        <li>Home</li>
                        <li>About</li>
                        <li>Privacy</li>
                    </StyledNav>)
                }
            </StyledSideNav>
            <StyledBurgerMenu onClick={handleOpen} src={burgerMenu} />

        </StyledWrapper>

    </>
    );
};

export default Week5;