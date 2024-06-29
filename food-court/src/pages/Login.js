import React, { useState } from 'react';
import './Login.css'; // Assuming you have a CSS file for styling
import faceBook from '../img/Login/facebook-image.jpg'
import google from '../img/Login/google-image.jpg'
import sahyadri from '../img/Login/sahyadri-image.jpg'
import twitter from '../img/Login/twitter-image.jpg'

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <>
        <div className="Login_signup">
            {isLogin ? (
                <div className="container">
                    <div className="login-container">
                        <h2>Login Form</h2>
                        <form>
                            <div className="role-switch">
                                <label>
                                    <input type="radio" name="role" value="student" defaultChecked /> Student
                                </label>
                                <label>
                                    <input type="radio" name="role" value="teacher" /> Teacher
                                </label>
                            </div>
                            <div className="input-group">
                                <input type="text" id="username" name="username" placeholder="Username" required />
                            </div>
                            <br />
                            <div className="input-group">
                                <input type="password" id="password" name="password" placeholder="Password" required />
                            </div>
                            <div className="forgot-password">
                                <a href="#">Forgot password?</a>
                            </div>
                            <button type="submit" className="login-btn">Login</button>
                        </form>
                        <div className="social-login">
                            <p>Or login using</p>
                            <div className="social-icons">
                                <a href="#"><img src={faceBook} alt="Facebook" /></a>
                                <a href="#"><img src={twitter}alt="Twitter" /></a>
                                <a href="#"><img src={google} alt="Google" /></a>
                            </div>
                        </div>
                        <p>Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Signup</a></p>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="signup-container">
                        <h2>Signup</h2>
                        <form>
                            <div className="input-group">
                                <input type="text" id="username" name="username" placeholder="Username" required />
                            </div>
                            <div className="input-group">
                                <input type="email" id="email" name="email" placeholder="Email" required />
                            </div>
                            <div className="input-group">
                                <input type="password" id="password" name="password" placeholder="Password" required />
                            </div>
                            <div className="input-group">
                                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required />
                            </div>
                            <button type="submit" className="signup-btn">Signup</button>
                        </form>
                        <div className="social-signup">
                            <p>Or already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login</a></p>
                        </div>
                    </div>
                </div>
           
            )} 
            </div>
        </>
    );
};

export default Login;
