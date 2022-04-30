import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../register/register.css'

const Register = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        const newUser = {
            email,
            password,
        };
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    // csrf_token,
                },
            };
            const body = JSON.stringify(newUser);
            const res = await axios.post("http://127.0.0.1:8000/users/login/", body,config);
            console.log(res.data);
            navigate("/dashboard");
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <div>
            <div className="c-page c-page--signup  c-page--pwpaymentwall o-wrapper">
                <header className="c-header c-header--pwpaymentwall ">
                    <div className="o-container">
                        <Link className="c-header__logo c-logo c-logo--pwpaymentwall" to="/"></Link>
                        <div className="c-header__nav c-nav c-nav--right ">
                            <Link className="c-nav__link" to="/register">Sign up</Link></div>
                    </div>
                </header>
                <div className="c-main">
                    <div className="o-container">
                        <form className="c-form js-signup-form" id="sign_up_form" data-action="signup" onSubmit={(e) => onSubmit(e)}>
                            <div className="c-form__header">
                                <h1 className="c-form__heading">Log in to your Merchant Account</h1>
                            </div>

                            <div className="c-form__main">
                                <div className="c-form-group js-form-group">
                                    <div className="c-form-group__message-holder">
                                        <span className="c-form-group__message c-form-group__message--success"><i className="mi mi--md"></i></span>
                                        <span className="c-form-group__message c-form-group__message--error js-error"></span>
                                    </div>
                                    <input className="c-form-group__input c-input js-input" id="email" type="text" onChange={onChange}
                                        name='email'
                                        value={email}
                                        required />
                                    <label className="c-form-group__input-label" htmlFor="email">Email</label>
                                </div>
                                <div className="c-form-group c-form-group--password js-form-group">
                                    <div className="c-form-group__message-holder">
                                        <span className="c-form-group__message c-form-group__message--success"><i className="mi mi--md"></i></span>
                                        <span className="c-form-group__message c-form-group__message--error js-error"></span>
                                    </div>
                                    <input className="c-form-group__input c-input js-input js-password" id="password" type="password" onChange={onChange}
                                        name='password'
                                        value={password}
                                        required />
                                    <label className="c-form-group__input-label" htmlFor="password">Password</label>
                                    <div className="c-checklist js-checklist">
                                        <span className="c-checklist__item js-checklist-item" data-check="validate-characters">
                                            <span className="c-checklist__icon c-checklist__icon--success"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__icon c-checklist__icon--default"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__caption">Characters</span>
                                        </span>
                                        <span className="c-checklist__item js-checklist-item" data-check="validate-numbers">
                                            <span className="c-checklist__icon c-checklist__icon--success"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__icon c-checklist__icon--default"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__caption">Numbers</span>
                                        </span>
                                        <span className="c-checklist__item js-checklist-item" data-check="validate-password-length">
                                            <span className="c-checklist__icon c-checklist__icon--success"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__icon c-checklist__icon--default"><i className="mi mi--xs"></i></span>
                                            <span className="c-checklist__caption">At least 5 characters long</span>
                                        </span>
                                    </div>
                                </div>

                                <Link to="/forgot" style={{ float: "right" }}>Forgot Your Password?</Link>

                                <button className="c-form__submit c-btn c-btn--default js-submit-button" id="submit-form-button" type="submit">
                                    <span className="c-btn__caption">Log in</span>
                                    <span className="c-btn__loader"></span>
                                </button>

                                <div className="c-form__submit-notice">
                                    Don't have a Paymentwall Account? <Link className="c-link c-link--text" to="/register"> Sign up.</Link>.
                                </div>

                            </div>

                            <input type="hidden" name="data[source]" />
                            <input type="hidden" name="data[src_id]" />
                            <input type="hidden" name="mode" />
                        </form>


                    </div>
                </div>
                <footer className="c-footer">
                    <div className="o-container">
                        <div className="c-footer__sertificates"><svg className="c-footer__sertificates-item" width="112" height="42"></svg><svg className="c-footer__sertificates-item" width="114" height="42"></svg><svg className="c-footer__sertificates-item"
                            width="120" height="42"></svg></div>
                        <div className="c-footer__policies on-center"><Link to="https://www.paymentwall.com/en/privacypolicy" >Privacy Policy</Link><Link to="https://www.paymentwall.com/en/terms" >Terms of Service</Link><Link to="https://www.paymentwall.com/en/faq/infringement/485" >DMCA Policy</Link>
                            <Link to="https://www.paymentwall.com/en/cookies-policy" >Cookies Policy</Link><Link to="https://www.paymentwall.com/gdpr" >GDPR Policy</Link></div>
                        <p className="c-footer__copyright on-center">©&nbsp;2022 Paymentwall, Inc. 255 9th Street, San Francisco, CA, 94103.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Register;