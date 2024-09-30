import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { motion } from "framer-motion"

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Show loading state when email is sending

        // Replace with your actual EmailJS credentials
        const serviceId = 'service_i35zp4t';
        const templateId = 'template_hviaqdk';
        const publicKey = 'zT4x7ia2x26Z_n1fX'; // Use Public Key (API Key) instead of User ID 

        const templateParams = {
            name: formData.name,  // Ensure this matches the placeholder in the template
            email: formData.email,  // Ensure this matches the placeholder in the template
            message: formData.message  // This should match too
        };
        // Logging form data for debugging
        console.log('Form Data:', formData);

        emailjs.send(serviceId, templateId, formData, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text); // For debugging
                setStatusMessage('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Reset form after success
            })
            .catch((error) => {
                console.error('FAILED...', error); // Capture error details
                setStatusMessage('Failed to send the message. Please try again.');
            })
            .finally(() => {
                setLoading(false); // End loading state
            });
    };
    return (
        <div className="border-b  border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className="my-10 text-center text-4xl bg-gradient-to-l from-pink-500  via-slate-500 to-purple-500 bg-clip-text text-transparent">Contact Me</motion.h1>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-xl">Feel free to reach out to me for any questions or opportunities!</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className=" flex flex-col items-center bg- py-6 mx-8 lg:mx-96">
                <form onSubmit={handleSubmit} className=" flex flex-col items-center bg- py-6 mx-8 lg:py-10 lg:mx-96">
                    <label className="mx-24 mt-3" htmlFor="email" >Email</label>
                    <input className="bg-transparent outline-none h-10 w-60  mx-24  lg:w-80 lg:h-12 rounded-lg " type="email" name="email" value={formData.email}
                        onChange={handleChange}
                        required placeholder="Your Email" id="email" />
                    <hr className="w-60 mb-2 lg:w-80" />
                    <label className="mx-24 mt-3" htmlFor="name" >Name</label>
                    <input className=" bg-transparent outline-none h-10 w-60 mx-24  lg:w-80 lg:h-12 rounded-lg" type="text" name="name" value={formData.name}
                        onChange={handleChange}
                        required placeholder="Your Name" id="name" />
                    <hr className="w-60 mb-2 lg:w-80" />
                    <label className="mx-24 mt-3" htmlFor="message" >Query</label>
                    <input className=" bg-transparent outline-none h-10 w-60 mx-24  lg:w-80 lg:h-12 " name="message" value={formData.message}
                        onChange={handleChange}
                        required placeholder="Your query" id="message" />
                    <hr className="w-60 mb-2 lg:w-80" />
                    <button type="submit" disabled={loading} className=" mt-3 bg-neutral-900 w-8/12 py-3 text-md font-medium text-purple-500 lg:px-8 lg:py-4 lg:w-80 lg:mt-6 rounded-xl hover:bg-purple-500 hover:text-white">{loading ? 'Sending...' : 'Send Message'}</button>
                </form>
                {statusMessage && <p>{statusMessage}</p>}
            </motion.div>
        </div>
    )
}

export default Contact