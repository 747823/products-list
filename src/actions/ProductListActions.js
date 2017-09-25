import { Actions } from 'rad-flux'

import apiWrapper from 'utils/ProductsApiWrapper'

const ProductListActions = new Actions({
  addProduct: null,
  getProducts: null,
  persistProduct: null,
  selectAllProducts: null,
  selectProduct: null
})

ProductListActions.registerAsync('getProducts', done => {
  apiWrapper.get('/products')
    .then(res => {
      if (res.data) {
        done(res.data)
      } else {
        // TODO: API responded with no data, do some sort of error handling
        done([])
      }
    })
    .catch(e => {
      // TODO: Log error to an error logging service and publish some other action to display UI message
      console.log(e)
    })
})

export default ProductListActions
