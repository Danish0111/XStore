import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
    const [state, handleSubmit] = useForm("xpwaazbj");
    if (state.succeeded) {
        return <p className='flex justify-center items-center min-h-[80vh] text-6xl font-bold bg-gray-200'>Thanks for submitting form!</p>;
    }
    window.onload = function () {
        var el = document.getElementById('g-recaptcha-response');
        if (el) {
            el.setAttribute('required', 'required');
        }
    }
    return (
        <div>
            <section className="bg-light">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Fill the form below or write us and we will help as soon as possible.</p>
                    <form action="https://formspree.io/f/xpwaazbj" className="space-y-4 flex flex-col" method="POST" onSubmit={handleSubmit}>
                        {/* <label htmlFor="name">
                            Enter your name
                        </label>
                        <input
                            className='p-2 bg-gray-200 rounded-md border border-gray-100'
                            id="name"
                            type="name"
                            name="name"
                        />
                        <ValidationError
                            prefix="name"
                            field="name"
                            errors={state.errors}
                        /> */}
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className='p-2 bg-gray-200 rounded-md border border-gray-100'
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className='p-2 bg-gray-200 rounded-md border border-gray-100 h-40'
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button className='w-[20%] p-2 rounded-md text-white flex justify-center  bg-blue-600' type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
