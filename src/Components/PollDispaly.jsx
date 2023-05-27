import React from 'react'

export default function PollDispaly({javascript, python, java, csharp}) {
  return (
    <div>
        <h2>Poll Question: What is your favourite Programming Language.</h2>
        <h3>Answer Choices with vote counts:</h3>
        <div>JavaScript: {javascript} votes</div>
        <div>Python: {python} votes</div>
        <div>Java: {java} votes</div>
        <div>C#: {csharp} votes</div>
    </div>
  )
}
