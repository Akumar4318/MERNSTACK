import { useState } from "react";
import Sppiner from "./Sppiner";

const Cards = (props) => {
 let product=props.item;
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="flex flex-wrap flex-col border border-black p-3 m-2  bg-[#d9fe7b] w-[300px] justify-center items-center  rounded-lg">
      {loading && <Sppiner className="h-[300px] flex items-center justify-center"/>}
      <img
        src={product.images[0]}
        alt=""
        className={`w-[300px] h-[200px]  ${loading ? "hidden" : "block"}`}
        onLoad={handleImageLoad}
      />
      <p>Title: {product.title}</p>
      <p className="font-bold">Price: {product.price}</p>
    </div>
  );
};

export default Cards;
