import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Contact = () => {

  const [userData, setUserData] = useState({name:'', email:'',phone:'',message:''})
  const userContact = async() =>
  {
    try{
      const res = await fetch('/getdata',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      })
      const data = await res.json();
      setUserData({...userData, name:data.name, email:data.email, phone:data.phone});
      if(!res.status===200)
      {
        const error = new Error(res.error);
        throw error;
      }
    }catch(err)
    {
      console.log(err);
      navigate.push('/login');
    }
  }

  useEffect(() => {
    userContact();
  }, []) 

  const handleInputs = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData, [name]:value });
  }

  const contactForm = async(e) =>{
    e.preventDeafult();
    const{name, email, phone, message} = userData;
    const res = await fetch('/contact', {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, email, phone, message
      })
    })
    const data = await res.json();
    if(!data)
    {
      console.log("Message not sent");
    }else
    {
      alert("Message Send");
      setUserData({...userData, message:''});    //name, phone, email same and message deleted after sending
    }
  }

  return (
    <>
    <div className="contact_info">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
            <div className="contact_info_item d-flex justify-content-start align-items-center">
              <img src="" alt="phone"/>
              <div className="contact_info_contact">
                <div className="contact_info_title">
                  Phone
                </div>
                <div className="contact_info_text">
                  +91 1111 543 2198
                </div>
              </div>
            </div>

            <div className="contact_info_item d-flex justify-content-start align-items-center">
              <img src="" alt="email"/>
              <div className="contact_info_contact">
                <div className="contact_info_title">
                  Email
                </div>
                <div className="contact_info_text">
                  abc@gmail.com
                </div>
              </div>
            </div>

            <div className="contact_info_item d-flex justify-content-start align-items-center">
              <img src="" alt="address"/>
              <div className="contact_info_contact">
                <div className="contact_info_title">
                  Address
                </div>
                <div className="contact_info_text">
                  Kolkata, India
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="contact_form">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact_form_container py-5">
              <div className="contact_form_title">
                Get in touch
              </div>
              <form method="POST" id="contact_form">
                <div className="contact_form_name d-flex justify-content-between align-items-between">
                  <input type="text" id="contact_form_name" className="contact_form_name input_field" value={userData.name} onChange={handleInputs} name={name} placeholder="Your Name" required="true"></input>

                  <input type="email" id="contact_form_email" className="contact_form_email input_field" value={userData.email} onChange={handleInputs} name={email} placeholder="Your Email" required="true"></input>

                  <input type="number" id="contact_form_phone" className="contact_form_phone input_field" value={userData.phone} onChange={handleInputs} name={phone} placeholder="Your Phone Number" required="true"></input>
                </div>
                <div className="contact_form_text mt-5">
                  <textarea className="text_field contact_form_message" placeholder="Message" value={userData.message} onChange={handleInputs} name={message} cols="123" rows="10"></textarea> 
                </div>
                <div className="contact_form_button">
                  <button type="submit" className="button contact_submit_button" onClick={contactForm}>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact;