import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import autobind from 'react-autobind'
import PageControls from './PageControls.js'

const changedPageAction = action('Changed Page')
const changedPageItemsAction = action('Changed Items per Page')

class InteractivePageControls extends React.Component {
  constructor () {
    super()
    this.state = {
      itemsPerPage: 5,
      itemsPerPageOptions: [10, 25, 50, 100],
      selectedPage: 1,
      pages: 10
    }
    autobind(this)
  }

  changedPage (n) {
    const selectedPage = parseInt(n)
    this.setState({ selectedPage })

    changedPageAction(selectedPage)
  }

  changedItemsPerPage (n) {
    // Simulate rebuilding pages due to items per page changing
    // Usually the best ux would be to send the user back to page 1 when this happens
    const itemsPerPage = parseInt(n)
    const itemsCount = 48
    const pages = Math.ceil(itemsCount / itemsPerPage)
    const selectedPage = 1

    this.setState({
      itemsPerPage,
      selectedPage,
      pages
    })

    changedPageItemsAction(itemsPerPage, pages)
    changedPageAction(1)
  }

  render () {
    return (
      <PageControls
        onChangeItemsPerPage={this.changedItemsPerPage}
        onChangePage={this.changedPage}
        {...this.state}
      />
    )
  }
}

storiesOf('PageControls', module)
  .add('Stateless', () =>
    <PageControls
      itemsPerPage={5}
      itemsPerPageOptions={[5, 10, 25, 50]}
      selectedPage={1}
      pages={10}
    />
  )
  .add('Interactive', () =>
    <InteractivePageControls />
  )
