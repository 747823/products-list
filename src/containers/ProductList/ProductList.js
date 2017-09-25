import React from 'react'
import styled from 'styled-components'
import { space } from 'constants/styles'

import ProductListHeader from 'containers/ProductListHeader'
import ProductListTable from 'containers/ProductListTable'

const Wrapper = styled.div`
  min-width: 760px;
  max-width: 1200px;
  margin: ${space.lg}px auto;
  padding: 0 ${space.md}px;
  box-sizing: border-box;
`

const Row = styled.div`
  margin: ${space.md}px 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

export default class ProductList extends React.Component {
  render () {
    return (
      <Wrapper>
        <Row>
          <ProductListHeader />
        </Row>
        <Row>
          <ProductListTable />
        </Row>
      </Wrapper>
    )
  }
}
