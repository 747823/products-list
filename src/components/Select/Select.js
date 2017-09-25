import React from 'react'
import styled from 'styled-components'
import { globals, space, color } from 'constants/styles'

const SelectWrapper = styled.div`
  ${globals}
  display: inline-block;
  vertical-align: middle;
  height: 32px;
  min-width: 60px;
  width: 100%;
  position: relative;
`

const SelectElement = styled.select`
  ${globals}
  border: 0;
  background: white;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1px ${space.sm}px 0;
  border: 1px solid ${color.grayLight};
  box-shadow: inset 0 0 1px ${color.grayLight};
  text-align: inherit;
  &:hover {
    border: 1px solid ${color.gray};
    color: ${color.grayDark}
  }
`

const Select = (props) =>
  <SelectWrapper className={props.className}>
    <SelectElement {...props}>
      {props.children}
    </SelectElement>
  </SelectWrapper>

export default Select
