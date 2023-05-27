import React from 'react'

export default function PollDispaly({data}) {
  return (
    <div>
        <h2>Poll Question: {data.question}</h2>
        <h3>Answer Choices with vote counts:</h3>
        {
            data.choices.map((choice) => {
                return <div key={choice.id}>{choice.label}: {choice.votes} votes</div>
            })
        }
    </div>
  )
}
