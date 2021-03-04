import React, { Component } from 'react'


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        subject: '',
        lastname: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    submitHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            subject,
            lastname,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Por favor ingresa tu nombre";
        }
        if (email === '') {
            error.email = "Por favor ingresa tu email";
        }
        if (subject === '') {
            error.subject = "Por favor ingresa tu asunto";
        }
        if (lastname === '') {
            error.lastname = "Por favor ingresa tu apellido";
        }
        if (events === '') {
            error.events = "Selecciona tu lista de eventos";
        }
        if (notes === '') {
            error.notes = "Por favor ingresa tu mensaje";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.lastname === '' && error.subject === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                subject: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            subject,
            lastname,
            error } = this.state;

        return(
            <form onSubmit={this.submitHandler} className="form">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Nombre"/>
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input value={lastname} onChange={this.changeHandler} type="text" name="lastname" placeholder="Apellido"/>
                            <p>{error.lastname ? error.lastname : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email"/>
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={subject} type="text" name="subject" placeholder="Asunto"/>
                            <p>{error.subject ? error.subject : ''}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="message" placeholder="Mensaje"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="template-btn-s3">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

}
export default  ContactForm;