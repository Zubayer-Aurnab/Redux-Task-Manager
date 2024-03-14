import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
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
                    <textarea name="description" id="" cols="20" rows="5" className="w-full rounded-lg"></textarea>
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
                    <select className="w-full rounded-lg" name="" id="" {...register("assign-to")}>
                        <option value="iron man ">Iron man </option>
                        <option value=" Sukuna">Sukuna</option>
                        <option value=" nejuko">Nejuko</option>
                        <option value=" mujan">Mujan</option>
                        <option value=" gojo">Gojo</option>
                    </select>
                </div>

                <button type="submit"> submit</button>
            </form>
        </Modal>
    );
};

export default AddTaskModal;