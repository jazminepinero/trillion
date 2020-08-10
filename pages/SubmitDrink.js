import React from 'react'

import { Button } from '@chakra-ui/core'


function ContactUs() {
    return (
        <div>
    
           <br />
            <h1 className="form">Contact us</h1>
          
<form className="form" name="contact" action="/success" method="POST" data-netlify="true">
<input type="hidden" name="form-name" value="contact" />
<p>
<label htmlFor="yourName">
          Your Name:
        </label> <br />
<input type="text" name="firstName" id="firstName" />
         <br />
      </p>
      <p>
        <label htmlFor="yourEmail">
          Your Email:
        </label> <br />
        <input type="email" name="email" id="yourEmail" />
      </p>
      <p>
        <label htmlFor="yourMessage">
          Message:
        </label> <br />
        <textarea name="message" id="yourMessage"></textarea>
      </p>
      <p>
        <Button type="submit">Submit</Button>
      </p>
    </form>
        </div>
    )
}

export default ContactUs
