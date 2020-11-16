import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { StyledSection } from '../layout/StyledBody' 
import ListItem from './ListItem'
import AddListItem from './AddListItem'

import { startingList } from './startingList'

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  margin-bottom: 30px;
  justify-content: center;
  background: lightgrey;
  h1 {
    text-align: center;
  }
  ul {
    margin: 24px;
    padding: 0;
  }
`

const ToDo = () => {
  const [list, setList] = useState(startingList)
  console.log('list from todo', list)

  const handleCheck = (i) => {
    const newList = [...list]
    newList[i].checked = !newList[i].checked
    setList(newList)
  }

  const addItem = (textValue) => {
    const newList = [...list, { text: [textValue], checked: false }]
    setList(newList)
  }

  return (
    <>
      <StyledSection>
        <ListContainer>
          <h1>To-do</h1>
          <h3>Add a new to-do</h3>
          <AddListItem addItem={addItem}/>
          <ul>
            {
              list.map((item, i) => (
                <div key={i}>
                {!item.checked &&
                  <ListItem 
                    i={i}
                    item={item}
                    handleCheck={handleCheck}
                  />
                }
                </div>
              ))
            }
          </ul>
        </ListContainer>

        <ListContainer>
          <h1>Done</h1>
          <ul>
            {
              list.map((item, i) => (
                <div key={i}>
                {item.checked &&
                  <ListItem 
                    key={i}
                    i={i}
                    item={item}
                    handleCheck={handleCheck}
                  />
                }
                </div>
              ))
            }
          </ul>
        </ListContainer>
      </StyledSection>
    </>
  )
}

export default ToDo