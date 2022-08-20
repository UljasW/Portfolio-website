import React from "react";
import './Widget.css';


function ContactMe() {

    function OpenMail() {
        var email = 'uljas.wennstrom@gmail.com';
        var subject = 'Test';
        var emailBody = 'Hi Sample,';
        var attach = 'path';
        document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody+
            "?attach="+attach;
    }
    return (

        <div>
            <button className="Button" onClick={OpenMail}>
                My email
            </button>
            <form action="https://github.com/UljasW">
                <input className='Button' type="submit" value="My linkedin" />
            </form>
        </div>

    );
}





export default ContactMe;

