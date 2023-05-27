import './App.css';
import { useState } from 'react';
import PollDispaly from './Components/PollDispaly';
import UserParticipation from './Components/UserParticipation';
import ThankYouMessage from './Components/ThankYouMessage';
import AnotherUserParticipation from './Components/AnotherUserParticipation';

function App() {


  const [data, setData] = useState({
    
    "question": "What is your favorite programming language?",
    "choices": [
  
      { "id": 1, "label": "JavaScript", "votes": 0 },
  
      { "id": 2, "label": "Python", "votes": 0 },
  
      { "id": 3, "label": "Java", "votes": 0 },
  
      { "id": 4, "label": "C#", "votes": 0 }
    
    ]
  }) 

    const [chechVote, setchechVote] = useState(false)


    function handleAntherParticipant(){
        setchechVote(false)
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      
      <h1 className='text-center'>Polling App</h1>
      <PollDispaly data={data}/>
      
      <br/>
      {chechVote ? <ThankYouMessage /> : <UserParticipation data={data} setData={setData} setchechVote={setchechVote}/>}
      
      {chechVote ? <AnotherUserParticipation handleAntherParticipant={handleAntherParticipant}/> : null}

    </div>
    );
}

export default App;
