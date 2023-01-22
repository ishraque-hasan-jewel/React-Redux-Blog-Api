import Container from 'react-bootstrap/Container';
import './App.css';
import Post from "./components/Post";
import React from 'react'
  
    import { Link } from "react-router-dom";
    
    function Postid() {
        return (
          <Container>

    <div className='test1'>
      <h1 id="About">Blog</h1>
      <p>API Calling with Jason Place holder</p>
     
      </div >
      <div className='test2'>
      <hr />
      </div>

          
          <Link to="/" class="back">
             Back
           </Link>
           
             <Post />
           
          </Container>
        
       
      );
    }
    export default Postid
  