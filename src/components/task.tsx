import { TaskType } from '@/types/task'
import { Draggable } from 'react-beautiful-dnd'
import { memo } from 'react'
interface Props extends TaskType {
  index: number
}
export const Task: React.FC<Props> = memo<Props>((props) => {
  return (
    <div className=''>
      <Draggable
        // adding a key is important!
        draggableId={props.id}
        index={props.index}
      >
        {(provided, snapshot) => (
          <div
            className='text-base'
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {props.name}
          </div>
        )}
      </Draggable>
    </div>
  )
})
