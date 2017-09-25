import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
// import styled from 'styled-components'

import Select from './Select.js'

// const RightAlign = styled.div`
//   text-align: right;
// `

storiesOf('Select', module)
  .add('With Options', () =>
    <Select>
      <option value='1'>Tempeh Sandwich</option>
      <option value='2'>Hummus Plate</option>
      <option value='3'>Burrito</option>
    </Select>
  )
