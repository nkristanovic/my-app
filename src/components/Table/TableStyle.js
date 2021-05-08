import styled from 'styled-components';
import{
    colors,
    boxShadow
} from '../../lib/style/theme';

export const TableWrapper = styled.table `
    color: ${colors.white};
    margin: 20px;
    border-radius: 5px;
    boxShadow: ${boxShadow};
`;

export const TableHead = styled.thead `
   padding: 10px; 
`;

export const TableBody = styled.tbody `
   padding: 10px; 
`;

export const Tr = styled.tr`
    text-align: left;
    background: ${colors.darkGrey};
`;

export const Th = styled.th `
    width: 1%;
    padding: 5px;
    background: ${colors.red};
`;

export const Td = styled.td `
    width: 1%;
    padding: 5px;
`;

export const TableEmpty = styled.div `
    text-align: center;
`;