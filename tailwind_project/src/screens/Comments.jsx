import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from '../axios';
import requests from "../requests";

const Comments = () =>{
    const location = useLocation();
    const history = useHistory();

    const [comment, setComment] = useState([]);
    console.log('comment', comment);

    useEffect(()=>{
     async function fetchComments() {
    const request = await axios.get(requests.fetchComments);
        const data = request.data.filter(e=>e.postId === location.state.id);
        setComment(data);
          }
          fetchComments();
    },[location.state.id])
    return (
        <>
<div class="p-6 w-full-sm mx-auto bg-white items-center bg-gray-100 ">
<h1 className="text-4xl divide-y-2 mb-3 ">POST: {location.state.id}</h1>
    {comment.map((e)=>(
        <div className="mb-2">
            <div class="text-xl font-medium text-black">Name: {e.name}</div>
            <p class="text-gray-500">Email: {e.email}</p>
            <p className="text-purple-700 text-opacity-75">Comment: {e.body}</p>
        </div>
    ))}
    <button className="w-12 mt-3 bg-black text-white font-semibold" onClick={()=>history.push("/")}>Back</button>
</div>  
</>   
    );
  }
  
  export default Comments;
  