import React from "react";
import styled from "styled-components";
import profile from "./profile-picture.png";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required("Email is Required").email("Not a valid email"),
    password: yup.string().required("Password is Required"),
}).required();

const StyledWrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`;

const StyledHeader = styled.h1`
    color: #2f2d2f;
    margin-left: 2rem;
`;

const StyledInput = styled.input`
    background: #ffffff;
    border: 1px solid #c7c7c7;
    height: 63px;
    width: 337px;
    padding-left: 10px;
    font-size: 18px;
`;

const StyledIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-left: -40px;
    margin-bottom: -10px;
`;

const StyledErrorText = styled.p`
    color: red;
`;


const StyledButton = styled.button`
    height: 64px;
    width: 358px;
    background: #2f2d2f;
    color: #ffffff;
    text-align: center;
    font-size: 28px;
    border: 0;
    cursor: pointer;
    &:hover {
        background: #cc55d1
    }
`;

const Week4 = () => {

    const { register, handleSubmit, formState: {errors} }= useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = data => console.log(data);
    return (
        <StyledWrapper>
            <img src={profile} />
            <StyledHeader> Welcome </StyledHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p>
                    <StyledInput 
                        type="text" 
                        name="email" 
                        placeholder="Email"
                        {...register("email")}
                    />
                </p>
                <StyledErrorText> {errors.email?.message} </StyledErrorText>

                <p>
                    <StyledInput 
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        {...register("password")} 
                    />
                    <StyledErrorText> {errors.password?.message} </StyledErrorText>
                </p>
                <p>
                    <StyledButton type="submit"> Login </StyledButton>
                </p>
            </form>
        </StyledWrapper>
    );
};


export default Week4;