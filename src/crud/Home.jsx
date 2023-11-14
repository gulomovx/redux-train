import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "./UserReducer";
const Home = () => {
  const users = useSelector((state) => state.users);
  const navigate = useNavigate()
  const dispatch=useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteUser({id:id}))
  }
  return (
    <div className="max-w-7xl mx-auto mt-4">
      <Link to='/create' className="bg-blue-600 p-2 text-white ">Create user </Link>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-left text-sm font-light">
                <thead class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                  <tr>
                    <th scope="col" class="px-6 py-4">
                      Id
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                              <tbody className="text-2xl ">
                                  {users.map((user, i) => (
                                      <tr key={i} className='border-b  dark:border-neutral-500 dark:bg-neutral-700 '>
                                          <td>{ user.id}</td>
                                          <td>{ user.name}</td>
                                          <td>{user.email}</td>
                                          <td className="flex gap-3">
                                              <Link to={`/edit/${user.id}`} className="p-2 text-white bg-blue-500 rounded">Edit</Link>
                                              <button onClick={()=> handleDelete(user.id)} className="p-2 text-white bg-red-500 rounded">Delete</button>
                                          </td>
                                      </tr>
                                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
