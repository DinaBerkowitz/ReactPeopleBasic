// textboxes and buttons

import React from 'react'

class PersonForm extends React.Component{
    render(){
        return(
            <div className='row'>
                <div className='col-md-3 offset md-2'>
                    <input type='text' 
                    placeholder="First Name" 
                    className="form-control" 
                    onChange={this.props.firstNameChanged} 
                    value={this.props.firstName}
                    />
                </div>
                <div className="col-md-3">
                        <input type="text" 
                        placeholder="Last Name" 
                        className="form-control" 
                        onChange={this.props.lastNameChanged} 
                        value={this.props.lastName}
                        />
                    </div>
                    <div className="col-md-3">
                        <input type="text" 
                        placeholder="Age" 
                        className="form-control" 
                        onChange={this.props.ageChanged} 
                        value={this.props.age}
                        />
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-primary w-100" onClick={this.props.onAddClick}>Add</button>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-warning w-100" onClick={this.props.onClearClick}>Clear</button>
                    </div>
            </div>
        )
    }

}
export default PersonForm;