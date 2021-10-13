import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Rubik from './fonts/Rubik-VariableFont_wght.ttf'
import wordList from './resources/words.json'

import Word from './components/Word'

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
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

const getWord = () => {
    const index = Math.floor(Math.random() * wordList.length)
    const word = wordList[index]

    return word.toLowerCase()
}

const isValidKey = (word, key) => {
    return word ? word.includes(key) : false
}

const App = (props) => {
    const [typedKeys, setTypedKeys] = useState([])
    const [validKeys, setValidKeys] = useState([])
    const [word, setWord] = useState('')

    useEffect(() => {
        setWord(getWord())
    }, [])

    const handleKeyDown = (e) =>{
        e.preventDefault()
        const {key} = e

        setTypedKeys((prevTypedKeys) => {
            return [...prevTypedKeys, key].slice(-30)
        })

        if(isValidKey(word, key)){
            setValidKeys((prev) => {
                const isValidLength = prev.length <= word.length
                const isNextChar = isValidLength && word[prev.length] === key
                return isNextChar ? [...prev, key] : [...prev]
            })
        }
    }
    
    return (
        <React.Fragment>
            <GlobalStyle />
            <Wrapper tabIndex="0" onKeyDown={handleKeyDown}>
                <Word word={word} validKeys={ validKeys } /> 
                <div className="typed-keys">{typedKeys ? typedKeys.join(' ') : null}</div>
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