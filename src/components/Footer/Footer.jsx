import facebook from '../../../public/image/facebook.png';
import linkedin from '../../../public/image/linkedin.png';


const Footer = () => {
    return (
        <div className="w-full h-full bg-sky-700 ">
            <div className='w-[1980px] h-[350px] grid lg:grid-cols-3 lg:grid-rows-1 sm:grid-cols-1  px-36 py-20 mx-auto'>
                <div>
                    <h1 className="text-4xl font-bold text-white">Altrazen</h1>
                    <div className='flex my-4'>
                        <img className='rounded-3xl w-12 h-12 border-2 bg-slate-100 hover:shadow-xl mr-2' src={facebook} alt="" />
                        <img className='rounded-3xl w-12 h-12 border-2 bg-slate-100 hover:shadow-xl' src={linkedin} alt="" />
                    </div>
                    <p className="text-xl font-bold text-white mt-10">Website: Altrazen.com</p>
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-white">Altrazen</h1>
                </div>
                <div>
                    <h1 className="text-4xl font-bold text-white">Altrazen</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;