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

const AppHeader = ({liked, allPosts}) => {
    /* Первый вариант вывода*/
    // function rightWord(numberOfPosts) {       
    //     return ((numberOfPosts % 10) === 1 && numberOfPosts !== 11) ? 
    //             `${allPosts} запись, из них понравились ${liked}` :
    //             ( numberOfPosts % 10 >= 2 && 
    //               numberOfPosts % 10 <= 4 && 
    //              (numberOfPosts < 10 || numberOfPosts > 20) 
    //             ) ? `${allPosts} записи, из них понравились ${liked}` :
    //             `${allPosts} записей, из них понравились ${liked}`;
    // }
    
    /* Второй вариант*/ 
    function declOfNum(n, titles) {  
        return titles[(n%10===1 && n%100!==11) ? 0 : 
                      (n%10>=2 && n%10<=4 && (n%100<10 || n%100>20))? 1 : 2];  
    }
    let titleNames = [`${allPosts} запись, из них понравились ${liked}`, 
                      `${allPosts} записи, из них понравились ${liked}`, 
                      `${allPosts} записей, из них понравились ${liked}`
                    ];
    
    return(
        <Header>
            <h1>Eugene Zub</h1>
            {/* <h2>{rightWord(allPosts)}</h2> */}
            <h2>{declOfNum(allPosts, titleNames)}</h2>
        </Header>
    )
}

export default AppHeader;