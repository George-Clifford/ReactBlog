import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogList from './BlogList';

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  

    useEffect(() => {
        axios.get('http://localhost:4000/blogs')
        .then(res =>{setBlogs(res.data)});
    })


  


    return (
        <div>
          {
            blogs && <BlogList blogs = {blogs}/>
          }
          
        
        </div>
      
    
  );
}

export default Blog;