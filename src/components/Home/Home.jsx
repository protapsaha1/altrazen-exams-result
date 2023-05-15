

const Home = () => {
    return (
        <div className="w-full h-[70vh]">
            <div className="w-[1980px] h-full border my-5  py-6 px-12 mx-auto rounded-xl shadow-2xl">
                <h1 className="text-6xl font-bold m-10 mt-[30%]">Find your Result</h1>
                <form>
                    <div className="grid grid-cols-2 gap-6 mt-20 place-content-center">
                        <div className="w-full">
                            <div className="my-16">
                                <label>
                                    <span className="text-lg font-bold">Polytechnic Name</span>
                                </label>
                                <br />
                                <input className="w-full h-14 ps-3 mt-2 text-3xl font-semibold border" type="text" name="collegeName" placeholder="Your Institutions Name" required />
                            </div>
                            <div className="my-16">
                                <label>
                                    <span className="text-lg font-bold">Roll</span>
                                </label>
                                <br />
                                <input className="w-full h-14 ps-3 mt-2 text-3xl font-semibold border" type="text" name="roll" placeholder="Your Board Roll" required />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="my-16">
                                <label>
                                    <span className="text-lg font-bold">Registration No.</span>
                                </label>
                                <br />
                                <input className="w-full h-14 ps-3 mt-2 text-3xl font-semibold border" type="text" name="registration" placeholder="Your Registration No." required />
                            </div>
                            <div className="my-16">
                                <label>
                                    <span className="text-lg font-bold">Semester</span>
                                </label>
                                <br />
                                <select className="w-full h-14 ps-3 mt-2 text-3xl font-semibold border" name="semester" required>
                                    <option className="text-4xl font-bold" value="">Select Your Semester</option>
                                    <option className="text-4xl font-bold" value="">1st Semester</option>
                                    <option className="text-4xl font-bold" value="">2nd Semester</option>
                                    <option className="text-4xl font-bold" value="">3rd Semester</option>
                                    <option className="text-4xl font-bold" value="">4st Semester</option>
                                    <option className="text-4xl font-bold" value="">5th Semester</option>
                                    <option className="text-4xl font-bold" value="">6th Semester</option>
                                    <option className="text-4xl font-bold" value="">7th Semester</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <input className="w-40 h-12 bg-sky-800 hover:bg-sky-700 text-white text-2xl font-semibold" type="submit" value="Get result" />
                </form>
            </div>
        </div>
    );
};

export default Home;