import { loader } from '../assets';

const Loader = ({ title = 'Loading...' }) => (
  <div className='w-full flex justify-center items-center flex-col'>
    <img src={loader} alt='loader' className='w-32 h-32 object-contain' />
    <h1 className='text-white text-2lg mt-2 font-bold'>{title}</h1>
  </div>
);

export default Loader;
