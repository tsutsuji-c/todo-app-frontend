import { Droppable, Draggable } from 'react-beautiful-dnd'
import { Task } from './task'
import { TaskType } from 'types/task'

interface Props {
  droppableId: string
  taskList: (TaskType | undefined)[]
  index: number
}

export const Board: React.FC<Props> = ({ droppableId, taskList, index }) => {
  return (
    <Draggable draggableId={droppableId} index={index}>
      {(provided) => (
        <div
          className='bg-slate-100 mx-1 w-1/3 flex-col rounded'
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div {...provided.dragHandleProps}>{droppableId}</div>
          <Droppable droppableId={droppableId} type='task'>
            {(provided) => (
              <div
                className={droppableId + ' min-h-full'}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {taskList.map((task, index) => {
                  if (!task) return

                  return <Task key={task.id} id={task.id} name={task.name} index={index} />
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}
