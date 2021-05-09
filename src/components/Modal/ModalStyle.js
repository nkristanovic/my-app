import styled from 'styled-components';
import {
   colors,
   breakpoints
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
   overflow-y: scroll;
`;

export const Inner = styled.div `
   display: flex;
   justify-content: space-between;
   margin-bottom: 20px;
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
   top: 5%;
   width: 80%;
   
   @media screen and (${breakpoints.mobileLarge}) {
      width: auto;
   }
`;

export const ModalBody = styled.div `
   padding: 10px 20px;
   border-radius: 4px;
   background-color: ${colors.white};
`;



