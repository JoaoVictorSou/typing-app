import React from "react";
import styled from "styled-components";

const WrapperWord = styled.div`
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
`

const Word = props => {
    const joinedKeys = props.validKeys.join('')
    const matched = props.word.slice(0, joinedKeys.length)
    const remainder = props.word.slice(matched.length, props.word.length) 
    return props.word ? (
        <WrapperWord>
            <span className="matched">{ matched }</span>
            <span className="remainder">{ remainder }</span>
        </WrapperWord>
    ) : null
}

export default Word