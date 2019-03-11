import React from 'react'
import { TeamWrap, Icon, Name } from './styles'
import { Flex } from '../../../../ui/utils'

function Team(props) {
  const { second } = props
  return (
    <TeamWrap>
      <Flex direction={second && 'row-reverse'} align="center">
        <Name>Team</Name>
        <Icon second />
      </Flex>
    </TeamWrap>
  )
}

export default Team
