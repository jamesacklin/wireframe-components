import React from "react"
import styled from "styled-components"

const Btn = styled.button`
  font-family: "Ubuntu", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  background: ${props => props.primary ? "black" : "white"}
  color: ${props => props.primary ? "white" : "black"}
  font-size: 1em;
  margin: 1em;
  padding: 0.5em 1em;
  line-height: 1em;
  border: 1px solid black;
  cursor: pointer;
  outline: none;
  &:hover {
    background: gray;
    border: 1px solid gray;
    color: white;
  }
`

export default function Button(props) {
  return <Btn primary={props.primary} onClick={props.onClick}>{props.text}</Btn>
}