import styled from 'styled-components'

export const TeamWrap = styled.div`
  flex-shrink: 0;
`
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${p => p.theme.dark};
  margin-right: 10px;
  object-fit: cover;
  flex-shrink: 0;
  ${p =>
    p.second &&
    `
    margin-left: 10px;
  `}
`
export const Name = styled.p`
  width: 100px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
