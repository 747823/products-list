import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ProductsRow from './ProductsRow.js'

const rowChangedAction = action('Row Changed')

class InteractiveProductsRow extends React.Component {
  constructor (props) {
    super(props)

    /**
     * Assign props over default state
     */
    this.state = Object.assign({
      selected: false,
      imageUrl: '',
      description: '',
      type: 'Physical',
      price: 0,
      inventory: 0
    }, props)

    this.changed = this.changed.bind(this)
  }

  changed (state) {
    rowChangedAction(state)
    this.setState(state)
  }

  render () {
    return (
      <ProductsRow
        {...this.state}
        onChange={this.changed}
      />
    )
  }
}

storiesOf('ProductsRow', module)
  .add('Unselected', () =>
    <ProductsRow />
  )
  .add('Selected', () =>
    <ProductsRow
      selected
    />
  )
  .add('Interactive', () =>
    <InteractiveProductsRow />
  )

