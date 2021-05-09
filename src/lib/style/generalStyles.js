import styled, { css } from 'styled-components';
import {
    breakpoints,
    transitionEase,
    colors
} from './theme';
import { Link } from 'react-router-dom';

export const Grid = styled.div`
    display: grid;
    row-gap: 32px;

    @media  screen and (${breakpoints.mobileLarge}) {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 32px;
    }

    @media  screen and (${breakpoints.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        ${props => props.columns === 3 &&
            'padding: 0 32px'
        }
    }

    @media  screen and (${breakpoints.desktopLarge}) {
        ${props => props.columns === 3 &&
            'padding: 0 84px'
        }

        grid-template-columns: repeat(4, 1fr);
        ${props => props.columns === 4 &&
            'column-gap: 32px'
        }
    }
`
export const ButtonDefault = css `
    display: block;
    text-decoration: none;
    width: 100%;
    line-height: 40px;
    text-align: center;
    border: 1px solid #d33e3e;
    border-radius: 6px;
    background: ${colors.red};
    color: ${colors.white};
    transition: ${transitionEase};
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;

    &:hover {
        cursor: pointer;
        border-color: ${colors.yellow};
        background: ${colors.yellow};
    }

    &:focus {
        outline: none;
    }
`;

export const Button = styled(Link) `
    ${ButtonDefault}
`;

export const Main = (props) => {
    return (
        <main>
            {props.children}
        </main>
    );
}

export const Form = styled.form `
    width: 100%;
    margin: 0 auto;
    @media screen and (${breakpoints.mobileLarge}) {
        width: 400px;
    }
`;

export const FormRow = styled.div `
    margin-bottom: 32px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const CheckboxWrapper = styled.div `
    display: flex;
    align-items: center;
`;

export const InputLabel = styled.label `
    font-size: 14px;
    display: block;
    font-weight: 600;
    margin-bottom: 4px;
    
    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const InputText = styled.input `
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    width: 100%;
    line-height: 40px;
    padding: 0 10px;
    outline: none;
    font-size: 14px;
    font-family: 'Monteserrat', sans-serif;

    &:focus {
        border-color: ${colors.yellow};
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const TextArea = styled.textarea `
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    width: 100%;
    line-height: 150%;
    padding: 10px;
    outline: none;
    font-size: 14px;
    font-family: 'Monteserrat', sans-serif;
    min-width: 100%;

    &:focus {
        border-color: ${colors.yellow};
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }
`;

export const InputCheckbox = styled.input `
    margin-right: 12px;
    width: 18px;
    height: 18px;
`;

export const InputError = styled.p `
    font-size: 14px;
    color: ${colors.red};
    padding-top: 8px;
`;

export const ButtonSubmit = styled.button `
    ${ButtonDefault}
`;

export const FormColumn = styled.div `
    
    @media screen and (${breakpoints.tablet}) {
        display: flex;
        gap: 10px;
    }
`;

export const Select = styled.select `
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    line-height: 40px;
    padding: 10px 90px 10px 5px;
    text-align: left;
    outline: none;
    font-size: 14px;
    font-family: 'Monteserrat', sans-serif;

    &:focus {
        border-color: ${colors.yellow};
    }

    @media screen and (${breakpoints.mobileLargeMax}) {
        width: 100%;
    }

    @media screen and (${breakpoints.desktop}) {
        font-size: 16px;
    }

    option {
        background: ${colors.darkGrey};
        color: ${colors.white};
        font-size: 15px;
    }
`;

export const ButtonAddEvent = styled.button `
    ${ButtonDefault};
    width: 25%;
    font-size: 12px;
    background: ${colors.white};
    color: ${colors.black};
    line-height: 30px;
    text-align: center;
    margin-bottom: 15px;
    border: 1px solid ${colors.darkGrey};
    border-radius: 6px;

    @media screen and (${breakpoints.mobileLarge}) {
        font-size: 14px;
        width: 20%;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        font-size: 16px;
        width: 15%;
    }
`;