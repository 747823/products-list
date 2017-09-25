import { DataStore } from 'rad-flux'

import ProductListActions from 'actions/ProductListActions'

const ProductListStore = new DataStore({
  /**
   * Products array (i.e. raw response from get products API)
   * @type {Array}
   */
  products: [],

  /**
   * Products array after filtering and sorting applied
   * @type {Array}
   */
  displayProducts: [],

  /**
   * Filters to be applied. For now this will only ever have 0 or 1 object
   * 
   * In a real project, filters should probaly be an array of functions which live in utils
   * 
   * @type {Array}
   */
  filters: [{
    key: 'name',
    match: /.*/
  }],

  /**
   * Sort types and their values ('', up', or 'down')
   *
   * In a real project, these should probably also be an array of functions which live in utils
   * 
   * @type {Object}
   */
  sort: {
    name: '',
    type: '',
    price: '',
    inventory: ''
  }
})

// Listen for actions that require store to update
ProductListActions.on('getProducts', products => {
  // TODO: Apply filters and sort to generate display products
  const displayProducts = products

  ProductListStore.setState({ products, displayProducts })
})

export default ProductListStore
