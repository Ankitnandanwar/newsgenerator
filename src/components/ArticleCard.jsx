import React from 'react'
import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {


    return (
        <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-gray-900'>
            {
                article.image ? (<img className="rounded-t-lg object-cover w-full h-[150px]" src={article.image} alt="" />) :
                    (<div className='w-full h-[150px] bg-slate-200 flex justify-center items-center rounded-t-lg'>No image found</div>)
            }
            <div className='p-5'>
                <div>
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-700 dark:text-white">{article.title}</h5>
                    <p className='font-normal text-gray-700 dark:text-gray-400 text-sm'>{article.description}</p>

                    <div className='py-2 flex flex-col gap-1 my-2'>
                        <div>
                            {
                                article.category ? (<p className='text-gray-800 text-sm font-semibold'>Category: <span className='underline'>{article.category}</span></p>) :
                                (<p className='text-gray-800 text-sm font-semibold'>Category: <span className='underline'>No category</span></p>)
                            }
                            
                        </div>
                        {
                            article.author ? (<div><p className='text-gray-800 text-sm font-semibold'>Author: <span>{article.author}</span></p></div>) :
                                (<div><p className='text-gray-800 text-sm font-semibold'>Author: <span>No author</span></p></div>)
                        }


                        <div><p className='text-gray-800 text-sm font-semibold'>Publshed At: <span>{article.published}</span></p></div>
                    </div>
                </div>
                <div>
                    <Link to={article.url} target='_blank' className='w-28 flex justify-center items-center gap-1 bg-blue-700 px-2 py-1 text-white rounded-md'>
                        <p>Read more</p>
                        <IoArrowForwardSharp className='mt-1' />
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default ArticleCard