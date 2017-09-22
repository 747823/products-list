import React from 'react'
import styled from 'styled-components'
import { globals, space, color } from 'constants/styles'

const StyledButton = styled.button`
  ${globals}
  border-radius: 2px;
  padding: ${space.sm + 2}px ${space.md}px ${space.sm}px;
  display: inline-block;
  background: transparent;
  transition: background 0.2s, color 0.2s, border 0.2s;
  cursor: pointer;
`

const DefaultButton = StyledButton.extend`
  border: 1px solid ${color.grayLight};
  box-shadow: inset 0 0 1px ${color.grayLight};
  &:hover, &:focus {
    outline: none;
    border: 1px solid ${color.gray};
    color: ${color.grayDark}
  }
`

const PrimaryButton = StyledButton.extend`
  border: 1px solid ${color.blue};
  background: ${color.blue};
  color: white;
  font-weight: 300;
  &:hover, &:focus {
    outline: none;
    border: 1px solid ${color.blueDark};
    background: ${color.blueDark};
  }
`

const Button = (props) => {
  const Btn = props.primary ? PrimaryButton : DefaultButton

  return (
    <Btn {...props}>
      {props.children}
    </Btn>
  )
}

export default Button

