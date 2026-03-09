import React, { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import BlogModal from './blogModal';

const Blog = ({blogData}) => {
    const {id, title, description, answered, card_image, author} = blogData;
    const [modalOn, setModalOn] = useState(false);
    return (
        <div>
                <div className="card bg-base-100 w-96 h-125 shadow-sm mb-10">
                    <figure className="px-10 pt-10">
                        <img
                            src={card_image}
                            alt="image"
                            className='w-96 h-50'
                        />
                    </figure>
                    <div className="card-body items-start text-left">
                        <a onClick={()=>setModalOn(true)} className="card-title text-2xl hover:cursor-pointer">{title} <MdArrowOutward className='ml-3'/> </a>
                        
                        <p className='text-base'>{description}</p>
                        <div className='mt-10'>
                            <div className="chat-image avatar">
                            <div className="w-12 h-12 rounded-full">
                                <img
                                    alt="Author profile"
                                    src={author.image}
                                />
                            </div>

                            <div className='ml-3'>
                                <p className='text-base'>{author.name}</p>
                                <p className='font-extralight'>{author.date}</p>
                            </div>
                        </div>
                        </div>
                    </div>


                </div>

                <BlogModal blogData = {blogData} modalOn= {modalOn} setModalOn= {setModalOn}></BlogModal>
            </div>
    );
};

export default Blog;