import React from 'react'
import { useFormik } from 'formik'

export default function UserParticipation() {
  
    const formik = useFormik({
        initialValues: {
            choice: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
  
    return (
    <div>
        <form action="" onSubmit={formik.handleSubmit}>
            <h1>Answer Choices:</h1>
            <div role='group' onChange={formik.handleChange}>
                <label htmlFor=""><input type="radio" name='choice' value={"javascript"}/> JavaScript</label>
                <br />
                <label htmlFor=""><input type="radio" name='choice' value={"python"}/> Python</label>
                <br />
                <label htmlFor=""><input type="radio" name='choice' value={"java"}/> Java</label>
                <br />
                <label htmlFor=""><input type="radio" name='choice' value={"csharp"}/> C#</label>
                <br />
                <button type='submit'>Submit vote</button>
            </div>
        </form>
        
    </div>
  )
}
