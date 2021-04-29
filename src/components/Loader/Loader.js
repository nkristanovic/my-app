import Loader from "react-loader-spinner";
import styled from 'styled-components';

const LoaderWrapper = styled.div `
    text-align: center;
`;

const LoaderBars = () => {
    return (
        <LoaderWrapper>
            <Loader 
            type="Oval" 
            color= "#333333"
            height={80} 
            width={80} 
            />
        </LoaderWrapper>
    )
}

export default LoaderBars;