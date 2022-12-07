import React from "react";
import loaderIdea from "./loader-idea4.gif";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    padding-top: 150px;
    justify-content: center;
    height: 70vw;
    flex-direction:row-reverse;
`;

const LoaderCom = () => (

    <StyledWrapper>
        <div>
            <img src={loaderIdea} />
        </div>
    </StyledWrapper>

);

export default LoaderCom;