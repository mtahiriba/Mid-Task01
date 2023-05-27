import React from 'react'
import { useFormik } from 'formik'

export default function UserParticipation({data, setData, setchechVote}) {
  
    const formik = useFormik({
        initialValues: {
            choice: ''
        },
        onSubmit: values => {
            setData({
                ...data,
                choices: data.choices.map((choice) => {
                    if(choice.label === values.choice){
                        return {
                            ...choice,
                            votes: choice.votes + 1
                        }
                    }
                    return choice
                })
            })
            setchechVote(true)
        }
    });
  
    return (
    <div>
        <form action="" onSubmit={formik.handleSubmit}>
            <h1>Answer Choices:</h1>
            <div role='group' onChange={formik.handleChange}>
                <label htmlFor=""><input type="radio" name='choice' value={"JavaScript"}/> JavaScript</label>
                <br />
                <label htmlFor=""><input type="radio" name='choice' value={"Python"}/> Python</label>
                <br />
                <label htmlFor=""><input type="radio" name='choice' value={"Java"}/> Java</label>
                <br />
                <label htmlFor=""><input type="radio" name='choice' value={"C#"}/> C#</label>
                <br />
                <button type='submit'>Submit vote</button>
            </div>
        </form>
    </div>
  )
}
