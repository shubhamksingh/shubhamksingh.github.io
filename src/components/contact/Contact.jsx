import { Button,} from "@chakra-ui/react"
import "./contact.scss"
import {AiFillLinkedin,AiFillGithub,AiOutlineMail} from "react-icons/ai"
import { useState } from "react";

function Contact() {
const [message, setMessage]  = useState(false)
function handleSubmit(e){
    e.preventDefault();
    setMessage(true);
    console.log(e.target)
}


  return (
    <div className="whole">
    <div className="contact" id ='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form action="https://formsubmit.co/shubh0795@gmail.com" method="POST" onClick={handleSubmit}>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Mobile Number" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
    <div className="footer">
    <a href="https://www.linkedin.com/in/shubham-singh-b54376247/" target='_blank'><Button className="bt" size={["xs","md","md","lg","md"]} bg={"#00a0dc"} color="white" _active="none" _hover={"none"} gap={"10px"}><AiFillLinkedin/>Linkedin</Button></a>      
    <a href="https://github.com/shubhamksingh" target="_blank"><Button className="bt" size={["xs","md","md","lg","md"]} bg={"#373b41"} color="white" _active="none" _hover={"none"} gap={"10px"}><AiFillGithub/>GitHub</Button></a>
    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" ><Button className="bt" size={["xs","md","md","lg","md"]} bg={"#e53e3e"} color="white" _active="none" _hover={"none"} gap={"10px"}><AiOutlineMail/>Gmail</Button></a>
    </div>
    </div>
  )
}

export default Contact