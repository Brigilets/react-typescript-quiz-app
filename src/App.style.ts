import styled, {createGlobalStyle} from 'styled-components';
import BGImage from './images/summer-bg.jpg'

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

>p {
    color:#fff;   
}
.score {
    color:#fff;   
    font-size: 2rem;
    margin: 0;
}
h1 {
    font-family: Fascinate Inline, Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #fff,#bbcbf7);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-weight: 600;
    font-size: 60px;
    text-align: center;
    margin: 20px;
} 

.start, .next{
    cursor: pointer;
    background: linear-gradient(180deg, #bbcbf7, #f9d0a0);
    box-shadow:  opx 5px 10px rgba(0,0,0,0.25);
    border-radius: 10px;
    height: 50px;
    margin: 20px 0;
    padding: 0 40px;
}
`