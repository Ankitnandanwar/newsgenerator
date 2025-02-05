import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ArticleCard from '../components/ArticleCard'

import { useSelector, useDispatch } from 'react-redux'
import { fetchApiNews } from '../redux'

const Home = () => {
    const [showFilter, setShowFilter] = useState(false)
    const [search, setSearch] = useState('')

    const news = useSelector(state => state.news) || []
    const dispatch = useDispatch()

    const [filterData, setFilterData] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectNewsDate, setSelectNewsDate] = useState('')
    const [selectSource, setSelectSource] = useState('')

    useEffect(() => {
        dispatch(fetchApiNews())
    }, [dispatch])

    // console.log(users)



    // search any news/articles
    const handleSearchChange = (e) => {
        setSearch(e.target.value)
    }

    const filterNews = () => {
        let filteredNews = Array.isArray(news) ? news : [];
        if(search){
            filteredNews = filteredNews.filter((item) => 
            item.title.toLowerCase().includes(search.toLowerCase()))
        }
        if(selectedCategory){
            filteredNews = filteredNews.filter((item) =>
                item.category.toLowerCase().includes(selectedCategory.toLowerCase()))
        }
        if(selectNewsDate){
            filteredNews = filteredNews.filter((item) =>
                item.published.includes(selectNewsDate))
        }
        if(selectSource){
            filteredNews = filteredNews.filter((item) =>
                item.source.toLowerCase().includes(selectSource.toLowerCase()))
        }
        setFilterData(filteredNews)
    }

    const handleReset = () => {
        setShowFilter(false)
        setSearch('')
        setSelectedCategory('')
        setSelectNewsDate('')
        setSelectSource('')
    }

    useEffect(() => {
        setFilterData(news);
    }, [news]);

    useEffect(() => {
        filterNews()
    }, [search, selectedCategory, selectNewsDate, selectSource])
    


    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 mt-24'>
            <div className='min-w-60'>
                <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 uppercase'>Filters
                    <img src={assets.dropdown} alt="dropdown_icon" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
                </p>


                <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='uppercase mb-3 text-sm font-medium'>Personalization</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={'bbc'} />BBC
                        </p>
                        <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={'Guardian'} />The Guardian
                        </p>
                        {/* <p className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={'nytimes'} />NY Times
                        </p> */}
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                <div className='flex flex-col text-base sm:text-2xl mb-4 '>
                    <div>
                        <Title text1={'All'} text2={'News'} />
                    </div>

                    <div className='lg:flex justify-between '>
                        <div>
                            <input type="text" placeholder="Search articles..." className="bg-transparent border-2 border-gray-300 outline-none text
                            py-1 px-2 mt-10 md:min-w-96 min-w-72 md:mt-0 text-base rounded-md" onChange={handleSearchChange} />
                        </div>

                        <div className='lg:flex flex-col lg:flex-row gap-8'>
                            <div className='lg:my-0 my-2'>
                                <select className='border-2 border-gray-300 text-sm px-2 py-1'
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}>
                                    <option value="">Category</option>
                                    <option value="News">News</option>
                                    <option value="Sport">Sports</option>
                                    <option value="Arts">Arts</option>
                                </select>
                            </div>

                            <div className='lg:my-0 my-2'>
                                <input type="date" value={selectNewsDate} onChange={(e)=>setSelectNewsDate(e.target.value)} className='border-2 border-gray-300 text-sm px-2 py-1' />
                            </div>

                            <div className='lg:my-0 my-2'>
                                <select className='border-2 border-gray-300 text-sm px-2 py-1'
                                value={selectSource}
                                onChange={(e) => setSelectSource(e.target.value)}>
                                    <option value="">Source</option>
                                    <option value="BBC">BBC</option>
                                    <option value="Guardian">The Guardian</option>
                                    {/* <option value="nytimes">NY Times</option> */}
                                </select>
                            </div>

                            <div className='lg:my-0 my-2'>
                                <button className='bg-[#ee1b8e] text-white text-sm px-2 py-1' onClick={handleReset}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 gap-y-6'>
                    {
                        filterData.map((ele, id) => (
                            <ArticleCard article={ele} key={id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home