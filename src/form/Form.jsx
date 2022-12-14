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
            employment: '',
            favColor:''
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

    function handleSubmit(event){
        event.preventDefault()
        console.log(formData);
    }

    return(
        <form className="formF" onSubmit={handleSubmit}>
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
                name="lastName"
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

            <label htmlFor="favColor">Path of training</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Digital Literacy</option>
                <option value="orange">Graphics Design</option>
                <option value="yellow">Web development</option>
                <option value="green">Data Science</option>
                <option value="blue">Sofftware Engineering</option>
                <option value="indigo">IT Security</option>
                <option value="violet">DBMS</option>
            </select>

            <br />
            <button className="formbtn">Submit</button>
        </form>
    )

}