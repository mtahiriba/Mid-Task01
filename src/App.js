import './App.css';
import PollDispaly from './Components/PollDispaly';
import UserParticipation from './Components/UserParticipation';
import ThankYouMessage from './Components/ThankYouMessage';
function App() {

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      
      <h1 className='text-center'>Polling App</h1>
      <PollDispaly />
      <UserParticipation />
      <br/>
      <ThankYouMessage />

    </div>
    );
}

export default App;
