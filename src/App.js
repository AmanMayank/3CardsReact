// import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'
import './css/App.css'

function App(){
    let title1 = "Alexa";
    let title2 = "Cortana";
    let title3 = "Siri";

    let handle1 = "@alexa99";
    let handle2 = "@cortana32";
    let handle3 = "@siri01";

    let description1="Alexa was created by amazon to buy things.";
    let description2="Alexa was created by amazon to buy things.";
    let description3="Alexa was created by amazon to buy things.";


    return(
        <div className="container">
            
            <div className="title">Personal Digital Assistants</div>

            <div className="card-holder">
                <ProfileCard image={AlexaImage} title = {title1}  handle={handle1} desc={description1}/>
                <ProfileCard image={CortanaImage} title = {title2}  handle={handle2} desc={description2}/>
                <ProfileCard image={SiriImage} title = {title3}  handle={handle3} desc={description3}/>
            </div>
        </div>
    );
}

export default App;