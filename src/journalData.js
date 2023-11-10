import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';

function JournalData() {
    const [novels,setnovels] = useState([]);

    useEffect(() => {
      // Fetch data from MongoDB using Axios
      axios.get('http://localhost:3002/novels')
        .then(response => {
          setnovels(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  return (
    <div>
        <div>
          <Navbar/>
        </div>
        <div className="card-container">
        {novels.map((card, index) => (
          <div key={index} className="card" style={{ width: '18rem' }}>
            <img
              src={card.image}
              className="card-img-top"
              alt={card.title}
            />
            <div className="">
              <h5 style={{color:"black"}}>{card.title}</h5>
              <center><a href='borrow '><button style={{ borderRadius:"10px",backgroundColor:"black",color: "white",width: "100%",height: "40px",marginBottom:"10px"}}>BUY FOR RENT</button></a></center>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-around;
            padding: 10px;
            background-color: lightgray;
          }

          .navbar button {
            padding: 5px 10px;
            background-color: #fff;
            color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .navbar button:hover {
            background-color: #ddd;
          }

          .card-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .card {
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 10px;
            cursor: pointer; 
          }
          .card:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
            
             
          }
          .card {
            transition: border 0.3s ease;
            
          }
          .card-img-top {
            max-height:320px;
            object-fit: cover;
          }

          .modal-image {
            max-height: 80vh;
            max-width: 90%;
            object-fit: contain;
          }

          .card-title {
            font-size: 1.5rem;
          }

          .card-text {
            color: #333;
          }

          .btn-primary {
            background-color: #007bff;
            color: #fff;
          }

          
          .card-modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 999;
          }

          .card-modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
            max-height: 80vh; 
            max-width: 50%; 
            overflow: auto;
          }
        `}
      </style>
    </div>
  );
};

export default JournalData