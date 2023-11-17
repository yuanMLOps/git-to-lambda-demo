import about_img_1 from '../images/chef1.avif';
import about_img_2 from '../images/chef2.avif';

const About = () => (
    <section className="App-hero" aria-label="about">
        <section className="App-hero-text" aria-label="hero text">
            <h1>About Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </section>
        <img  className="App-about-img-1" src={about_img_1} aria-label="chef Mario" alt="chef Mario" />
        <img className="App-about-img-2" src={about_img_2} aria-label="chef Adrian" alt="chef Adrian" />
    </section>
)

export default About;