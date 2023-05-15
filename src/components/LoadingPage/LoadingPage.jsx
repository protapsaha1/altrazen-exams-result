import cat1 from '../../../public/image/8f0f1a58f61495c4d27bec21c31d7a28.gif';
// import cat2 from '../../../public/image/DabsMyla-CosmicCat_blk_-4.webp';

const LoadingPage = () => {
    return (
        <div className='w-[1980px] mx-auto'>
            <img className='mx-auto w-[1200px]' src={cat1} alt="" />
            <h1 className='text-center text-5xl font-semibold mt-2'>Loading . . . </h1>
            <div className='my-20 text-center '>
                <button className=' w-60 h-20 bg-rose-900 hover:bg-rose-800  text-4xl text-white font-bold  rounded-lg'>Try Again</button>
            </div>

        </div>
    );
};

export default LoadingPage;