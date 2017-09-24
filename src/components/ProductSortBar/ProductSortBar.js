import React from 'react'
import styled from 'styled-components'
import autobind from 'react-autobind'
import { globals, space, color, fontSize } from 'constants/styles'

import FaCaretDown from 'react-icons/lib/fa/caret-down'

import Input from 'components/Input'
import Select from 'components/Select'
import Checkbox from 'components/Checkbox'

const Row = styled.div`
  ${globals}
  min-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 ${space.sm}px;
  min-height: 50px;
`
const Column = styled.div`
  ${globals}
  width: 100%;
  max-width: ${props => props.maxWidth};
  min-width: ${props => props.minWidth};
  min-height: 100%;
  padding: 0 ${space.sm}px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: ${props => props.align || 'left'};
  border-bottom: 4px solid transparent;
  &:hover {
    ${props => props.allowHover && `border-bottom: 4px solid ${color.blue};`}
  }
`
const SortOption = styled.button`
  display: inline-block;
  height: 100%;
  text-align: inherit;
  font-weight: 500;
  font-size: ${fontSize.md};
  color: ${color.grayDark};
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  margin-top: 2px;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`
const Arrow = styled(FaCaretDown)`
  width: 14px;
  fill: ${color.grayLight};
  margin: -1px 0 0 ${space.sm}px;
  transition: transform 0.3s;
  transform: rotateZ(${props => props.up ? '-180deg' : '0deg'});
`


export default class ProductRow extends React.Component {
  constructor (props) {
    super(props)
    autobind(this)
  }

  changeSort (key) {
    const value = this.props[key] === 'up' ? 'down' : 'up'
    this.props.onSortChanged && this.props.onSortChanged(key, value)
  }

  selected (value) {
    this.props.onSelected && this.props.onSelected(value)
  }

  render () {
    return (
      <Row>
        <Column allowHover maxWidth={'40px'}>
          {this.props.selected
            ? <Checkbox checked onClick={() => this.selected(false)} />
            : <Checkbox onClick={() => this.selected(true)} />
          }
        </Column>

        <Column allowHover minWidth={'238px'}>
          <SortOption name='description' onClick={() => this.changeSort('description')}>
            Name
            <Arrow up={this.props.description === 'up'} />
          </SortOption>
        </Column>

        <Column allowHover minWidth={'140px'} maxWidth={'180px'} align='right'>
          <SortOption name='type' onClick={() => this.changeSort('type')}>
            Type
            <Arrow up={this.props.type === 'up'} />
          </SortOption>
        </Column>

        <Column allowHover minWidth={'120px'} maxWidth={'120px'} align='right'>
          <SortOption name='price' onClick={() => this.changeSort('price')}>
            Price
            <Arrow up={this.props.price === 'up'} />
          </SortOption>
        </Column>

        <Column allowHover minWidth={'120px'} maxWidth={'120px'} align='right'>
          <SortOption name='inventory' onClick={() => this.changeSort('inventory')}>
            Inventory
            <Arrow up={this.props.inventory === 'up'} />
          </SortOption>
        </Column>
      </Row>
    )
  }
}

