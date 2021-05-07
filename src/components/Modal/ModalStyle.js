import styled from 'styled-components';
import {
   colors,
} from '../../lib/style/theme';

export const ModalOverlay = styled.div `
   z-index: 1;
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   width: 100%;
   background-color: ${colors.blackOverlay};
`;

export const Inner = styled.div `
   display: flex;
   justify-content: space-between;
`;

export const Title = styled.h1 `
   font-size: 18px;
   color: ${colors.red};
`;

export const ButtonModalClose = styled.button `
   background: ${colors.white};
   border: none;
   font-weight: bold;
   font-size: 15px;

   &:hover {
      cursor: pointer;
   }
`;

export const ModalWrapper = styled.div `
   position: absolute;
   width: 40%;
   margin: 0 auto;
   
`;

export const ModalBody = styled.div `
   padding: 20px 20px;
   border-radius: 4px;
   background-color: ${colors.white};
`;



