import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import SearchBox from './SearchBox.js'

const SearchBoxWrapper = styled.div`
  max-width: 220px;
`

const searchChanged = action('Search Changed')

storiesOf('SearchBox', module)
  .add('Large primary search box', () =>
    <SearchBoxWrapper>
      <SearchBox placeholder={'Search...'} onChange={searchChanged} />
    </SearchBoxWrapper>
  )
