import React, {Component} from 'react';
class EmailInput extends Component {

    //constructor
    constructor(props){
        super(props);

        //event handlers
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);

    }

    /* this event handler simply "lifts" state to the parent component */
    handleEmailChange(event){
        const email = event.target.value;
        this.props.onEmailChange(email);
    }

    handleOnFocus(event){
        event.target.valid = true;
        this.props.onEmailFocus();
    }

    render() {

        const email = this.props.email;

        return (
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input className={this.props.emailInputValidationClass} 
                       id="emailInput" 
                       onChange={this.handleEmailChange}
                       onFocus={this.handleOnFocus}
                       placeholder="Your email address" 
                       type="input"
                       value={email}  
                       required />
                <div className="invalid-feedback">
                    {this.props.emailErrorMessage}
                </div>          
            </div>
        );
    };
}

export default EmailInput;