import styled from 'styled-components'

export const StyledBody = styled.div``
export const List = styled.ul``
export const SectionTitle = styled.h2`
  padding-left: 10px;
`
export const Item = styled.li`
  padding: 10px 12px;
  border-bottom: 1px solid ${p => p.theme.dark};
  :last-child {
    border: none;
  }
`
