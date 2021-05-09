import styled from 'styled-components';
import{
    colors,
    boxShadow,
    breakpoints
} from '../../lib/style/theme';

export const TableWrapper = styled.table `
    color: ${colors.white};
    border-radius: 5px;
    text-align: center;
    box-shadow: ${boxShadow};
    width: 100%;
    @media screen and (${breakpoints.desktop}) {
        padding: 15px 0;
        max-width: 993px;
    }
    @media screen and (${breakpoints.desktopLarge}) {
        max-width: 1280px;
    }
`;

export const TableHead = styled.thead `
   padding: 10px; 
`;

export const TableBody = styled.tbody `
   padding: 10px;
   border-radius: 5px;
`;

export const Tr = styled.tr`
    text-align: left;
    background: ${colors.lightGrey};
    color: ${colors.black};
    
    &:hover {
        background: ${colors.lightGrey};
    }

    &:nth-child(odd) {
        background: ${colors.white};
        &:hover {
        background: ${colors.lightGrey};
        }
    }

`;

export const Th = styled.th `
    padding: 10px;
    background: ${colors.red};
    color: ${colors.white};
    
    &:nth-child(1) {
        width: 5%;
    }
    &:nth-child(2) {
        width: 20%;
    }
    &:nth-child(3) {
        width: 10%;
    }
    &:nth-child(4) {
        width: 20%;
    }
    &:nth-child(5) {
        width: 20%;
    }
    &:nth-child(6) {
        width: 10%;
    }
    &:nth-child(7) {
        width: 10%;
    }
    &:nth-child(8) {
        width: 5%;
    }

    @media screen and (${breakpoints.small}) {
        &:nth-child(1) {
            width: 5%;
        }
        &:nth-child(2) {
            width: 90%;
        }
        &:nth-child(3) {
            display:none;
        }
        &:nth-child(4) {
            display:none;
        }
        &:nth-child(5) {
            display:none;
        }
        &:nth-child(6) {
            display:none;
        }
        &:nth-child(7) {
            display:none;
        }
        &:nth-child(8) {
            width: 5%;
        }
    }

    @media screen and (${breakpoints.mobileLargeMax}) {
        max-width: 768px;
        &:nth-child(1) {
            width: 5%;
        }
        &:nth-child(2) {
            width: 70%;
        }
        &:nth-child(3) {
            width: 10%;
        }
        &:nth-child(4) {
            display:none;
        }
        &:nth-child(5) {
            display:none;
        }
        &:nth-child(6) {
            display:none;
        }
        &:nth-child(7) {
            width: 10%;
        }
        &:nth-child(8) {
            width: 5%;
        }
    }
`;

export const Td = styled.td `
    padding: 20px 10px;
    
    &:nth-child(1) {
        width: 5%;
    }
    &:nth-child(2) {
        width: 20%;
    }
    &:nth-child(3) {
        width: 10%;
    }
    &:nth-child(4) {
        width: 20%;
    }
    &:nth-child(5) {
        width: 20%;
    }
    &:nth-child(6) {
        width: 10%;
    }
    &:nth-child(7) {
        width: 10%;
    }
    &:nth-child(8) {
        width: 5%;
    }

    @media screen and (${breakpoints.small}) {
        &:nth-child(1) {
            width: 5%;
        }
        &:nth-child(2) {
            width: 90%;
        }
        &:nth-child(3) {
            display:none;
        }
        &:nth-child(4) {
            display:none;
        }
        &:nth-child(5) {
            display:none;
        }
        &:nth-child(6) {
            display:none;
        }
        &:nth-child(7) {
            display:none;
        }
        &:nth-child(8) {
            width: 5%;
        }
    }

    @media screen and (${breakpoints.mobileLargeMax}) {
        &:nth-child(1) {
            width: 5%;
        }
        &:nth-child(2) {
            width: 70%;
        }
        &:nth-child(3) {
            width: 10%;
        }
        &:nth-child(4) {
            display:none;
        }
        &:nth-child(5) {
            display:none;
        }
        &:nth-child(6) {
            display:none;
        }
        &:nth-child(7) {
            width: 10%;
        }
        &:nth-child(8) {
            width: 5%;
        }
    }
`;

export const TableEmpty = styled.div `
    text-align: center;
    font-size: 14px;

    @media screen and (${breakpoints.desktopLarge}) {
        font-size: 16px;
    }
`;

export const DeleteIcon = styled.td `
    text-align: center;
`;