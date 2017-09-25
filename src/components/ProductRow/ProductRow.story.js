import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import autobind from 'react-autobind'
import ProductRow from './ProductRow.js'

const rowChangedAction = action('Row Changed')

class InteractiveProductRow extends React.Component {
  constructor (props) {
    super(props)

    this.state = Object.assign({
      isValid: true,
      selected: false,
      imageUrl: '',
      name: '',
      type: 'Physical',
      price: 0,
      inventory: 0
    }, props)

    autobind(this)
  }

  changed (state) {
    rowChangedAction(state)
    this.setState(state)
  }

  render () {
    return (
      <ProductRow
        {...this.state}
        onChange={this.changed}
      />
    )
  }
}

storiesOf('Products Table/ProductRow', module)
  .add('Unselected', () =>
    <ProductRow
      name='Rad Pants'
      imageUrl='https://www.burnoutitaly.com/media/catalog/product/cache/2/small_image/295x/4d958f563004f3a33e053f5fc7cf6f98/r/e/xrevit-airwave-2-donna-0011.jpg.pagespeed.ic.yAKleTjS5Y.jpg'
      type={'Physical'}
      price={49.99}
      inventory={150}
    />
  )
  .add('Selected', () =>
    <ProductRow
      name='Rad Pants'
      imageUrl='https://www.burnoutitaly.com/media/catalog/product/cache/2/small_image/295x/4d958f563004f3a33e053f5fc7cf6f98/r/e/xrevit-airwave-2-donna-0011.jpg.pagespeed.ic.yAKleTjS5Y.jpg'
      type={'Physical'}
      price={49.99}
      inventory={150}
      selected
    />
  )
  .add('Selected Invalid', () =>
    <ProductRow
      name=''
      imageUrl='https://www.burnoutitaly.com/media/catalog/product/cache/2/small_image/295x/4d958f563004f3a33e053f5fc7cf6f98/r/e/xrevit-airwave-2-donna-0011.jpg.pagespeed.ic.yAKleTjS5Y.jpg'
      type={'Physical'}
      price={49.99}
      inventory={150}
      isValid={false}
      validationErrors={[
        'Name can\'t be empty'
      ]}
      selected
    />
  )
  .add('Interactive', () =>
    <InteractiveProductRow
      imageUrl='https://www.burnoutitaly.com/media/catalog/product/cache/2/small_image/295x/4d958f563004f3a33e053f5fc7cf6f98/r/e/xrevit-airwave-2-donna-0011.jpg.pagespeed.ic.yAKleTjS5Y.jpg'
    />
  )
