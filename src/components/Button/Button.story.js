import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Btn from './Button.js'

const Button = styled(Btn)`
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`

storiesOf('Button', module)
  .add('Default', () =>
    <Btn>
      Default Button
    </Btn>
  )
  .add('Disabled', () =>
    <Btn disabled>
      Disabled Button
    </Btn>
  )
  .add('Primary', () =>
    <Btn primary>
      Primary Button
    </Btn>
  )
  .add('Small', () =>
    <Btn small>
      Small Button (fits inline with inputs)
    </Btn>
  )
  .add('Arrows', () =>
    <div>
      <Button arrowLeft small />
      <Button arrowRight small />
    </div>
  )
  .add('Arrows Disabled', () =>
    <div>
      <Button arrowLeft small disabled />
      <Button arrowRight small disabled />
    </div>
  )
  .add('Arrows Primary', () =>
    <div>
      <Button arrowLeft small primary />
      <Button arrowRight small primary />
    </div>
  )
  .add('With Click Handler', () =>
    <Btn primary onClick={action('Click handler fired')}>
      With Click Handler
    </Btn>
  )
