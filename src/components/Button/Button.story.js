import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button.js'

storiesOf('Button', module)
  .add('Default', () =>
    <Button>
      Default Button
    </Button>
  )
  .add('Primary', () =>
    <Button primary>
      Primary Button
    </Button>
  )
  .add('With Click Handler', () =>
    <Button primary onClick={action('Click handler fired')}>
      With Click Handler
    </Button>
  )

