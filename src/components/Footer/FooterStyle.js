import styled from 'styled-components';
import {
    colors,
    breakpoints
} from '../../lib/style/theme';

export const Footer = styled.footer `
    padding: 20px;
	background-color: ${colors.darkGrey};

    @media screen and (${breakpoints.tablet}) {
        padding: 30px;
    }
`;

export const Description = styled.p `
    color: ${colors.lightGrey};
    font-size: 12px;
    text-align: center;

    @media screen and (${breakpoints.tablet}) {
        font-size: 14px;
    }
`;


   

