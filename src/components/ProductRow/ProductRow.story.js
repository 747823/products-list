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
      thumbnail: '',
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
      name='Mythical Pants of Spellcasting'
      thumbnail='https://frontend-trial-project.weebly.com/uploads/1/0/5/4/105462933/super-high-waisted-jeans-google-search-iozlcm0zk5j.png'
      type={'Physical'}
      price={49.99}
      inventory={150}
    />
  )
  .add('Selected', () =>
    <ProductRow
      name='Mythical Pants of Spellcasting'
      thumbnail='https://frontend-trial-project.weebly.com/uploads/1/0/5/4/105462933/super-high-waisted-jeans-google-search-iozlcm0zk5j.png'
      type={'Physical'}
      price={49.99}
      inventory={150}
      selected
    />
  )
  .add('Selected Invalid', () =>
    <ProductRow
      name=''
      thumbnail='https://frontend-trial-project.weebly.com/uploads/1/0/5/4/105462933/super-high-waisted-jeans-google-search-iozlcm0zk5j.png'
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
      thumbnail='https://frontend-trial-project.weebly.com/uploads/1/0/5/4/105462933/super-high-waisted-jeans-google-search-iozlcm0zk5j.png'
    />
  )
