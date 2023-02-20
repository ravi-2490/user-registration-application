import React,{useState} from "react";
import { Button } from "react-bootstrap";
import "./Form.css";

const Form = ()=>{
    const [userDetails, setUserDetails] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    const handleChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setUserDetails({...userDetails,[name]:value});
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        if(userDetails.password!==userDetails.confirmPassword){
            alert("password and confirm password does not match.");
            setUserDetails({
                name:userDetails.name,
                email:userDetails.email,
                password:"",
                confirmPassword:"",
            })
        }else{
            console.log(userDetails);
            setUserDetails({
                name:"",
                email:"",
                password:"",
                confirmPassword:"",
            })
        }
    };

    return (
        <div className="mainContainer">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={userDetails.name}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={userDetails.email}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={userDetails.password}
                />

                <label>Confirm password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    value={userDetails.confirmPassword}
                />

                <Button
                    type="submit"
                >Submit</Button>
            </form>
        </div>
    )
};

export default Form;