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
            <form>
                <input type="email" name="get_in_touch" />
                <button type="submit" htmlFor="get_in_touch">Subscribe</button>
            </form>
        </article>
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