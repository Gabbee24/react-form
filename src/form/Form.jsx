import React from "react";
import './form.style.css';

export default function Form(){
    const [formData, setFormData] = React.useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            comments: '',
            isFriendly: true,
            employment: ''
        }
    )

    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    return(
        <form action="">
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />

            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="LastName"
                value={formData.lastName}
            />
            
            <input 
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            <textarea
                value={formData.comments}
                placeholder='comments'
                onChange={handleChange}
                name="comments"
                />

            <label htmlFor="isFriendly">Are you friendly</label>
            <input 
                type="checkbox" 
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
                />

            <fieldset>
                <legend>Current employment status</legend>

                <label htmlFor="unemployed">Unemployed</label>
                <input 
                    type="radio" 
                    id="unemployed"
                    name="employment"
                    value='unemployed'
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                    />
                <br />
                
                <label htmlFor="part-time">Part-time</label>
                <input 
                    type="radio" 
                    id="part-time"
                    name="employment"
                    value='part-time'
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                    />
                <br />
                
                <label htmlFor="full-time">Full-time</label>
                <input 
                    type="radio" 
                    id="full-time"
                    name="employment"
                    value='full-time'
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <br />
            </fieldset>
            <br />

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select id="favColor">
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
        </form>
    )

}