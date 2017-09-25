import { Actions } from 'rad-flux'

import apiWrapper from 'utils/ProductsApiWrapper'

const ProductListActions = new Actions({
  addProduct: null,
  changeFilters: null,
  changeProduct: null,
  getProducts: null,
  newProductPersisted: null,
  persistProduct: null,
  selectAllProducts: null
})

/**
 * Make a GET request to get a list of all products for initial page load
 */
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
      // TODO: Log errors to an error logging service and publish some other action to display UI message
      console.log(e)
    })
})

/**
 * Either POST or PUT updated product data, depending on whether product is new or existing
 */
ProductListActions.registerAsync('persistProduct', (done, product) => {
  const payload = {
    name: product.name,
    type: product.type,
    price: product.price,
    inventory: product.inventory,
    thumbnail: product.thumbnail
  }

  /**
   * Product will have isNew flag if it was created by the user
   *
   * An alternate option would be to request a product with product.id from the API to see if it exists
   * However, that is unreliable because a product with the same id could have been added since
   * the user loaded the page, which would cause the user to accidentally update an existing product
   */
  if (product.isNew) {
    apiWrapper.post('/products', payload)
      .then(res => {
        // Make sure to call newProductPersisted so we know to remove isNew flag
        ProductListActions.call('newProductPersisted', res.data)
      })
      .catch(e => console.log(e))
  } else {
    apiWrapper.put(`/product/${product.id}`, payload)
      .then(done)
      .catch(e => console.log(e))
  }
})

export default ProductListActions
