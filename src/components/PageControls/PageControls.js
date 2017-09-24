import React from 'react'
import styled from 'styled-components'
import autobind from 'react-autobind'
import { globals, space, fontSize } from 'constants/styles'

import Select from 'components/Select'
import Button from 'components/Button'

const InlineBtn = styled(Button)`
  margin-right: ${space.sm}px;
  &:last-child {
    margin-right: 0;
  }
`
const InlineSelect = styled(Select)`
  margin-right: ${space.sm}px;
  min-width: 70px;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ItemsPerPage = styled.div`
  ${globals};
  min-width: 100px;
  margin-right: ${space.sm}px;
  font-size: ${fontSize.sm};
`

const clickedPreviousPage = (props) => {
  if (props.selectedPage > 1 && props.onChangePage) {
    props.onChangePage(props.selectedPage - 1)
  }
}

const clickedNextPage = (props) => {
  if (props.selectedPage < props.pages && props.onChangePage) {
    props.onChangePage(props.selectedPage + 1)
  }
}

const PageControls = (props) =>
  <Row>
    {props.itemsPerPageOptions &&
      <Row>
        <ItemsPerPage>Items per page:</ItemsPerPage>
        <InlineSelect
          value={props.itemsPerPage}
          onChange={
            e => props.onChangeItemsPerPage && props.onChangeItemsPerPage(e.target.value)
          }>
          {props.itemsPerPageOptions.map((n, i) => <option value={n} key={i}>{n}</option>)}
        </InlineSelect>
      </Row>
    }

    <Row>
      <InlineBtn
        arrowLeft
        small
        disabled={props.selectedPage === 1}
        onClick={() => clickedPreviousPage(props)}
      />
      <InlineSelect
        value={props.selectedPage}
        onChange={e => props.onChangePage && props.onChangePage(e.target.value)}>
        {Array(props.pages).fill('').map((_,i) =>
          <option key={i} value={i + 1}>{i + 1}</option>
        )}
      </InlineSelect>
      <InlineBtn
        arrowRight
        small
        disabled={props.selectedPage === props.pages}
        onClick={() => clickedNextPage(props)}
      />
    </Row>
  </Row>

export default PageControls