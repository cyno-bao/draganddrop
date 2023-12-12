import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import './App.css'
import initialData from './initial-data'
import Column from './Column'
import styled from 'styled-components'
// import result from './result'

const Container = styled.div`
  display: flex;
  gap: 10px
`

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(initialData)


  //Active when dragging is end
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result
    document.body.style.color = 'black'

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const column = data.columns[source.droppableId]

    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    }

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newColumn.id]: newColumn
      }
    }
    setData(newData)
  }

  //Active when dragging is start
  const onDragStart = (result) => {
    // document.body.style.color = 'orange'
  }

  //Active when dragging is update
  const onDragUpdate = (result) => {
    // document.body.style.color = 'red'

  }


  return (
    <>
      <Container>
        <DragDropContext
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
        >
          {data.columnOrder.map(columnId => {
            const column = data.columns[columnId]
            const tasks = column.taskIds.map(taskId => data.tasks[taskId])
            return <Column key={column.id} column={column} task={tasks} />
          })}
        </DragDropContext>
      </Container>
    </>
  )
}

export default App
