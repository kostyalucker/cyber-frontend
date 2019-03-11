import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  ${p =>
    p.direction &&
    `
    flex-direction: ${p.direction};
  `}
  ${p =>
    p.align &&
    `
    align-items: ${p.align};
  `}
  ${p =>
    p.justify &&
    `
    justify-content: ${p.justify};
  `}
  ${p =>
    p.wrap &&
    `
    flex-wrap: wrap;
  `}
  ${p =>
    p.margin &&
    `
    margin: 0 -${p.margin}px;
  `}
`
