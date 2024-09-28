import {CONTACT} from "../constants"
const GetinTouch = () => {
  return (
    <div className="border-b  border-neutral-900 ">
        <h1 className="my-10 text-center text-4xl bg-gradient-to-l from-pink-500  via-slate-500 to-purple-500 bg-clip-text text-transparent">Get in Touch</h1>
        <div className="text-center tracking-tight">
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="mailto:abhishekchiluveru2004@gmail.com" className="border-b">{CONTACT.email}</a>
        </div>
        <h1 className="text-center mt-6">Copyright  Abhishek's Portfolio | All rights reserved</h1>
    </div>
  )
}

export default GetinTouch