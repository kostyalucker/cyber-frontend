import React, { useState } from 'react'

import { StyledHead, Controls, Label, SelectWrap } from './styles'
import Select from '../../ui/select'
import { Flex } from '../../ui/utils'

function head() {
  const [selectedGame, selectedGameHandler] = useState('Game')
  const [selectedTeam, selectedTeamHandler] = useState('Team')
  const [selectedStatus, selectedStatusHandler] = useState('Status')

  return (
    <StyledHead>
      <Flex align="center">
        <Label>Filter</Label>
        <Controls>
          <Flex justify="space-between" margin={7.5}>
            <SelectWrap>
              <Select
                onSelect={selected => selectedGameHandler(selected)}
                selected={selectedGame}
              />
            </SelectWrap>
            <SelectWrap>
              <Select
                onSelect={selected => selectedTeamHandler(selected)}
                selected={selectedTeam}
              />
            </SelectWrap>
            <SelectWrap>
              <Select
                onSelect={selected => selectedStatusHandler(selected)}
                selected={selectedStatus}
              />
            </SelectWrap>
          </Flex>
        </Controls>
      </Flex>
    </StyledHead>
  )
}

export default head
