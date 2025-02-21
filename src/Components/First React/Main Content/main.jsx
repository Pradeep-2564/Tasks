
import Aside from '../Aside/aside'
import './main.css'

const Main = ()=> {
    return(
        <div>
            <section>
                <p id='sec-name'>5 Minutes That Might <br/>Change Your Life</p>

                <div className="sec-content">

                    <img src="https://markmanson.net/wp-content/themes/mm-main/images/two-phones-vertical-blue-background-opt-2.png" alt="img" />

                    <div className="sec-dis">
                        <div>have shared breakthroughs so far. Will the next one be you?</div>
                        <p id='sec-data'>Receive ideas shared with millions of people each week directly to your inbox.</p>
                        <input type="email" placeholder='Your Email Address' required />
                        <button id='btn'>sign up</button>
                        <p id='privacy'>Your information is protected and I never spam, ever. You can view my privacy policy </p>
                    </div>
                </div>
                <Aside/>
            </section>

        </div>
    )
}

export default Main