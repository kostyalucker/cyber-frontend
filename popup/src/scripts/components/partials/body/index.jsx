import React from 'react'
import { useSSE } from 'react-hooks-sse'
import { List, Item, StyledBody } from './styles'
import Game from './game'

function body() {
  const state = useSSE('likess', {
    initialState: {
      count: null,
      lastChange: null
    },
    stateReducer(prevState, changes) {
      return {
        count: changes.data.value,
        lastChange:
          prevState.count !== null ? changes.data.value - prevState.count : null
      }
    }
  })
  if (state.count) {
    console.log(state.count.length)
  }
  return (
    <StyledBody>
      {state.count &&
        state.count.map(el => {
          return <p>{el.title}</p>
        })}
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
