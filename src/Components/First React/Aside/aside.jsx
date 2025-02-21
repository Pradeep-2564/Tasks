
import Footer from "../Footer/footer"
import "./aside.css"

const Aside = ()=> {
    return(
        <div>
            <aside>
                <div className="content">
                    <h1>Hi, I’m Mark</h1>
                    <p id="aside-disc">I write life advice that is science-based, pragmatic, and non-bullshitty—a.k.a., life advice that doesn’t suck. Some people say I’m an idiot. Other people say I saved their life. Read on and decide for yourself.</p>
                    <img src="https://markmanson.net/wp-content/themes/mm-main/images/mark-crossed-arms-in-circle-light-1x.png" alt="img" />
                </div>
            </aside>
            <Footer/>
        </div>
    )
}

export default Aside