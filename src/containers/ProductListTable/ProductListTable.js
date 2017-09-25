import React from 'react'
import styled from 'styled-components'
import autobind from 'react-autobind'

import { globals, space, color } from 'constants/styles'

import SearchBox from 'components/SearchBox'
import ProductSortBar from 'components/ProductSortBar'
import ProductRow from 'components/ProductRow'
import PageControls from 'components/PageControls'

import actions from 'actions/ProductListActions'
import store from 'stores/ProductListStore'

// TODO: get this styling out of here!
// Leaving it for now in the interest of time
const Row = styled.div`
  margin: ${space.sm}px 0;
`
const TableWrapper = styled.div`
  background: ${color.grayLighter};
  overflow: auto;
  position: relative;
`
const SearchBoxWrapper = styled.div`
  max-width: 220px;
`
const StyledProductRow = styled(ProductRow)`
  border-bottom: 1px solid ${color.grayLight2};
`
const StyledSortBar = styled(ProductSortBar)`
  border-bottom: 1px solid ${color.grayLight2};
`
const NoProducts = styled.div`
  ${globals}
  color: ${color.grayLight};
  text-align: center;
  width: 100%;
  padding: ${space.lg}px 0;
`

/**
 * Computes products to display on a page
 *
 * TODO: Export this function so it can be unit tested
 * 
 * @param selectedPage {number}
 * @param itemsPerPage {number}
 * @param products {Array} - array of all display products
 * 
 * @return {Array}
 */
const computePageItems = ({selectedPage, itemsPerPage, products}) => {
  const startItem = itemsPerPage * (selectedPage - 1)
  const endItem = startItem + itemsPerPage
  return products.slice(startItem, endItem)
}

export default class ProductListTable extends React.Component {
  constructor () {
    super()

    const products = store.state.displayProducts
    this.state = {
      /**
       * Initially true, changes to false when getProducts action has fired
       * Does nothing currently, but could be useful in a real app
       * @type {Boolean}
       */
      loading: true,

      /**
       * Display products from data store (all products after filtering and sorting)
       * @type {Array}
       */
      displayProducts: products || [],

      /**
       * Slice of displayProducts that only includes current page (what to actually render)
       * @type {Array}
       */
      currentPageProducts: products ? products.slice(0, 10) : [],

      /**
       * Current page number, used for calculating currentPageProducts
       * @type {Number}
       */
      selectedPage: 1,

      /**
       * Items per page, used for calculating currentPageProduucts
       * @type {Number}
       */
      itemsPerPage: 10
    }

    autobind(this)
  }

  componentDidMount () {
    actions.call('getProducts')
    store.onStateChanged(this.storeChangeHandler)
  }

  componentWillUnmount () {
    store.unsubscribe(this.storeChangeHandler)
  }

  storeChangeHandler (newState) {
    if (newState.displayProducts) {
      this.displayProductsChanged(newState.displayProducts)
    }
  }

  /**
   * Handler for when displayProducts array in the data store changes
   * @param  {Array}
   */
  displayProductsChanged (products) {
    this.setState({
      loading: false,
      displayProducts: products,
      currentPageProducts: computePageItems({
        selectedPage: 1,
        itemsPerPage: this.state.itemsPerPage,
        products
      }),
      selectedPage: 1
    })
  }

  changedProductRow (index, data) {
    // TODO: Fire changedProduct action
    console.log('changed product row')
  }

  changedSearch (value) {
    console.log(value)
    // TODO: Fire changeFilters action
  }

  changedItemsPerPage (itemsPerPage) {
    this.setState({
      currentPageProducts: this.state.displayProducts.slice(0, itemsPerPage),
      selectedPage: 1,
      itemsPerPage
    })
  }

  changedPage (selectedPage) {
    this.setState({
      currentPageProducts: computePageItems({
        itemsPerPage: this.state.itemsPerPage,
        products: this.state.displayProducts,
        selectedPage
      }),
      selectedPage
    })
  }

  render () {
    // Calculate total pages available
    const productCount = this.state.displayProducts.length
    let numPages = (productCount > 0)
      ? Math.ceil(productCount / this.state.itemsPerPage)
      : 1

    return (
      <div>
        <Row>
          <SearchBoxWrapper>
            <SearchBox onChange={this.changedSearch} placeholder={'Search...'} />
          </SearchBoxWrapper>
        </Row>
        <Row>
          <StyledSortBar />
          <TableWrapper>
            {this.state.displayProducts.length === 0 && !this.state.loading &&
              <NoProducts>No products to display</NoProducts>
            }
            {this.state.displayProducts.length > 0 &&
              this.state.currentPageProducts.map((item, i) =>
                <StyledProductRow
                  key={i}
                  {...item}
                />
              )
            }
          </TableWrapper>
        </Row>
        <Row>
          <PageControls
            itemsPerPage={this.state.itemsPerPage}
            itemsPerPageOptions={[5, 10, 25, 50]}
            pages={numPages}
            selectedPage={this.state.selectedPage}
            onChangeItemsPerPage={this.changedItemsPerPage}
            onChangePage={this.changedPage}
          />
        </Row>
      </div>
    )
  }
}
