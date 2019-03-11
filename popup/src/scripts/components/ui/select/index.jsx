import React, { useState } from 'react'

import { StyledSelect, Active, List, Item } from './styles'
import clickOutside from '../../utils/clickOutside'

function Select(props) {
  const { selected, onSelect } = props
  const [isOpen, toggleSelect] = useState(false)
  const { ref } = clickOutside(onClose)

  function toggle() {
    toggleSelect(isOpen === false)
  }

  // function onSelect() {
  //   toggleSelect(false)
  // }

  function onClose() {
    toggleSelect(false)
  }

  return (
    <StyledSelect>
      <Active className="truncate" onClick={() => toggle()} onOpen={isOpen}>
        {selected || 'Active'}
      </Active>
      {isOpen && (
        <List ref={ref}>
          <Item
            onClick={() => {
              onSelect('uebok')
              onClose()
            }}
          >
            Item
          </Item>
        </List>
      )}
    </StyledSelect>
  )
}

export default Select
