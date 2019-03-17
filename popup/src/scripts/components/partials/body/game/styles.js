import styled from 'styled-components'
import { Flex } from '../../../ui/utils'

export const GameWrap = styled.div``
export const Event = styled(Flex)`
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
  span {
    display: block;
    width: 326px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
export const GameIcon = styled.div`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${p => p.theme.gray};
  background: url(${p => p.background}) no-repeat center;
  background-size: cover;
`
export const Teams = styled(Flex)`
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const Center = styled.div`
  text-align: center;
`
export const EventDate = styled.div``
export const Score = styled.div``
export const Bet = styled.div`
  margin-left: 20px;
  cursor: pointer;
`
