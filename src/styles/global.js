import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


:root {
        --background: #212125;
        --background-page:#1B1B1F;
        --pink: #FE3189;
        --shadow:#FF0772;
        --text:#EAEAEA;
        --text-desc: #9F9FA0;
        --text-desc-single: #757575;
        --shape: #ffffff;
    }

::-webkit-scrollbar{
    width: 15px;
}

::-webkit-scrollbar-track{
    background: var(--background);
}

::-webkit-scrollbar-thumb{
    border-radius: 15px;
    background: var(--pink);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body, input, textarea, button, select {
    color: var(--text);
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    background-color: var(--background-page);
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button, select {
    cursor: pointer;
}

li{
    list-style: none;
}

a{
    text-decoration: none;
}
`