/* 
good guidance for this component:
https://www.skptricks.com/2018/06/simple-form-validation-in-reactjs-example.html
*/
import React, {Component} from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
class BasicForm extends Component {

    //constructor
    constructor(props){
        super(props);

        //wire up event handlers
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleEmailOnFocus = this.handleEmailOnFocus.bind(this);
        this.handlePasswordOnFocus = this.handlePasswordOnFocus.bind(this);        

        this.state = {
            email: '',
            password: '',
            error_email: '',
            error_password: '',
            validation_form_class: 'needs-validation',   
            validation_input_email_class: 'form-control',
            validation_input_password_class: 'form-control',            
        }
    };

    /* event handler for email */
    handleEmailChange(email){
        this.setState( () => {
                return {
                    email
                }
            }
        );        
    };

    //reset form
    handleEmailOnFocus(){

        let validation_form_class =  this.state.validation_form_class;
        validation_form_class = 'needs-validation';

        let validation_input_email_class = this.state.validation_input_email_class;
        let validation_input_password_class = this.state.validation_input_password_class;
        validation_input_email_class = validation_input_password_class = 'form-control';

        this.setState( () => {
            return{
                validation_form_class,
                validation_input_email_class,
                validation_input_password_class
            }
        });
    }

    /* event handler for password */    
    handlePasswordChange(password){
        this.setState( () => {
            return {
                password
            }
        });
    };

    handlePasswordOnFocus(){
        this.handleEmailOnFocus();
    }

    handleFormSubmit(event){
        //cut off default browser behavior
        event.preventDefault();        

        console.log('component state', JSON.stringify(this.state));
        console.log("you submitted the form " + event.target.type);
        this.setstate.validation_form_class += " was-validated";
        this.validateForm();
    }

    validateForm(){

        //grab the state values
        let email = this.state.email;
        let password = this.state.password;
        let formIsValid = true;
        let error_email =  this.state.error_email;
        let error_password = this.state.error_password;
        let validation_input_email_class = this.state.validation_input_email_class;
        let validation_input_password_class = this.state.validation_input_password_class;        

        //check if email was entered
        if(!email){
            formIsValid = false;
            error_email = "You must provide an email address";
            validation_input_email_class = "form-control is-invalid";
        }else{
            error_email = "";
        }

        //check if email is valid
        // https://stackoverflow.com/questions/39356826/how-to-check-if-it-a-text-input-has-a-valid-email-format-in-reactjs
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if ( pattern.test(email) ) {
            console.log("EMAIL IS GOOD");
        }
        else {
            // invalid email, maybe show an error to the user.
            let error_email_message = "You must provide a valid email address";
            error_email = error_email_message;
            validation_input_email_class = "form-control is-invalid"; 
            console.log(error_email_message);
        }
        
        //check if password was entered
        if(!password){
            formIsValid = false;
            error_password = "You must provide a password";
            validation_input_password_class = "form-control is-invalid";
        }else{
            error_password = "";
        }

        //check if email is valid
        if(password.length >= 8){
            console.log("PASSWORD IS GOOD");
        }else{
            // invalid password, maybe show an error to the user.
            let error_password_message = "You must provide a strong password that meets length requirements";
            error_password = error_password_message;
            validation_input_password_class = "form-control is-invalid"; 
            console.log(error_password_message);
        }

        //update error messages
        this.setState( () => {
                return {
                    error_email,
                    error_password,
                    validation_input_email_class,
                    validation_input_password_class,
                };
            }
        );
    };

    render() {
        return (
            <div className="container">
                <form className={this.state.validation_form_class} onSubmit={this.handleFormSubmit} noValidate >

                    <EmailInput onEmailChange={this.handleEmailChange}
                                onEmailFocus={this.handleEmailOnFocus}
                                emailInputValidationClass={this.state.validation_input_email_class}
                                emailErrorMessage={this.state.error_email} />

                    <PasswordInput onPasswordChange={this.handlePasswordChange} 
                                   passwordInputValidationClass={this.state.validation_input_password_class}
                                   passwordErrorMessage={this.state.error_password} />

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    };
}

export default BasicForm;