import { useState } from "react";
import { addUser } from "./UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users)
  const navigate=useNavigate()
  const dispatch =useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
    navigate('/')
  }
  return (
    <div className="max-w-3xl bg-slate-300 mx-auto flex justify-center mt-8 rounded-lg">
      <div className="justify-center p-8 w-full">
        <h1 className="text-3xl">Create List</h1>

        <form onSubmit={handleSubmit}>
          <div class="mb-6 min-w-3xl">
            <label
              htmlFor="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id=""
              class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div class="mb-6">
            <label
              htmlFor=""
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div class="flex items-start mb-6">
            {/* <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label> */}
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
