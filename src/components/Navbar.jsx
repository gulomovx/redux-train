import { useSelector } from "react-redux"



const Navbar = () => {
    const {amount}=useSelector((state)=> state.basket)
  return (
      <div className=' mx-auto max-w-4xl before: text-center flex justify-between mt-2'>
          <p className="text-3xl font-medium text-orange-400">Home</p>
          <p className="text-3xl font-medium text-orange-400 flex items-center justify-center">Basket <span className='bg-red-400 flex justify-center items-center  rounded-[50%] w-9 h-9 ml-2 text-white'>{amount}</span></p>
    </div>
  )
}

export default Navbar