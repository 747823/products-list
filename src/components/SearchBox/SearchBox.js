import React from 'react'
import styled from 'styled-components'
import { space, color } from 'constants/styles'

// Using font-awesome icon for MVP, in real project replace this later with custom icon component
import FaSearchIcon from 'react-icons/lib/fa/search'
import Input from 'components/Input'

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  height: 42px;
  width: 100%;
  position: relative;
`
const IconWrapper = styled.div`
  position: absolute;
  left: ${space.md}px;
  top: 50%;
  transform: translateY(-50%);
  margin-top: -1px;
  svg {
    fill: ${color.gray};
  }
`
const SearchInput = styled(Input)`
  min-width: 160px;
  padding: ${space.md + 1}px ${space.md}px ${space.md - 1}px;
  padding-left: ${space.md * 2 + space.sm}px;
  border-radius: 2px;
`

const inputChanged = (props, event) => {
  const value = event.target.value
  props.onChange && props.onChange(value, event)
}

const SearchBox = (props) =>
  <Wrapper>
    <SearchInput {...props} onChange={(event) => inputChanged(props, event)} />
    <IconWrapper>
      <FaSearchIcon size={'1.25em'} />
    </IconWrapper>
  </Wrapper>

export default SearchBox
