import React from 'react'
import {
  GameWrap,
  Event,
  GameIcon,
  Teams,
  Center,
  EventDate,
  Score
} from './styles'
import Team from './team'
import { Flex } from '../../../ui/utils'
import { IMG_URL } from '../../../../constants'

function Game(props) {
  const { data } = props
  return (
    <GameWrap>
      {data.event.name && (
        <Event justify="center">
          <span>{data.event.name}</span>
        </Event>
      )}
      <Flex align="center">
        {data.event.logo && <GameIcon background={IMG_URL + data.event.logo} />}
        <Teams align="center">
          <Team data={data.team_one} />
          <Center>
            {data.date && <EventDate>{data.date}</EventDate>}
            {data.live && <EventDate>{data.live}</EventDate>}
            {data.timer && <EventDate>{data.timer}</EventDate>}
            {data.score && <Score>{data.score}</Score>}
          </Center>
          <Team second data={data.team_two} />
        </Teams>
        {/* <Bet>Bet</Bet> */}
      </Flex>
    </GameWrap>
  )
}

export default Game
