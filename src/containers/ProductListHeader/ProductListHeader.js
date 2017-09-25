import React from 'react'
import styled from 'styled-components'
import { globals, space, fontSize, color } from 'constants/styles'

import Button from 'components/Button'

const Btn = styled(Button)`
  margin-right: ${space.md}px;
  &:last-child {
    margin-right: 0;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const HeadingColumn = Column.extend`
  width: 100%;
`

const Heading = styled.h1`
  ${globals}
  margin: 0;
  color: ${color.grayDark};
  font-size: ${fontSize.xl};
  width: 100%;
  font-weight: 400;
`

const addProduct = () => {
  // Fire add product action (adds a product without persisting it)
}

const ProductListHeader = () =>
  <div>
    <Row>
      <HeadingColumn>
        <Heading>Products</Heading>
      </HeadingColumn>
      <Row>
        <Btn>Export</Btn>
        <Btn>Import</Btn>
        <Btn primary onClick={addProduct}>Add Product</Btn>
      </Row>
    </Row>
  </div>

export default ProductListHeader
