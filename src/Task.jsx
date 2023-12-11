import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 10px;
    text-align: center;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')}
    `;

const Task = (props) => {
    const { task, index } = props


    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    {task.content}
                </Container>
            )}

        </Draggable>

    )
}
export default Task