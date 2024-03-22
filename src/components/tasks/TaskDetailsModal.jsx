import { useSelector } from 'react-redux';
import Modal from '../ui/Modal'

const TaskDetailsModal = ({ isOpen, setIsOpen, id }) => {

    const { tasks } = useSelector((state) => state.taskSlice)
    console.log(tasks)
    const singleItem = tasks.find((task) => task.id === id)

    console.log("/////////////////////public",singleItem,"/////////////////")
    return (
        <div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>

                <p>{singleItem?.title}</p>
            </Modal>
        </div>
    );
};

export default TaskDetailsModal;