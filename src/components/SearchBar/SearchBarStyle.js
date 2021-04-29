import styled from 'styled-components';
import {
    breakpoints,
    colors
} from '../../lib/style/theme';

export const SearchBarWrapper = styled.div `
    text-align: center;
    padding: 0 15px;
    margin-bottom: 40px;
    @media screen and (${breakpoints.mobileLarge}) {
        max-width: 400px;
        margin: 0 auto;
        margin-bottom: 40px;
        padding: 0;
    }
`;

export const Form = styled.form `
   
`;

export const Input = styled.input `
    border: 1px solid ${colors.darkGrey};
    border-radius: 6px;
    line-height: 40px;
    outline: none;
    font-size: 14px;
    width: 100%;
    &:hover {
        border-color: ${colors.yellow};
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;