import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../axios'
import requests from '../requests';

const Card = () =>{
    const url = "/posts";
   const [post, setPost] = useState([]);
   const history = useHistory();
   useEffect(()=>{
    async function fetchPosts() {
        const request = await axios.get(requests.fetchPosts);
        console.log(request)
        setPost(request.data);
      }
      fetchPosts();
   },[url])
    return (
        <div className="bg-gray-100">
             <div className="container mx-auto ">
            <h1 className="text-6xl text-center pb-4">Total Posts</h1>
            <div class="grid grid-cols-3 gap-4 pb-4">
            {post?.map((e,i)=> (
                <div class="transition duration-500  ease-in-out hover:bg-blue-50 transform hover:-translate-y-1 hover:scale-105 cursor-pointer p-6 w-full mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4" onClick={()=>history.push({
                    pathname:"/comments",
                    search:`?id=${e.id}`,
                    state:{
                        id:e.id
                    }
                })}>
                <div>
                    <div class="text-xl font-medium text-black">{e.title}</div>
                    <p class="text-purple-500">{e.body}</p>
                </div>
                </div>
            ))}
      </div>
        </div>
        </div>
       
    );
  }
  
  export default Card;