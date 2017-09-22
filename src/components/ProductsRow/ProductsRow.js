import React from 'react'
import styled from 'styled-components'
import { globals, space, color } from 'constants/styles'

import Input from 'components/Input'
import Select from 'components/Select'
import Checkbox from 'components/Checkbox'

const Row = styled.div`
  ${globals}
  display: flex;
  flex-direction: row;
  padding: ${space.sm};
`

export default class ProductRow extends React.Component {

  changed (key, value) {
    this.props.onChange && this.props.onChange({ [key]: value });
  }

  render () {
    // Unselected - just render values
    if (!this.props.selected) {
      return (
        <Checkbox
          onClick={() => this.changed('selected', true)}
        />
        <Image src={this.props.imageUrl} />
        <Description>{this.props.description}</Description>
        <Type>{this.props.type}</Type>
        <Price>{'$' + this.props.price}</Price>
        <Inventory>{'$' + this.props.inventory}</Inventory>
      )
    }

    // Selected - render inputs
    return (
      <div>
        <Checkbox 
          checked
          onClick={() => this.changed('selected', false)}
        />
        <Image src={this.props.imageUrl} />
        <Description>
        </Description>

        <Type>
        </Type>

        <Price>
          
            <Input defaultValue={this.props.price} /> 
            : <span>{'$' + this.props.price}</span>
          }
        </Price>

        <Inventory>
          {this.props.selected ?
            <Input defaultValue={this.props.inventory} />
            : <span>{this.props.inventory}</span>
          }
        </Inventory>
      </div>
    )
  }
}

