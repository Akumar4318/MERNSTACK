
const Catimg = (props) => {


  // eslint-disable-next-line react/prop-types
  let image=props.item
  return (
    <div className="flex w-[200px] rounded-[20px] flex-wrap m-3 border-2 border-red-300 p-3">
        <img  src={image} alt="" />
    </div>
  )
}

export default Catimg