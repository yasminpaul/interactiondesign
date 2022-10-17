import React from "react";
import loaderIdea1 from "./loader-idea1.gif";
import styled from "styled-components";

const OuterWrapper = styled.div`
    background: #232323;
    width: 100vw;
    height: 100vh;
`;

const StyledWrapper = styled.div`
    display: flex;
    background: #232323;
    justify-content: center;
    height: 70vw;
    flex-direction:row-reverse;
`;

const Week1 = () => (
    <OuterWrapper>
        <StyledWrapper>
            <div>
                <img src={loaderIdea1} />
            </div>
        </StyledWrapper>
    </OuterWrapper>
);

export default Week1;