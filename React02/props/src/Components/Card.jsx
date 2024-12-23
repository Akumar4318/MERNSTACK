

const Card = (prop) => {
  return (
    <div className="d-flex flex-column align-items-center border  border-secondary m-4 p-3 rounded" style={{width:"250px",backgroundColor:"#FCFFC1"}}>
        <img style={{width:'50%', borderRadius:"50%"}} src={prop.image} alt="" />
        <div>
            <h3>{prop.name}</h3>
            <p>{prop.d}</p>
        </div>
    </div>
  )
}

export default Card