import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Input from './Input.js'

const RightAlign = styled.div`
  text-align: right;
`

storiesOf('Input', module)
  .add('Empty', () =>
    <Input />
  )
  .add('With Value', () =>
    <Input defaultValue={'Banana'} />
  )
  .add('With Symbol', () =>
    <RightAlign>
      <Input symbol={'$'} defaultValue={'0.00'} />
    </RightAlign>
  )
  // .add('Interactive', () =>
  //   <InteractiveCheckbox />
  // )

