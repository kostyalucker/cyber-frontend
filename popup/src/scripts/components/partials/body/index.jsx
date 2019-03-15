import React, { useState } from 'react'
import { useSSE } from 'react-hooks-sse'
import { List, Item, StyledBody } from './styles'
import Game from './game'

function body() {
  const [events, setEvents] = useState(null)
  /* eslint-disable-next-line */
  const state = useSSE('matches', {
    initialState: {
      matches: null,
      lastChange: null
    },
    stateReducer(prevState, changes) {
      setEvents(changes.data.value)
      return {
        matches: changes.data.value,
        lastChange:
          prevState.matches !== null
            ? changes.data.value - prevState.matches
            : null
      }
    }
  })

  function getData() {
    /* eslint-disable-next-line */
    fetch('http://localhost:8080/matches')
      .then(res => {
        return res.json()
      })
      .then(res => {
        // Notification.requestPermission()
        // var e = new Notification('hello')
        setEvents(res)
      })
  }

  if (!events) {
    getData()
  }

  // var icon_url = 'icon.png';
  // console.log(icon_url);

  // var opt = {
  //   type: 'basic',
  //   title: 'keep burning',
  //   message: 'Primary message to display',
  //   priority: 1,
  //   iconUrl: icon_url
  // };

  // chrome.notifications.create('hello', opt, function() { console.log(chrome.runtime) })

  return (
    <StyledBody>
      {events &&
        events.map(el => {
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
