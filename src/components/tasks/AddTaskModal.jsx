import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/taskes/taskesSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm()
    const close = () => {
        reset()
        setIsOpen(false)
    }
    const onSubmit = (data) => {
        dispatch(addTask(data))
        close()
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add your task"}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                action="">
                <div>
                    <label htmlFor="title" className="">
                        Title
                    </label>
                    <input
                        className="w-full rounded-lg"
                        id="title"
                        type="text"
                        {...register('title')}
                    />
                </div>
                <div>
                    <label htmlFor="title" className="">
                        Description
                    </label>
                    <textarea name="description" id="" cols="20" rows="5" className="w-full rounded-lg" {...register('description')}></textarea>
                </div>
                <div>
                    <label htmlFor="title" className="">
                        Deadline
                    </label>
                    <input
                        className="w-full rounded-lg"
                        id="description"
                        type="date"
                        {...register('date')}
                    />
                </div>
                <div className="">
                    <label htmlFor="title" className="">
                        Assign to
                    </label>
                    <select className="w-full rounded-lg" name="" id="" {...register("assign_to")}>
                        <option value="iron man ">Iron man </option>
                        <option value="sukuna">Sukuna</option>
                        <option value="nejuko">Nejuko</option>
                        <option value="mujan">Mujan</option>
                        <option value="gojo">Gojo</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="priority" className="">
                        Priority
                    </label>
                    <select className="w-full rounded-lg" name="" id="" {...register("priority")}>
                        <option value="high">High </option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>

                    </select>
                </div>

                <div className="flex gap-4 w-full justify-end mt-10">
                    <button
                        onClick={close}
                        className="p-2 bg-red-400 rounded-lg font-bold text-black" >Close</button>
                    <button type="submit" className="p-2 bg-blue-300 rounded-lg font-bold text-black"> submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;