import React, { useState } from 'react'
import styled from 'styled-components'

import { StyledSection } from '../layout/StyledBody' 
import ListItem from './ListItem'

import { startingList } from './startingList'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  justify-content: center;
  background: lightgrey;
  h1 {
    text-align: center;
  }
`

const ToDo = () => {
  const [list, setList] = useState(startingList)
  // console.log(list)

  return (
    <>
      <StyledSection>
        <ListContainer>
          <h1>To-do</h1>
          {
            list.map((item, i) => (
              <ListItem 
                key={i}
                item={item}
              />
            ))
          }
        </ListContainer>
      </StyledSection>
    </>
  )
}

export default ToDo