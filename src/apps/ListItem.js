import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const ListItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 8px;
  border-radius: 4px;
  background: white;
  i {
    padding: 4px;
    font-size: 18px;
  }
`

const ListText = styled.div`
  padding: 4px 4px 2px 4px;
  text-decoration: ${props => props.isChecked.checked ? 'line-through' : 'none'};
`

const ListItem = ({ item, i, handleCheck }) => {
  
  console.log(item)

  return (
    <ListItemWrapper>
      { item.checked && <i className="far fa-check-square" onClick={() => handleCheck(i)}></i> }
      { !item.checked && <i className="far fa-square" onClick={() => handleCheck(i)}></i> }
      <ListText isChecked={item}>{item.text}</ListText>
    </ListItemWrapper>
  )
}

export default ListItem