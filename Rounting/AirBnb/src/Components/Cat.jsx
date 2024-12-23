import { useEffect, useState } from 'react';
import Lodder from './Lodder';
import Catimg from './Catimg';


const Cat = () => {
  const [img, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getcatdata() {
    setLoading(true);
    try {
      let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
      let data = await response.json();
      setImage(data);
    } catch (error) {
      console.error('Network error:', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getcatdata();
  }, []);

  return (
    <div className='flex flex-wrap h-lvh w-lvw justify-center items-center border-2 border-black'>
      {/* Display loading message when data is being fetched */}
      {loading ? (
        <p className=' '><Lodder/></p> // This can be replaced with a spinner or any loading indicator
      ) : (
        img.map((item) => (
          // <img key={item.id} src={item.url} alt="Cat" className='w-[200px] m-4 p-3 rounded-[20px]' />
          
          <Catimg key={item.id } item={item.url}/>
         
        ))
      )}
      
      {/* Handle the case where images are empty after loading */}
      {!loading && img.length === 0 && <p>No images found</p>}
     
    </div>
  );
};

export default Cat;
