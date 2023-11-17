
import Hero from './CallToAction';
import Specials from './Specials'

function Home() {
    return (
        <section className="App-home" aria-label="home page">
            <Hero/>
            <section className="App-onlineMenu" aria-label="online menu">
                    <p className="App-dish-title">Specials</p>
                    <input type="button" id="onlineMenu" className="App-button" value="Online Menu" aria-label="online menu"/>
            </section>
            <Specials/>
        </section>
    )
}

export default Home;