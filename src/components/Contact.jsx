
const Contact = () => {
    return (
        <div className="border-b  border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl bg-gradient-to-l from-pink-500  via-slate-500 to-purple-500 bg-clip-text text-transparent">Contact Me</h1>
            <div className=" flex flex-col items-center">
                <label className="mx-24 mt-3" htmlFor="email" >Email</label>
                <input className="bg-transparent outline-none h-10 w-60  mx-24  lg:w-80 lg:h-12 rounded-lg " type="email" name="email" id="email" />
                <hr className="w-60 mb-2 lg:w-80" />
                <label className="mx-24 mt-3" htmlFor="name" >Name</label>
                <input className=" bg-transparent outline-none h-10 w-60 mx-24  lg:w-80 lg:h-12 rounded-lg" type="text" name="name" id="name" />
                <hr className="w-60 mb-2 lg:w-80" />
                <label className="mx-24 mt-3" htmlFor="query" >Query</label>
                <input className=" bg-transparent outline-none h-10 w-60 mx-24  lg:w-80 lg:h-12 " type="text" name="query" id="query" />
                <hr className="w-60 mb-2 lg:w-80" />
                <button type="submit" className=" mt-3 bg-neutral-900 px-8 py-2 text-md font-medium text-purple-500 lg:px-8 lg:py-3  rounded-xl">Send</button>
            </div>
        </div>
    )
}

export default Contact