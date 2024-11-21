import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import "./RegStyle.css"

const Register = () => {

    const [passShow, setPassShow] = useState(false);
    const [cpassShow, setCPassShow] = useState(false);

    const [inpval, setInpval] = useState({
        fname: "",
        email: "",
        password: "",
        cpassword: "",
    })
    const setVal = (e) => {
        // console.log(e.target.value);
        const {name,value} = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    };

    // const addUserdata = async(e) => {
    //     e.preventDefault();
    //     const { fname, email, password, cpassword } = inpval;
        
    //     if(fname === ""){
    //         alert("Name is Required");
    //     }else if(email === ""){
    //         alert("Email is Required");
    //     }else if(!email.includes("@")){
    //         alert("Please enter Valid Email");
    //     }else if(password === ""){
    //         alert("Password is Required");
    //     }else if(password.length < 6){
    //         alert("password must be 6 char");
    //     }else if(cpassword === ""){
    //         alert("Confirm Password is Required");
    //     }else if(cpassword.length < 6){
    //         alert("Confirm password must be 6 char");
    //     }else if(password !== cpassword){
    //         alert("Password and Confirm Password must be same");
    //     }else{
    //         //alert("User Registration Successfully Done");

    //         const data = await fetch("/register",{
    //             method:"POST",
    //             headers:{
    //                 "Content-Type":"application/json"
    //             },
    //             body:JSON.stringify({
    //                 fname, email, password, cpassword
    //             })
    //         });

    //         const res =  await data.json();
    //         //console.log(res);
    //         if(res.status === 201){
    //             alert("User Successfully registerd");
    //             setInpval({...inpval,fname:"",email:"",password:"",cpassword:""})
    //         }
    //     }
    // }
    

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Sign Up</h1>
                        <p style={{ textAlign: "center" }}>We are glad that you will be using Project Cloud to manage <br />
                            your tasks! We hope that you will get like it.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="fname">Name</label>
                            <input type="text" onChange={setVal} name="fname" value={inpval.fname} id="fname" placeholder='Enter Your Name' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={setVal} autoComplete="username" name="email" value={inpval.email} id="email" placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input type={!passShow ? "password" : "text"} onChange={setVal} autoComplete="new-password" name="password" value={inpval.password} id="password" placeholder='Enter Your password' />
                                <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <div className="form_input">
                            <label htmlFor="password">Confirm Password</label>
                            <div className="two">
                                <input type={!cpassShow ? "password" : "text"} onChange={setVal} autoComplete="new-password" value={inpval.cpassword} name="cpassword" id="cpassword" placeholder='Confirm password' />
                                <div className="showpass" onClick={() => setCPassShow(!cpassShow)}>
                                    {!cpassShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className='btn'>Sign Up</button>
                        <p>Already have an account? <NavLink to="/login">Log In</NavLink></p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Register;