import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Wrapper = styled.div`
`

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        min-height: 100vh;
        color: #e1e1e1;
        background-color: #1e1e1e;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const App = (props) => {
    return (
        <Wrapper>
            <GlobalStyle />
            <h1>Hello World</h1>
        </Wrapper>
    )
}

export default App