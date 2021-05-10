import React, { useEffect, useState } from "react";
import api from "../utils/api";
import "../components/navbar/navbar.css";

function Profile() {
    const [user, setUser] = useState({});

    useEffect(() => {
        api.currentUser()
            .then((user) => {
                setUser(user.data);
            })
    }, []);

    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Mend</a>
                    <div className="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
                    <ul className="medium-horizontal align-right text-black" id="nav-menu">
                            <li className="nav-item">
                                <Link to="/dashboard" className={window.location.pathname === "/" || window.location.pathname === "/members"
                                    ? "nav-link active"
                                    : "nav-link"
                                    }
                                >Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/symptoms" className={window.location.pathname === "/symptoms" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Symptoms</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/treatments" className={window.location.pathname === "/treatment" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Treatment</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/diagnosis" className={window.location.pathname === "/diagnosis" 
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Diagnosis</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/login" className={window.location.pathname === "/diagnosis"
                                    ? "nav-link active" 
                                    : "nav-link"
                                    }
                                >Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top"> <i class="fas fa-capsules"></i> My Medi-Tracker                        
                    </a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
          <i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger active" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contect Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="profileBody">
            <div className="userName">
                Welcome {user.firstName}
            </div>
            <div className="userEmail">
                {user.email}

            </div>
            </section>
        </>

    )
}

export default Profile;