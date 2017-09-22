import React from 'react'
import styled from 'styled-components'
import { globals, space, color } from 'constants/styles'

const CheckboxWrapper = styled.div`
  display: inline-block;
  padding: ${space.sm};
`

const CheckboxBtn = styled.button`
  display: inline-block;
  line-height: 0;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  padding: 0;
  position: relative;
  background: ${props => props.checked ? color.blue : 'transparent'};
  border: 1px solid ${props => props.checked ? color.blue : color.gray};
  cursor: pointer;
  &:after {
    font-size: 16px;
    content: '✓';
    position: absolute;
    color: white;
    top: 8px;
    left: 2px;
    display: ${props => props.checked ? 'block' : 'none'};
  }
  &:focus {
    outline: none;
    border: 1px solid ${props => props.checked ? color.blueDark : color.grayDark};
    background: ${props => props.checked ? color.blueDark : 'transparent'};
  }
`

const HiddenInput = styled.input`
  position: absolute;
  visibility: hidden;
`

const Checkbox = (props) =>
  <span>
    <CheckboxBtn {...props}></CheckboxBtn>
    <HiddenInput
      type='checkbox'
      value={props.checked}
    />
  </span>

export default Checkbox

