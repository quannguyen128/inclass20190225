import React, {Component} from 'react';
class ZipCodeInput extends Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_zipcode: ''}; 

        this.handleZipcodeChange = this.handleZipcodeChange.bind(this);

    }

    handleZipcodeChange(event){
        const delivery_zipcode = event.target.value;
        this.setState( () => {
                return {
                    delivery_zipcode
                }
            }
        );

        const zip = this.state.delivery_zipcode;
    }

    render() {
        return (
            <div className="form-group">
                <p>{this.props.specialcode}</p>
                <input className="form-control" 
                       id="zipcodeInput" 
                       onChange={this.handleZipcodeChange}                       
                       placeholder="Delivery zip code" 
                       type="input"
                       value={this.state.delivery_zipcode}  />
            </div>
        );
    };
}

export default ZipCodeInput;