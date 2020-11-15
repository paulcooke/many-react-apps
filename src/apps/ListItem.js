import React from 'react'
import styled from 'styled-components'

const ListItemWrapper = styled.div`
  display: flex;
  margin: 10px;
  padding: 8px;
  border-radius: 4px;
  background: white;
`

const ListText = styled.div`
  padding: 4px;
`


const ListItem = ({ item }) => {
  
  console.log(item)
  
  return (
    <ListItemWrapper>
      <ListText>{item.text}</ListText>
    </ListItemWrapper>
  )
}

export default ListItem