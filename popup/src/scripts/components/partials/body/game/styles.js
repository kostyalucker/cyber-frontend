import styled from 'styled-components'
import { Flex } from '../../../ui/utils'

export const GameWrap = styled.div``
export const Event = styled(Flex)`
  align-items: center;
  margin-bottom: 20px;
`
export const GameIcon = styled.div`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background: ${p => p.theme.gray};
`
export const Teams = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const Center = styled.div``
export const EventDate = styled.div``
export const Score = styled.div``
export const Bet = styled.div`
  margin-left: 20px;
  cursor: pointer;
`
