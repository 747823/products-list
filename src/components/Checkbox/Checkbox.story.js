import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox.js'

const toggleAction = action('Checkbox toggle state')

class InteractiveCheckbox extends React.Component {
  constructor () {
    super()
    this.state = {checked: false}
    this.toggleChecked = this.toggleChecked.bind(this)
  }

  toggleChecked (event) {
    const checked = !this.state.checked
    toggleAction(checked, event)
    this.setState({ checked })
  }

  render () {
    return (
      <Checkbox 
        checked={this.state.checked}
        onClick={this.toggleChecked}
      />
    )
  }
}

storiesOf('Checkbox', module)
  .add('Empty', () =>
    <Checkbox />
  )
  .add('Checked', () =>
    <Checkbox checked />
  )
  .add('Interactive', () =>
    <InteractiveCheckbox />
  )

