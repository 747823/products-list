import React from 'react'
import styled from 'styled-components'
import autobind from 'react-autobind'
import { globals, space, color } from 'constants/styles'

import Input from 'components/Input'
// import Select from 'components/Select'
import Checkbox from 'components/Checkbox'

const Row = styled.div`
  ${globals}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${space.sm}px ${space.md}px;
  background: ${props => props.selected ? color.grayLighter : 'white'};
  min-height: 50px;
  &:hover {
    background: ${color.grayLighter}
  }
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
`
const ImageWrapper = styled.div`
  width: 36px;
  height: 36px;
  display: inline-block;
  border: 1px solid ${color.grayLight};
  background: white;
  overflow: hidden;
  img {
    max-width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`
const NoDesc = styled.span`
  font-style: italic;
  color: ${color.grayLight};
`

export default class ProductRow extends React.Component {
  constructor () {
    super()
    autobind(this)
  }

  /**
   * Arbitrary change handler to pass state changes to parent
   */
  changed (state) {
    this.props.onChange && this.props.onChange(state);
  }

  /**
   * Row click handler
   * Fire changed event to toggle selected as long as user didn't click on text input
   */
  clickedRow (event) {
    if (event.target && !event.target.getAttribute('isInput')) {
      this.changed({ selected: !this.props.selected })
    }
  }

  render () {
    // Unselected - Just render values
    if (!this.props.selected) {
      return (
        <Row onClick={this.clickedRow}>
          <Column maxWidth={'40px'}>
            <Checkbox />
          </Column>

          <Column maxWidth={'58px'}>
            <ImageWrapper>
              <img src={this.props.imageUrl} />
            </ImageWrapper>
          </Column>

          <Column minWidth={'180px'}>
            {this.props.description || <NoDesc>No Description Yet</NoDesc>}
          </Column>

          <Column minWidth={'140px'} maxWidth={'180px'} align='right'>
            {this.props.type}
          </Column>

          <Column minWidth={'120px'} maxWidth={'120px'} align='right'>
            {this.props.price ? '$' + this.props.price : <NoDesc>{'$0.00'}</NoDesc>}
          </Column>

          <Column minWidth={'120px'} maxWidth={'120px'} align='right'>
            {this.props.inventory || <NoDesc>0</NoDesc>}
          </Column>
        </Row>
      )
    }

    // Selected - Render inputs instead of plain values
    return (
      <Row selected onClick={this.clickedRow}>
        <Column maxWidth={'40px'}>
          <Checkbox checked />
        </Column>

        <Column maxWidth={'58px'}>
          <ImageWrapper>
            <img src={this.props.imageUrl} />
          </ImageWrapper>
        </Column>

        <Column minWidth={'180px'}>
          <Input
            defaultValue={this.props.description} 
            placeholder={'No Description Yet'}
          />
        </Column>

        <Column minWidth={'140px'} maxWidth={'180px'} align='right'>
          <select defaultValue={this.props.type}>
            <option value={'physical'}>
              Physical
            </option>
          </select>
        </Column>

        <Column minWidth={'120px'} maxWidth={'120px'} align='right'>
          <Input defaultValue={this.props.price} symbol='$' />
        </Column>

        <Column minWidth={'120px'} maxWidth={'120px'} align='right'>
          <Input defaultValue={this.props.inventory} />
        </Column>
      </Row>
    )
  }
}

