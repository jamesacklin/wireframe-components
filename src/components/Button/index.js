import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { variant } from "styled-system"

const button = styled.button`
  font-family: "Ubuntu", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  display: inline-block;
  font-size: 1em;
  margin: 0 0.5em;
  padding: 0.5em 1em;
  line-height: 1em;
  cursor: pointer;
  outline: none;
  appearance: button;
`

const Btn = styled(button)(
  variant({
    variants: {
      default: {
        color: 'black',
        bg: 'white',
        borderColor: 'black'
      },
      primary: {
        color: 'white',
        bg: 'black',
        borderColor: 'black'
      },
      secondary: {
        color: 'white',
        bg: 'gray',
        borderColor: 'gray'
      }
    }
  })
)

Button.defaultProps = {
  variant: 'default',
  children: 'Button Label'
}

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'secondary']),
  children: PropTypes.string
}

export default function Button(props) {
  return (
    <Btn {...props}>{props.children}</Btn>
  )
}