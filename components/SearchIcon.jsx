import React from 'react';
const SearchIcon = (props) => {
    return (
        <div>
            <svg
                {...props}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="darkblue"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
        </div>
    );
}

export default SearchIcon;