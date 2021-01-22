import React, { Component } from "react";
import * as emailjs from 'emailjs-com';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            neterrdanger: false,
            success: false,
            fielderr: false
        }
    }

    render() {
        if(window.location.pathname === '/contact') {
            require('./Contact.css')
        }
        const data = {
            name: '',
            email: '',
            message: '',
        }
        const formSubmit = (event) => {
            event.preventDefault()
            this.setState({ neterrdanger: false, success: false, fielderr: false })
            if(data.name === '' || data.email === '' || data.message === '') {
                this.setState({ fielderr: true })
            } else {
            let templateParams = {
                from_name: 'InteliCards',
                to_name: 'admin@myintelicard.com',
                name: data.name,
                email: data.email,
                message: data.message
            }
            console.log('doneone')
            emailjs.send(
            'main',
            'contact_form',
            templateParams,
            'user_9AYveTWrdi9cEyTK0QLJK'
            )
            .then(res => {
                if(res === 'POST https://api.emailjs.com/api/v1.0/email/send net::ERR_INTERNET_DISCONNECTED'){
                    console.log(res + ' neterr')
                    this.setState({ neterrdanger: true })
                } if(res.status === 200) {
                    console.log('success')
                    console.log(res)
                    this.setState({ success: true })
                }
            })
            .catch(e => {
                this.setState({ danger: true })
                console.log(e)
            })
            }
        }
        const changeName = (event) => {
            data.name = event.target.value
        }
        const email = (event) => {
            data.email = event.target.value
        }
        const message = (event) => {
            data.message = event.target.value
        }
        return (
            <main>
                <title>Contact Us</title>
                <form className="form">
                    <h2>Contact Us</h2>
                    <input onChange={(event) => changeName(event)} type="text" placeholder='Name' required/><br/>
                    <input onChange={(event) => email(event)} type="text" placeholder='Email / Phone' required/><br/>
                    <textarea onChange={(event) => message(event)} placeholder='Message'></textarea><br/>
                    <button type="submit" className='btn btn-outline-success' onClick={(event) => formSubmit(event)}>Submit</button>
                </form>
            </main>
        );
    }
}

export default Contact;