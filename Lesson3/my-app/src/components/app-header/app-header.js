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
        let str = '';
        switch(numberOfPosts) {
            case 1: 
                str = `${allPosts} запись, из них понравились ${liked}`;
                break;
            case 2:
            case 3:
            case 4:
                str = `${allPosts} записи, из них понравились ${liked}`;
                break;
            default: 
                str = `${allPosts} записей, из них понравились ${liked}`;
                break;
        }
        return str;
    }

    return(
        <Header>
            <h1>Eugene Zub</h1>
            {/* <h2>{allPosts} записей, из них понравились {liked}</h2>        */}
            <h2>{rightWord(allPosts)}</h2>
        </Header>
    )
}

export default AppHeader;