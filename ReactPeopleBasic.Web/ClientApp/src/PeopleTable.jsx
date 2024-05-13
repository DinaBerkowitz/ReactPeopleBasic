import React from "react";

import PersonForm from "./PersonForm"
import PersonRow from "./PersonRow";

class PeopleTable extends React.Component {

    state = {

        firstName: "",
        lastName: "",
        age: "",
        people: []
    }


    firstNameChanged = e => {
        this.setState({ firstName: e.target.value });
    }

    lastNameChanged = e => {
        this.setState({ lastName: e.target.value });
    }

    ageChanged = e => {
        this.setState({ age: e.target.value });
    }

    onAddClick = () => {
        const Person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }
        const copyOf = [...this.state.people, Person];
        this.setState({ people: copyOf, firstName: '', lastName: '', age: '' });

    }

    onClearClick = () => {
        this.setState({ people: [], firstName: '', lastName: '', age: '' });
    }

    fillTable = () => {
        if (this.state.people.length === 0) {
            return <h1>No people Added to your list yet...</h1>;
        }
        return (

            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <PersonRow people={this.state.people} />
                </tbody>
            </table>

        );
    }

    render() {
        return (
            <div className='Container'>
                <PersonForm

                    firstName={this.state.firstName}
                    firstNameChanged={this.firstNameChanged}
                    lastName={this.state.lastName}
                    lastNameChanged={this.lastNameChanged}
                    age={this.state.age}
                    ageChanged={this.ageChanged}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                />
                <div className="container mt-3">
                    <div className="col-md-12">
                        {this.fillTable()}
                    </div>
                </div>
            </div>
        );

    }
}

export default PeopleTable;



