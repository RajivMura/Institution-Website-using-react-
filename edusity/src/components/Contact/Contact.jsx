import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


export default function Contact() {


  const [result, setResult] = React.useState("");


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "80a58d4f-ff64-42ce-baa2-2a37910e7df3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find ourcontact information below. Your feedback, question, and suggestions are important to us as we strive to provide exveptional service to our university community. </p>

        <ul>
          <li><img src={mail_icon} alt="" />rajivmura299@gmail.com</li>
          <li><img src={phone_icon} alt="" />8757711941</li>
          <li><img src={location_icon} alt="" />Vill- Mohong Mura, PO/PS- Bordumsa, Dist- Changlang(AP)</li>

        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label >Your name</label>
          <input type="text" name="name" id="" placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />
          <label>Write your message here</label>
          <textarea name="message" rows='6' placeholder='Enter you message' required></textarea>

          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        
        </form>
        <span>{result}</span>
      
      </div>



    </div>
  )
}
