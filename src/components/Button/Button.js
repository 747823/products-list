import React from 'react'
import styled from 'styled-components'
import { globals, space, color } from 'constants/styles'

import IconArrowLeft from 'react-icons/lib/fa/angle-left'
import IconArrowRight from 'react-icons/lib/fa/angle-right'

const StyledButton = styled.button`
  ${globals}
  border-radius: 2px;
  padding: ${props => {
    if (props.small) return '2px 14px 0'
    return `2px ${space.md}px 0`
  }};
  height: ${props => props.small ? '32px' : '40px'};
  display: inline-block;
  vertical-align: middle;
  background: transparent;
  transition: background 0.2s, color 0.2s, border 0.2s;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  white-space: nowrap;
`

const DefaultButton = StyledButton.extend`
  color: ${props => props.disabled ? color.grayLight : color.gray};
  border: 1px solid ${props => props.disabled ? color.grayLighter : color.grayLight};
  box-shadow: inset 0 0 1px ${props => props.disabled ? color.grayLighter : color.grayLight};
  ${props => props.disabled ? '' : `
    &:hover {
      border: 1px solid ${color.gray};
      color: ${color.grayDark}
    }
  `}
`

const PrimaryButton = StyledButton.extend`
  border: 1px solid ${color.blue};
  background: ${color.blue};
  color: white;
  font-weight: 300;
  &:hover {
    border: 1px solid ${color.blueDark};
    background: ${color.blueDark};
  }
`

const Button = (props) => {
  const Btn = props.primary ? PrimaryButton : DefaultButton
  const BtnSize = props.small ? 32 : 40

  const ArrowButton = Btn.extend`
    width: ${BtnSize}px;
    min-width: ${BtnSize}px;
    max-width: ${BtnSize}px;
    padding: 0;
    svg {
      margin-top: -1px;
    }
  `

  if (props.arrowLeft) {
    return (
      <ArrowButton {...props}>
        <IconArrowLeft />
      </ArrowButton>
    )
  }

  if (props.arrowRight) {
    return (
      <ArrowButton {...props}>
        <IconArrowRight />
      </ArrowButton>
    )
  }

  return (
    <Btn {...props}>
      {props.children}
    </Btn>
  )
}

export default Button
