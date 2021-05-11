import React, { useState } from "react";
import "./loginForm.css";
import API from "../../utils/api";

function LoginForm() {
    //establishing form values
    const [formObject, setformObject] = useState({
        email: "",
        password: ""
    })

    //targeting form values 
    function handleInputChange(event) {
        const { name, value } = event.target;
        setformObject({
            ...formObject,
            [name]: value
        })
    }

    //upon loging, use API to autheticate user
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formObject.email && formObject.password) {
            API.login({
                email: formObject.email,
                password: formObject.password
            })
                .then((res) => {
                    setformObject({
                        email: "",
                        password: ""
                    })
                    window.location.href = "/profile";
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="welcome">
            <section id="home" className="main-banner parallaxie" >
                <div className="heading">
                    <h1>Welcome to My Medi-Tracker</h1>
                    {/* <h3 className="cd-headline clip is-full-width"> */}
                        {/* <div className="btn-ber">
                            <a className="get_btn hvr-bounce-to-top" href="#">Get started</a>
                            <a className="learn_btn hvr-bounce-to-top" href="#">Learn More</a>
                        </div> */}
                    {/* </h3> */}
                </div>
            </section>


            <div className="container login">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <form className="login" onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    onChange={handleInputChange}
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password" />
                            </div>
                            <div className="btn-ber">
                                <button type="submit" className="get_btn">Login</button>
                            </div>
                        </form>
                        <h3>Not a member? <a href="/signup">Sign up here</a></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;