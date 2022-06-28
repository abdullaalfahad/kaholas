import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAngleRight, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


function App() {
  const [images, setImages] = useState([]);

  useEffect(()=> {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setImages(data))
  }, [])

  return (
    <div className='container mx-auto py-4'>
      <h1 className='text-4xl font-bold'>Summer Art Camp! 5 Days of Artists Painting And Painting Monet, Van Gogh, Matisse & More</h1>
      <p className='text-gray-700 font-medium mt-1'>Multi Day Course</p>
      <div class="grid grid-cols-2 gap-4 mt-12">
        <div>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate in, eius reprehenderit quos corrupti vitae quia maxime mollitia ad facere laudantium iste aut explicabo! Sapiente repellendus quibusdam possimus obcaecati impedit, culpa, nulla distinctio nemo iste vero voluptatum temporibus maiores ut!</p>
          <div className='my-6'>
          <img width='30px' height='30px' className='rounded-full inline mr-2' src="https://www.menshairstyletrends.com/wp-content/uploads/2018/02/barbergreg-mens-hair-trends-2018-sweep-back-beard.jpg" alt="" />
          <span className='text-blue-700 font-medium'>Kambly R. Monster</span>
          </div>
          <div className='mb-1'>
          <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
          <p className='inline text-gray-500 ml-2'><small>437 total reviews for this teacher</small></p>
          </div>
          <div className=''>
          <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
          <FontAwesomeIcon className='text-yellow-500' icon={faStar} />
          <p className='inline text-gray-500 ml-2'><small>5 reviews for this class</small></p>
          </div>
          <p className='mt-2 mb-12'>Completed by 21 learners</p>
          <button className='bg-blue-600 rounded-full py-2 px-6 text-white'>See Class Schedule <FontAwesomeIcon className='text-white' icon={faAngleRight} /></button>
          <button className='ml-16'><FontAwesomeIcon className='mr-1 text-blue-600' icon={faHeart} />Save</button>
          <button className='ml-16'><FontAwesomeIcon className='mr-1 text-blue-600' icon={faShare} />Share</button>
        </div>
        <div className='grid grid-cols-2 items-center'>
          <div>
            {
              images.slice(0,1).map(img1 => <img className='w-full' src={img1.img} alt="" />)
            }
          </div>
          <div className='ml-5'>
          {
              images.slice(1,2).map(img1 => <img className='mb-6' src={img1.img} alt="" />)
            }
          {
              images.slice(2,3).map(img1 => <img src={img1.img} alt="" />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
