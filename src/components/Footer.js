import React from "react";
import { BsFacebook,BsInstagram,BsYoutube,BsTwitter } from 'react-icons/bs';
export default class Footer extends React.Component {
render() {
return (
<>
<div className="contact">
    <section className="container-fluid container_footer">
        <article>
            <h3>Got questions? Get in touch</h3>
            <p>
            If you'd like more information about any of our services, please reach out and we will 
            contact you promptly. And while you're at it, signup for our newsletter to stay informed on all the 
            latest services and products, research and awesome designs that we've captured along the way.
            </p>
        </article>
        <div className="contact_form">
            <form>
                <label htmlFor="your_name">Your name</label>
                <input type="text" name="your_name" />
                <label htmlFor="your_phone">Phone</label>
                <input type="number" name="your_phone" />
                <label htmlFor="your_email">Email</label>
                <input type="email" name="your_email" />
                <div className="preferred_method">
                    <p>Preferred method of contact:</p>
                    <label>
                        <input type="radio" name="email"/>
                        <span></span>
                        Email
                    </label>
                    <label>
                        <input type="radio" name="phone" />
                        <span></span>
                        Phone
                    </label>
                    <label>
                        <input type="radio" name="message_text" />
                        <span></span>
                        Text
                    </label>
                </div>
                <label htmlFor="text">Your message/Question</label>
                <textarea name="message"/>
                <div className="signup_newsletter">
                    <label>
                        <input type="checkbox" name="" />
                        <span></span>
                        Sign up our newsletter!
                    </label>
                </div>
                <button type="submit">Send Request</button>
            </form>
        </div>
    </section>
    <section className="container-fluid social_footer">
        <article>
            <h3>Let's be social - connect with us!</h3>
                <div className="icons_footer text-center">
                    <BsFacebook className='icon' title="Facebook"/>
                    <BsInstagram className='icon' title="Instagram"/>
                    <BsYoutube className='icon' title="YouTube"/>
                    <BsTwitter className='icon' title="Twitter"/>
                </div>
        </article>
    </section>
</div>
<div className="container-fluid contact_footer">
    <article>
        <h3>Contact Information</h3>
            <p>Phone: 0976 395 9021</p>
            <p>Email: main@magsige.com</p>
            <p>Address: Calinan, Davao City, 8000</p>
    </article>
</div>
<div className="container-fluid copyright_footer">
    <span>ACMADE MAGSIGE@2023</span>
</div>
</>
)
}
}