import styled from "styled-components";

export const Container = styled.main`
    font-family: ${props => props.theme.fontstack};
    color: ${props => props.theme.colours.black};
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25;

    @media screen and (min-width: ${props => props.theme.breakpoints.m}){
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
    }
`
