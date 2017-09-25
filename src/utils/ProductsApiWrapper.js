import axios from 'axios'

// TODO: load different config depending on environment (development, test, production)
const config = {
  baseURL: 'http://private-anon-8862e13403-weeblyfrontendtrialapi.apiary-mock.com/',
  timeout: 30000
}

const ProductsApiWrapper = axios.create(config)

export default ProductsApiWrapper
