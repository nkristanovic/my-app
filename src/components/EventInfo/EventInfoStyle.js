import styled from 'styled-components';
import {
    breakpoints
} from '../../lib/style/theme';

export const SectionEvent = styled.section `
    @media screen and (${breakpoints.tablet}) {
        padding: 0 25px 64px;
    }

    @media screen and (${breakpoints.desktop}) {
        padding: 0 0 64px;
        max-width: 930px;
        margin: 0 auto;
    }

     @media screen and (${breakpoints.desktopLarge}) {
        max-width: 1280px;
    }
`;

export const EventInfo = styled.div `
     @media screen and (${breakpoints.tablet}) {
        display: flex;
        justify-content: space-between;
     }
`;

export const Figure = styled.figure `
    width: 100%;
	height: 230px;
    margin-bottom: 24px;

    @media screen and (${breakpoints.mobileLarge}) {
        height: 300px;
    }

    @media screen and (${breakpoints.tablet}) {
        width: 400px;
        height: 230px;
    }

    @media screen and (${breakpoints.desktop}) {
        width: 600px;
        height: 350px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        width: 800px;
        height: 450px;
    }
`;

export const Image = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Content = styled.div `
    margin-bottom: 15px;

    @media screen and (${breakpoints.tablet}) {
        margin-bottom: 0;
        width: 270px;
    }

    @media screen and (${breakpoints.desktop}) {
        width: 300px;
    }

    @media screen and (${breakpoints.desktopLarge}) {
        width: 400px;
    }
`;

export const ContentRow = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    @media screen and (${breakpoints.tablet}) {
        margin-bottom: 32px;
    }

    @media screen and (${breakpoints.desktop}) {
        margin-bottom: 32px;
    }
`;

export const Item = styled.div `
    &:last-child {
        text-align: right;
    }
`;

export const ItemTitle = styled.h3 `
    font-size: 14px;
	margin-bottom: 4px;

    @media screen and (${breakpoints.tablet}) {
        font-size: 14px;
        margin-bottom: 12px;
    }

    @media screen and (${breakpoints.desktop}) {
       font-size: 16px;
    }
`;

export const ItemValue = styled.p `
    font-size: 14px;

    @media screen and (${breakpoints.tablet}) {
        font-size: 14px;
    }

    @media screen and (${breakpoints.desktop}) {
       font-size: 16px;
    }
`;

export const Description = styled.p `
    font-size: 14px;
	line-height: 150%;

    @media screen and (${breakpoints.tablet}) {
        width: 400px;
    }
    
    @media screen and (${breakpoints.desktop}) {
        width: 600px;
        font-size: 16px;
    }
    
    @media screen and (${breakpoints.desktopLarge}) {
        width: 800px;
    } 
`;

