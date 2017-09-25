import React from 'react'
import ReactDOM from 'react-dom'

import ProductList from 'containers/ProductList'

const App = () => {
  return <ProductList />
}

ReactDOM.render(<App />, document.getElementById('main'))
