import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Task from './Task';

const Container = styled.div`
    border: 1px solid black;
    padding: 5px;
    width: 300px;
    text-align: left
`;
const Title = styled.h3`
    margin-top: 0
`;
const TaskList = styled.div`
    padding: 10px;
    background-color: ${props => (props.isdraggingover ? 'skyblue' : 'white')}
`


const Column = (props) => {
    const { column, task } = props

    return (

        <Container>
            <Title>{column?.title}</Title>
            <Droppable droppableId={column.id}>
                {/* Droppable children must be a function */}
                {(provided, snapshot) => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isdraggingover={snapshot.isDraggingOver}
                    >
                        {task.map((task, index) => {
                            return (
                                <Task task={task} key={task.id} index={index} />
                            )
                        })}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    )
}

export default Column