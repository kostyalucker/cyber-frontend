import React from 'react'
import { connect } from 'react-redux'
import { List, Item, StyledBody, SectionTitle } from './styles'
import Game from './game'

function body(props) {
  const { matches } = props
  let pastMatches = []
  let currentMatches = []
  if (matches && matches.length > 0) {
    pastMatches = matches.filter(match => match.past)
    currentMatches = matches.filter(match => !match.past)
  }

  return (
    <StyledBody>
      <List>
        {currentMatches &&
          currentMatches.map(event => {
            return (
              <Item>
                <Game data={event} />
              </Item>
            )
          })}
      </List>
      {pastMatches && pastMatches.length > 0 && (
        <React.Fragment>
          <SectionTitle>Прошедшие игры</SectionTitle>
          <List>
            {pastMatches.map(event => {
              return (
                <Item>
                  <Game data={event} />
                </Item>
              )
            })}
          </List>
        </React.Fragment>
      )}
    </StyledBody>
  )
}

export default connect(state => {
  return {
    matches: state.matches
  }
})(body)
