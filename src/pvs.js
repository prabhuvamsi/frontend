import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Pvs = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB using Axios
    axios.get('http://localhost:3002/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [formData, setFormData] = useState({ title: '', price: '' });
  const [cartData, setCartData] = useState([]); // State to store cart items

  useEffect(() => {
    if (formData.title && formData.price) {
      // Make API call only if formData has valid data
      axios
        .post('http://localhost:3002/addstudent', formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [formData]); // Run this effect whenever formData changes

  const handleSubmit = (pv) => {
    if (pv && pv.title && pv.price) {
      setFormData({ title: pv.title, price: pv.price });
      setCartData([...cartData, pv]); // Add item to cartData state
    }
  };
  return (
    <div>
       <div className="navbar">
        <Link to="/home"><button style={{ borderRadius:"30px",backgroundColor:"black",color: "white",width: "100px",height: "40px"}} >Home</button></Link>
        <Link to="/cart"><button style={{ borderRadius:"30px",backgroundColor:"black",color: "white",width: "100px",height: "40px"}} >cart</button></Link>
      </div>
      {/* Your navigation bar code */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
      }}>
        {products.map((product, index) => {
          return (
           <center> <div style={{ width: '300px', height: "400px", borderRadius: "30px",border:"2px solid black",marginTop:"20px", boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)", transition: "box-shadow 0.3s"}} key={product.id}>
              <img style={{ width: "100%", height: "250px", borderRadius: "30px" }} src={product.img} alt={product.title} />
              <div className="card-body">
                <p className="card-text" style={{ color: 'black',marginTop:"20px" }}>{product.title}</p>
                <p className="card-text" style={{ color: 'black' }}>Price: {product.price}</p>
                <center><button style={{ borderRadius: "30px", backgroundColor: "black", color: "white", width: "150px", height: "40px" }} onClick={() => handleSubmit(product)}>Add to Cart</button></center>
              </div>
            </div></center>
          );
        })}
      </div>
    </div>
  );
};
export default Pvs;
