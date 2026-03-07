import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Blog from '../../Blog/Blog';

const Blogs = () => {
    const blogsData = useLoaderData();
    console.log(blogsData);
    return (
        <div className='mt-5 max-w-[90vw] mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <div className="badge badge-soft badge-info rounded-2xl text-xl p-4">Our Blogs</div>
                <h2 className='text-5xl font-semibold'>Resources and insights</h2>
                <p className='mt-3 text-xl'>The latest industry news, interviews, technologies, and resources.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-10'>
                {
                    blogsData.map(blogData => <Blog key={blogData.id} blogData={blogData}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;