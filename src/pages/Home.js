import React, {useState,useEffect} from 'react';
import axios from "axios";
import { ApiNews } from '../config/Api'

const Home = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        const newsHead = async () => {
            const api = await axios.get(ApiNews)
            setData(api.data.articles)
            console.log(api.data.articles)
        } 
        newsHead()
    },[])

    if (!data) return null; 
    return(
        <>
        <h1 class="text-3xl text-center pt-4 font-semibold">HeadeLines</h1>
        <div class="max-w-full flex-wrap flex justify-around m-10 px-4 mr-10">
            {data.map((news) => (
                <div class="flex  w-96 flex-wrap border-2 mb-10 px-4 mr-2 justify-center">
                        <h1 class="text-xl font-semibold pb-4 pt-4">{news.title}</h1>
                        <img class="max-w-full pb-4" src={news.urlToImage} alt="newsImage" />
                        <div className='pb-4'>{news.description}</div>
                        <div><button className='p-2 pl-5 pr-5 bg-transparent border-2 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-blue-500 hover:text-gray-100 focus:border-4 focus:border-blue-300 mb-2'><a href={news.url}>The More</a></button></div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Home;