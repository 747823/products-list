import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import autobind from 'react-autobind'
import ProductSortBar from './ProductSortBar.js'

const sortChangedAction = action('Sort Changed')
const checkedAction = action('Select All Checked')

class InteractiveSortBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: false,
      sortOptions: {
        description: 'down',
        type: 'down',
        price: 'down',
        inventory: 'down'
      }
    }
    autobind(this)
  }

  selectChanged (value) {
    checkedAction(value)
    this.setState({ selected: value })
  }

  sortChanged (key, value) {
    sortChangedAction(key, value)
    const sortOptions = this.state.sortOptions
    sortOptions[key] = value
    this.setState({ sortOptions })
  }

  render () {
    return (
      <ProductSortBar
        onSelected={this.selectChanged}
        onSortChanged={this.sortChanged}
        selected={this.state.selected}
        {...this.state.sortOptions}
      />
    )
  }
}

storiesOf('Products Table/ProductSortBar', module)
  .add('Stateless', () =>
    <ProductSortBar />
  )
  .add('Interactive', () =>
    <InteractiveSortBar />
  )
