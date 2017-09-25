import React from 'react'
import styled from 'styled-components'
import { globals, space, color } from 'constants/styles'

const InputWrapper = styled.div`
  ${globals}
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  min-width: 60px;
  width: 100%;
  position: relative;
`
const InputElement = styled.input`
  ${globals}
  border: 0;
  background: white;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1px ${space.sm}px 0 ${props => props.symbol ? 30 : space.sm}px;
  border: 1px solid ${color.grayLight};
  box-shadow: inset 0 0 1px ${color.grayLight};
  text-align: inherit;
  &:hover {
    border: 1px solid ${color.gray};
    color: ${color.grayDark}
  }
`
const SymbolElement = styled.div`
  position: absolute;
  top: 8px;
  left: ${space.sm}px;
  color: ${color.grayLight};
`

const Input = (props) =>
  <InputWrapper className={props.className}>
    <InputElement
      type='text'
      {...props}
    />
    {props.symbol &&
      <SymbolElement>{props.symbol}</SymbolElement>
    }
  </InputWrapper>

export default Input
