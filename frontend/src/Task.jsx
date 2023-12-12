import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid black;
    padding: 5px;
    margin-bottom: 10px;
    text-align: center;
    background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
    display: flex
    `;

const Button = styled.div`
    width: 20px;
    height: 20px;
    background-color: orange;
    margin-right: 20px;
    border-radius: 10px;
    margin-top: 2px
`;

const Task = (props) => {
    const { task, index } = props


    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    isDragging={snapshot.isDragging}
                >
                    <Button
                        {...provided.dragHandleProps}
                    />
                    {task.content}
                </Container>
            )}

        </Draggable>

    )
}
export default Task