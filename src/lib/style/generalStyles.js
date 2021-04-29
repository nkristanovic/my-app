import styled from 'styled-components';
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

export const Button = styled(Link) `
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

export const Main = (props) => {
    return (
        <main>
            {props.children}
        </main>
    );
}
