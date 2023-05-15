import refer from '../../../public/image/tumblr_mva5fxDrjn1rudw6uo1_500.gif';


const Refer = () => {
    return (
        <div className='w-[1980px] mx-auto'>
            <img className='w-[1238px] h-[740px] mx-auto my-16 rounded-lg' src={refer} alt="" />
            <h1 className='text-center font-bold text-8xl'>Your Results</h1>
            <div className='w-[1200px] h-96 border shadow-2xl rounded-xl mx-auto mt-5 bg-red-400 p-10'>
                <h1 className='text-5xl font-bold mb-3'>Physics-2 <span>fail</span> </h1>
                <h1 className='text-5xl font-bold'>Mathematics-3 <span>fail</span></h1>
            </div>
        </div>
    );
};

export default Refer;