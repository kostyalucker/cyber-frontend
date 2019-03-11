import styled from 'styled-components'

export const TeamWrap = styled.div``
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${p => p.theme.dark};
  margin-right: 10px;
  ${p =>
    p.second &&
    `
    margin-left: 10px;
  `}
`
export const Name = styled.p``
