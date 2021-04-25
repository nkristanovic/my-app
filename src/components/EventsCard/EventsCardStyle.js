import styled from 'styled-components';
import {
    boxShadow,
    transitionCubic,
    boxShadowHover,
} from '../../lib/style/theme';

export const EventsCard = styled.div `
    border: 1px solid #d0d0d0;
	box-shadow: ${boxShadow};
	transition: ${transitionCubic};
	border-radius: 6px;
	padding: 10px;

    &:hover {
        box-shadow: ${boxShadowHover};
    }
`;

export const Title = styled.h2 `
    font-size: 18px;
    border-bottom: 1px solid #d0d0d0;
    text-align: center;
    margin-bottom: 15px;
    padding: 15px;
`;

export const Content = styled.div `
    margin-bottom: 15px;
`;

export const ContentRow = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`;

export const Item = styled.div `
    &:last-child {
        text-align: right;
    }
`;

export const ItemTitle = styled.h3 `
    font-size: 12px;
	margin-bottom: 4px;
`;

export const ItemValue = styled.p `
    font-size: 12px;
`;
