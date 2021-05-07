import styled from 'styled-components';
import{
    colors
} from '../../lib/style/theme';

export const TableWrapper = styled.table `
    color: ${colors.white};
    margin: 20px;
    background: ${colors.red};
    border: 1px solid ${colors.red};
    border-radius: 5px;
`;

export const TableBody = styled.thead `
   padding: 10px; 
`;

export const Tr = styled.tr`
    text-align: left;
`;

export const Th = styled.th `
    width: 1%;
    padding: 5px;
`;

export const TableEmpty = styled.div `
    text-align: center;
`;