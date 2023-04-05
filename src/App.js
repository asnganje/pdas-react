import './stylePC.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

export default function App() {
    return (
        <div>
            <div className='main-topic'>Personal Digital Assistants</div>
            <div className="pda-container1">
            <ProfileCard title = "Alexa" username = "@alexa99" image = {AlexaImage} />
            <ProfileCard title = "Cortana" username = "@cortana32" image = {CortanaImage}/>
            <ProfileCard title = "Siri" username = "@siri01" image = {SiriImage}/>
            </div>
        </div>
    )
}