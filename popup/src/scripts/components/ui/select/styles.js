import styled from 'styled-components'

export const StyledSelect = styled.div`
  width: 100%;
  position: relative;
`

export const Active = styled.div`
  padding: 4px 0;
  border: 1px solid ${p => p.theme.dark};
  border-radius: ${p => (p.onOpen ? `6px 6px 0 0` : '6px')};
  text-align: center;
  cursor: pointer;
`

export const List = styled.ul`
  width: 100%;
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  border: 1px solid ${p => p.theme.dark};
  border-top: none;
  border-radius: 0 0 6px 6px;
  background: ${p => p.theme.light};
  text-align: center;
  z-index: 2;
`

export const Item = styled.li`
  padding: 5px 0;
  transition: ${p => p.theme.transition};
  cursor: pointer;
  :hover {
    background: ${p => p.theme.dark};
    color: ${p => p.theme.light};
  }
`
