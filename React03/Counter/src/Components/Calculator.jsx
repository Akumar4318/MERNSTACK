

const Calculator = () => {
  return (

<div className='border rounded-2xl p-9 w-[30vw] mx-auto  mt-32 flex flex-col items-center bg-black'>
<input className='w-[80%] h-12 border bg-white rounded' type="text" disabled />
 

<div className='grid grid-cols-4 w-fit gap-x-6 gap-y-4 mt-4'>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-300'>C</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-300'>X</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-300'>%</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-orange-400'>/</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>7</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>8</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>9</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-orange-400'>*</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>4</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>5</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>6</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-orange-400'>-</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>1</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>2</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>3</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-orange-400'>+</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>0</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>.</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-gray-400'>%</button>
    <button className='h-[60px] w-[60px] text-white text-2xl rounded-full bg-orange-400'>=</button>
</div>
</div>
)
}

export default Calculator