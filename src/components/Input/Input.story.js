import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import Input from './Input.js'

const Wrapper = styled.div`
  max-width: 220px;
`
const RightAlign = styled.div`
  text-align: right;
`

storiesOf('Input', module)
  .add('Empty', () =>
    <Wrapper>
      <Input placeholder={'Type here...'} />
    </Wrapper>
  )
  .add('With Initial Value', () =>
    <Wrapper>
      <Input
        placeholder={'Name of a Fruit'}
        defaultValue={'Banana'}
      />
    </Wrapper>
  )
  .add('With Symbol', () =>
    <Wrapper>
      <RightAlign>
        <Input symbol={'$'} placeholder={'0.00'} />
      </RightAlign>
    </Wrapper>
  )
