import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5'>
            <div className='flex flex-col justify-center items-center'>
                <div className="badge badge-soft badge-info rounded-2xl text-xl p-4">Our Blogs</div>
                <h2 className='text-5xl font-semibold'>Resources and insights</h2>
                <p className='mt-3 text-xl'>The latest industry news, interviews, technologies, and resources.</p>
            </div>

            <div>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="image"
                        />
                    </figure>
                    <div className="card-body items-start text-left">
                        <h2 className="card-title">useState hook</h2>
                        <p>What is useState and how does it work in React?</p>
                        <div>
                            <div className="chat-image avatar">
                            <div className="w-12 h-12 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
                                />
                            </div>

                            <div className='ml-3'>
                                <p className='text-base'>Name</p>
                                <p className='font-extralight'>20 Jan 2022</p>
                            </div>
                        </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Blogs;