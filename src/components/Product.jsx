import { increment, decrement, removeItem } from "../redux/app/features/basketSlice"
import { useDispatch } from "react-redux"


const Product = ({ name, amount, price, image }) => {
  const dispatch=useDispatch()
  return (
      <div className='mt-2 flex justify-between items-center border p-4 rounded-lg'>
          <img className='w-40' src={image} alt={name + 'galss'} />
          <div className="flex gap-4 border p-2 rounded border-red-600">
              <p>{name}</p>
              <p className='font-bold'>{price}</p>
              <button onClick={()=> dispatch(removeItem(name))} className='bg-red-400 px-4 rounded-md'>Remove</button>
          </div>
          <div className="flex gap-4 text-3xl ">
              <button onClick={()=>dispatch(increment(name))}>+</button>
              <button className="">{amount}</button>
              <button onClick={()=> dispatch(decrement(name))} className="">-</button>
          </div>
    </div>
  )
}

export default Product