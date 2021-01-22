import React, { Component } from 'react';
import * as emailjs from 'emailjs-com'
import './Form.css';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            neterrdanger: false,
            success: false,
            fielderr: false
        }
    }
    render() {
        const { card } = this.props;
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
            to_name: card.email,
            name: data.name,
            email: data.email,
            message: data.message,
            ownermail: card.email
            }
            emailjs.send(
                'gmail',
                'enquiry_form',
                templateParams,
                'user_l1ZAyk5A2WggSkeXCgvUn'
            )
            .then(res => {
                if(res === 'POST https://api.emailjs.com/api/v1.0/email/send net::ERR_INTERNET_DISCONNECTED'){
                    console.log(res)
                    this.setState({ neterrdanger: true })
                } if(res.status === 200) {
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
        return(
            <div>
                <form>
                    <div className={this.state.neterrdanger ? "alert alert-danger alert-dismissible fade show" : "d-none"} role="alert" id='error'>
                        Please Check your internet and try again.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className={this.state.fielderr ? "alert alert-danger alert-dismissible fade show" : "d-none"} role="alert" id='error'>
                        Please fill all the fields.
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className={this.state.success ? "alert alert-success alert-dismissible fade show" : "d-none"} role="alert">
                        Success! Your message is sent!
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <h1 style={{ "color": "white" }}>Enquire Now</h1>
                    <div className="app-form-group">
                        <input onChange={(event) => changeName(event)} className="app-form-control" placeholder="NAME" />
                    </div>
                    <div className="app-form-group">
                        <input onChange={(event) => email(event)} className="app-form-control" placeholder="PHONE NO." />
                    </div>
                    <div className="app-form-group message">
                        <input onChange={(event) => message(event)} className="app-form-control" placeholder="MESSAGE" />
                    </div>
                    <div className="app-form-group buttons">
                        <button style={{ "color": "white", "border": "none" }} className='btn btn-primary glow-on-hover' onClick={(event) => formSubmit(event)}>SEND</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;