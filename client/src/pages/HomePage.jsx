import profileImage from "../assets/Images/Profile.jpg";
import "../components/styles/HomePage.css";

export default function HomePage() {
    return (
        <div className="homePage">
               <img id="photo" src={profileImage} alt="Picture of Cody Schwengler" />
            <div>
                <div id="aboutme">
                    <h1>I am Cody Schwengler</h1>
                    <p>Fullstack developer, Node.js lover, and Owner of BloodHaven Productions Comics.</p>
                    <p> I invite you to explore my digital playground—a collection of projects, experiences, and code snippets that showcase my journey in the world of software development.</p>
                </div>
            </div>
        </div>
    );
}