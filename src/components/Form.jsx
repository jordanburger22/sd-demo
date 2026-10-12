import { useState } from "react"

function Form() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    return (
        <form>
            <input name="firstName" value={formData.firstName} onChange={handleChange}/>
            <input name="lastName" value={formData.lastName} onChange={handleChange}/>
            <input name="age" value={formData.age} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )
}

export default Form