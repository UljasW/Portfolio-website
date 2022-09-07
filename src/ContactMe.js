import React from "react";
import './Widget.css';


function ContactMe() {

    function OpenMail() {
        var email = 'uljas.wennstrom@gmail.com';
        document.location = "mailto:"+email
    }
    return (

        <div>
            <button className="Button" onClick={OpenMail}>
                My email
            </button>
            <div className='margin' />
            <form action="https://www.linkedin.com/in/uljas-wennstrom-823b47215/">
                <input className='Button' type="submit" value="My linkedin" />
            </form>
            

        </div>

    );
}



export default ContactMe;

