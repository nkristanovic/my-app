import React from 'react';
import {
    SearchBarWrapper,
    Input
} from './SearchBarStyle';

const SearchBar = (props) => {     

    return (
        <SearchBarWrapper>
                <Input
                    placeholder='Search event by title...' 
                    disabled={props.disabled}
                    onChange={props.onChange}
                    value={props.value}
                />
        </SearchBarWrapper>
    )
}

export default SearchBar;