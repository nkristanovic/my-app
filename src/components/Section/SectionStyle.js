import styled from 'styled-components';
import {
    breakpoints
} from '../../lib/style/theme';

export const Section = styled.section `
    padding: 60px 15px;

    &.topPadding.none {
        padding-top: 0;
    }

    @media  screen and (${breakpoints.tablet}) {
        padding: 80px 25px;
        
        &.topPadding_none {
            padding-top: 0;
        }
    }

    @media  screen and (${breakpoints.desktop}) {
        padding: 80px 0;
        max-width: 993px;
        margin: 0 auto;

        &.topPadding_none {
            padding-top: 0;
        }
    }

    @media  screen and (${breakpoints.desktopLarge}) {
        padding: 100px 0;
        max-width: 1280px;

        &.topPadding_none {
            padding-top: 0;
        }
    }
`;

export const Title = styled.h2 `
    text-align: center;
    font-size: 20px;
    margin-bottom: 32px;

    @media  screen and (${breakpoints.mobileLarge}) {
        font-size: 24px;
    }

    @media  screen and (${breakpoints.tablet}) {
        margin-bottom: 48px;
    }
    
    @media  screen and (${breakpoints.desktop}) {
        font-size: 28px;
    }

    @media  screen and (${breakpoints.desktopLarge}) {
        font-size: 32px;
    }
`;


