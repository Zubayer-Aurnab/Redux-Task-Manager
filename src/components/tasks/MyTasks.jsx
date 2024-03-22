import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userTaskAdd } from '../../redux/features/taskes/taskesSlice';
import TaskDetailsModal from './TaskDetailsModal';


const MyTasks = () => {

  const { tasks, userTask } = useSelector((state) => state.taskSlice)
  const { name } = useSelector((state) => state.userSlice)
  const [isOpen, setIsOpen] = useState(false)
  const [taskId, setTaskId] = useState(0)
  console.log(name)
  console.log(userTask)
  const dispatch = useDispatch()
  // console.log(tasks)
  const handelModal = (id) => {
    setTaskId(id)
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    dispatch(userTaskAdd(name))
  }, [dispatch, name, tasks])
  return (
    <div>
      <TaskDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} id={taskId} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {
          userTask.map((task) => (
            <div
              key={task.id}
              className="bg-secondary/10 rounded-md p-3 flex justify-between"
            >
              <h1>{task.id}</h1>
              <div className="flex gap-3">
                <button
                  onClick={() => handelModal(task.id)}
                  className="grid place-content-center" title="Details">
                  <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
                </button>
                <button className="grid place-content-center" title="Done">
                  <CheckIcon className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default MyTasks;
