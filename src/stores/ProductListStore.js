import { DataStore } from 'rad-flux'

import actions from 'actions/ProductListActions'

const ProductListStore = new DataStore({
  allProductsSelected: false,

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
  filters: {
    name: /.*/
  },

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

/**
 * Add a new empty product instance to the local store
 */
actions.on('addProduct', () => {
  const newProduct = {
    // A real id should be assigned after persisting the new product to the api
    id: Date.now() * 100000,
    // set isNew flag to make sure we post the new product to the API
    isNew: true,
    selected: true,
    name: '',
    type: 'Physical',
    price: 0,
    inventory: 0
  }

  // TODO: figure out why we see new product twice when adding it to both products and display products
  const products = ProductListStore.state.products
  const displayProducts = ProductListStore.state.displayProducts
  products.unshift(newProduct)
  // displayProducts.unshift(newProduct)

  ProductListStore.setState({ products, displayProducts })
})

/**
 * Listen for filter changes (e.g. typing in the search bar above the products table)
 */
actions.on('changeFilters', data => {
  const filters = data
  const products = ProductListStore.state.products
  let displayProducts

  filters.name = filters.name || '.*'

  // TODO: allow arbitrary numbers of filters which provide their own filtering functions
  // For now, I'm only implementing "name" and matching the string

  if (filters.name) {
    displayProducts = products.filter(item => {
      return item.name.match(new RegExp(filters.name, 'i'))
    })

    ProductListStore.setState({ filters, displayProducts })
  }
})

/**
 * Listen for user changing a single product
 */
actions.on('changeProduct', product => {
  // Find current product entry
  const products = ProductListStore.state.products
  const currentProduct = products.find(item => item.id === product.id)

  // Apply changes
  const newProduct = {...currentProduct, ...product}

  // Persist product changes on deselect, if there are changes besides selected
  if (newProduct.selected === false) {
    // TODO: perform validation before firing persistProduct action
    // TODO: add a "changed" key to prevent API call when the only change is deselcting the item
    actions.call('persistProduct', newProduct)
  }

  // Update products
  const i = products.findIndex(item => item.id === product.id)
  products[i] = newProduct

  // Update displayProducts
  const displayProducts = ProductListStore.state.displayProducts
  const j = displayProducts.findIndex(item => item.id === product.id)
  if (j > -1) displayProducts[j] = newProduct

  // Check if all products are selected or not
  const allProductsSelected = products.every(item => item.selected)

  // Set new state
  ProductListStore.setState({ products, displayProducts, allProductsSelected })
})

/**
 * Listen for all products API GET response
 */
actions.on('getProducts', products => {
  ProductListStore.setState({ products, displayProducts: products })
})

/**
 * Fired when a newly created product has been persisted to the API
 * This should update the id of the locale instance and remove the isNew flag
 *
 * In a real app we might add this for all products as well,
 * just to indicate something to the user if their changes failed to save
 */
actions.on('newProductPersisted', data => {
  console.log('New product persisted')
  // TODO: make this do something :)
})

/**
 * Listen for select or deselect all products
 */
actions.on('selectAllProducts', value => {
  if (value === true) {
    // Simply set all products to selected
    const products = ProductListStore.state.products.map(product => {
      return { ...product, selected: true }
    })
    ProductListStore.setState({ products, displayProducts: products, allProductsSelected: true })
  } else {
    // TODO: validate all products and persist the ones that passed
    // This one is slightly tricky :)
  }
})

export default ProductListStore
