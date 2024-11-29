import React, {useState } from "react";

interface FormData {
    name:string,
    email:string,
    age:number
}

const FormUseState: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name:"",
        email:"",
        age:0
    });

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        
        const {name, value} = e.target;
        
        setFormData(prevState => ({
            ...prevState,
            [name] : name === "age" ? parseInt(value) || 0 : value
        }))
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted',formData 
            
        )
    };

    return (
        <div>
            <h2>Usestate with a object as parameter</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}/>
                </label>
                <br/>
                <label>Email:
                    <input
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}/>
                </label>
                <br/>
                <label>Age:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}/>
                </label>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default FormUseState;
