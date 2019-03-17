import React from 'react'
import { TeamWrap, Icon, Name } from './styles'
import { Flex } from '../../../../ui/utils'
import { IMG_URL } from '../../../../../constants'

function Team(props) {
  const { second, data } = props
  return (
    <TeamWrap>
      <Flex
        direction={second && 'row-reverse'}
        align="center"
        justify="flex-end"
      >
        <Name>{data.name}</Name>
        {data.logo ? (
          <Icon second src={IMG_URL + data.logo} />
        ) : (
          <Icon second />
        )}
      </Flex>
    </TeamWrap>
  )
}

export default Team
