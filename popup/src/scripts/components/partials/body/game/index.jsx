import React from 'react'
import {
  GameWrap,
  Event,
  GameIcon,
  Teams,
  Center,
  EventDate,
  Score,
  Bet
} from './styles'
import Team from './team'
import { Flex } from '../../../ui/utils'

function Game() {
  return (
    <GameWrap>
      <Event justify="center">
        <span>The International</span>
      </Event>
      <Flex align="center">
        <GameIcon />
        <Teams align="center">
          <Team />
          <Center>
            <EventDate>
              <p>24.02</p>
              <p>18:00</p>
            </EventDate>
            <Score />
          </Center>
          <Team second />
        </Teams>
        <Bet>Bet</Bet>
      </Flex>
    </GameWrap>
  )
}

export default Game
