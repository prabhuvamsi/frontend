import React from 'react';
import './App.css';

function Arrow() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fname: e.target.fname.value,
      lname: e.target.lname.value,
      email: e.target.email.value,
      salary: e.target.salary.value,
      date: e.target.date.value
    };
    console.log(formData);
    // You can further process the form data here, such as sending it to an API.
  };

  return (
    <div style={{ backgroundColor: 'black',height:"100%" }} className="rs">
      <center>
        <h1 className="rr">details Form</h1>
      </center >
      <center>
        <form style={{marginTop:"20px"}}  onSubmit={handleSubmit}>
          <h3>First Name</h3>
          <input type="text" id="fname" name="fname" placeholder="FirstName" required /><br />
          <h3>Last Name</h3>
          <input type="text" id="lname" name="lname" placeholder="Last Name" required /><br />
          <h3>Email</h3>
          <input type="email" id="email" name="email" placeholder="Email" required /><br />
          <h3>Mobile Number 1</h3>
          <input type="tel" id="salary" name="salary" placeholder="Mobile Number" required /><br />
          <h3>Mobile Number 2</h3>
          <input type="tel" id="mobile number 2" name="salary" placeholder="Mobile Number" required /><br />
          <h3>Address 1</h3>
          <input type="tel" id="Address 1" name="address 1" placeholder="Address 1" required /><br />
          <h3>Address 2</h3>
          <input type="tel" id="Address 2" name="address 2" placeholder="address 2" required /><br />
          <h3>Pincode</h3>
          <input type="tel" id="pin code" name="pincode" placeholder="pincode" required /><br />
          <input type="submit" value="submit" className="rl" style={{ height: '40px',marginTop:"30px" }} /><br />

        </form>
      </center>
      <br /><br />
    </div>
  );
}

export default Arrow;
