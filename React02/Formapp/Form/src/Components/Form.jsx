

const Form = () => {
  return (
    <div className=" border rounded-2 border-secondary d-flex flex-column m-5 gap-3  " style={{backgroundColor:"#F72C5B", padding:"20px"}}>

        <input type="text"  placeholder="Username"/>
        <input type="text" placeholder="Password" />
        <button className="btn btn-success bg-dark w-50 ">Login</button>



    </div>
  )
}

export default Form