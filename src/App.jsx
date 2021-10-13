import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Rubik from './fonts/Rubik-VariableFont_wght.ttf'

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Rubik";
        src: url(${Rubik});
    }

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
        font-family: 'Rubik', sans-serif;
    }
`

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .valid-keys {
        font-size: 10em;
        font-weight: bold;
        min-width: 600px;
        border-bottom: solid 2px #f1f1f1;

        .matched {
            background-color: #fdf8c5;
            color: #282c24
        }

        .remainder {
            opacity: 0.5;
        }
    }

    .typed-keys {
        margin-top: 20px;
        font-size: 1.3rem;
        width: 600px;
        overflow: hidden;
    }

    .completed-words {
        width: max-content;
        height: 100vh;
        overflow-y: scroll;
        position: fixed;
        top: 0;
        right: 0;
        text-align: left;
        padding: 20px 40px;
        font-size: 1.8em;
        line-height: 2.5rem;
        opacity: 0.5;
    }
`

const App = (props) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Wrapper>
                <div className="valid-keys">
                    <span className="matched">hellowor</span>
                    <span className="remainder">ld</span>
                </div>
                <div className="typed-keys">sdhasjdhelloworsdjasd</div>
                <div className="completed-words">
                    <ol>
                        <li>programmed</li>
                        <li>circuit</li>
                        <li>javascript</li>
                    </ol>
                </div>
            </Wrapper>
        </React.Fragment>
    )
}

export default App