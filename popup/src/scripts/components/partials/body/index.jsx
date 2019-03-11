import React from 'react'
import { List, Item, StyledBody } from './styles'
import Game from './game'

function body() {
  return (
    <StyledBody>
      <List>
        <Item>
          <Game />
        </Item>
        <Item>
          <Game />
        </Item>
        <Item>
          <Game />
        </Item>
        <Item>
          <Game />
        </Item>
        <Item>
          <Game />
        </Item>
      </List>
    </StyledBody>
  )
}

export default body
