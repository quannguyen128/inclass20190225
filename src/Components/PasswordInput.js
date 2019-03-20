import React, {Component} from 'react';
class PasswordInput extends Component {

    //constructor
    constructor(props){
        super(props);
        //this.state = {password: ''}; 

        this.handlePasswordChange = this.handlePasswordChange.bind(this);

    }

    /* this event handler simply "lifts" state to the parent component */
    handlePasswordChange(event){
        const password = event.target.value;
        this.props.onPasswordChange(password);
    }

    render() {

        const password = this.props.password;

        return (
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input className={this.props.passwordInputValidationClass}  
                       id="exampleInputPassword1" 
                       onChange={this.handlePasswordChange}                                              
                       placeholder="Your password"
                       type="password"
                       value={password} 
                       required />
                <div className="invalid-feedback">
                    {this.props.passwordErrorMessage}
                </div>                         
            </div>            
        );
    };
}

export default PasswordInput;