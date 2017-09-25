import React from 'react'
import styled from 'styled-components'
import autobind from 'react-autobind'
import productTypes from 'constants/product-types'
import { globals, space, color } from 'constants/styles'

import Input from 'components/Input'
import Select from 'components/Select'
import Checkbox from 'components/Checkbox'

const Row = styled.div`
  ${globals}
  min-width: 700px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${space.sm}px;
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
  width: 32px;
  height: 32px;
  display: inline-block;
  border: 1px solid ${color.grayLight2};
  border-radius: 1px;
  background: white;
  overflow: hidden;
  position: relative;
  img {
    max-width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`
const MissingValue = styled.span`
  font-style: italic;
  color: ${color.grayLight};
`
const Submit = styled.input`
  display: none;
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
    this.props.onChange && this.props.onChange(state)
  }

  /**
   * Row click handler
   * Fire changed event to toggle selected as long as user didn't click on text input
   */
  clickedRow (e) {
    if (e.target instanceof window.HTMLInputElement || e.target instanceof window.HTMLSelectElement) return
    this.changed({ selected: !this.props.selected })
  }

  changedInput (e) {
    const target = e.target
    const key = e.target.getAttribute('name')
    this.changed({
      [key]: target.value
    })
  }

  render () {
    // Unselected Row - Just display values
    if (!this.props.selected) {
      return (
        <Row onClick={this.clickedRow} className={this.props.className}>
          <Column maxWidth={'40px'}>
            <Checkbox />
          </Column>
          <Column maxWidth={'58px'}>
            <ImageWrapper>
              <img src={this.props.thumbnail} />
            </ImageWrapper>
          </Column>
          <Column minWidth={'180px'}>
            {this.props.name || <MissingValue>No Name Yet</MissingValue>}
          </Column>
          <Column minWidth={'140px'} maxWidth={'180px'} align='right'>
            {this.props.type}
          </Column>
          <Column minWidth={'120px'} maxWidth={'120px'} align='right'>
            {this.props.price ? '$' + this.props.price : <MissingValue>{'$0.00'}</MissingValue>}
          </Column>
          <Column minWidth={'120px'} maxWidth={'120px'} align='right'>
            {this.props.inventory || <MissingValue>0</MissingValue>}
          </Column>
        </Row>
      )
    }

    // Selected Row - Render form with inputs instead of plain values
    return (
      <form onSubmit={this.clickedRow}>
        <Row selected onClick={this.clickedRow} className={this.props.className}>
          <Column maxWidth={'40px'}>
            <Checkbox checked />
          </Column>

          <Column maxWidth={'58px'}>
            <ImageWrapper>
              <img src={this.props.thumbnail} />
            </ImageWrapper>
          </Column>

          <Column minWidth={'180px'}>
            <Input
              defaultValue={this.props.name}
              placeholder={'Enter product name...'}
              name='name'
              onChange={this.changedInput}
            />
          </Column>

          <Column minWidth={'140px'} maxWidth={'180px'} align='right'>
            <Select
              defaultValue={this.props.type}
              name='type'
              onChange={this.changedInput}>
              {productTypes.map(type => <option value={type}>{type}</option>)}
            </Select>
          </Column>

          <Column minWidth={'120px'} maxWidth={'120px'} align='right'>
            <Input
              defaultValue={this.props.price || ''}
              placeholder='0.00'
              symbol='$'
              name='price'
              onChange={this.changedInput}
            />
          </Column>

          <Column minWidth={'120px'} maxWidth={'120px'} align='right'>
            <Input
              defaultValue={this.props.inventory || ''}
              placeholder='0'
              name='inventory'
              onChange={this.changedInput}
            />
          </Column>
        </Row>
        <Submit type='submit' value='Submit' />
      </form>
    )
  }
}
