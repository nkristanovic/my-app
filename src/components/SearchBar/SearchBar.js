import React from 'react';
import {
    SearchBarWrapper,
    Form,
    Input
} from './SearchBarStyle';


const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <Form>
                <Input 
                    placeholder='Search event by title...' 
                />
            </Form>
        </SearchBarWrapper>
    )
}

export default SearchBar;