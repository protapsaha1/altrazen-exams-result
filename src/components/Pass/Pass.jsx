import pass from '../../../public/image/santa_chillin.gif';

const Pass = () => {
    return (
        <div className='w-[1980px] mx-auto'>
            <img className='w-[1238px] h-[740px] mx-auto my-16 rounded-lg' src={pass} alt="" />
            <h1 className='text-center font-bold text-8xl'>Your Results</h1>
            <div className='w-[1200px] h-96 border shadow-2xl rounded-xl mx-auto mt-5 bg-red-400'>
                <h1>C-GPA : 4</h1> 
            </div>
        </div>
    );
};

export default Pass;