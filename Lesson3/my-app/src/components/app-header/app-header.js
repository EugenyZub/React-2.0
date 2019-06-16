import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
    }

    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts})=> {

    function rightWord(numberOfPosts) {
        if((numberOfPosts % 10) === 1 && numberOfPosts !== 11) {
            return `${allPosts} запись, из них понравились ${liked}`;
        } else if ( ( (numberOfPosts % 10) === 2 && numberOfPosts < 10) || ( (numberOfPosts % 10) === 2 && numberOfPosts > 20) ||
                    ( (numberOfPosts % 10) === 3 && numberOfPosts < 10) || ( (numberOfPosts % 10) === 3 && numberOfPosts > 20) ||
                    ( (numberOfPosts % 10) === 4 && numberOfPosts < 10) || ( (numberOfPosts % 10) === 4 && numberOfPosts > 20) ){
            return `${allPosts} записи, из них понравились ${liked}`;
        } else {            
            return `${allPosts} записей, из них понравились ${liked}`;
        }
    }

    return(
        <Header>
            <h1>Eugene Zub</h1>
            <h2>{rightWord(allPosts)}</h2>
        </Header>
    )
}

export default AppHeader;