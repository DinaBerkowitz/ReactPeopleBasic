import React from "react";

class PersonRow extends React.Component { 
    render() {
        return this.fillRows();
    }
   
    fillRows = () => {
        return   this.props.people.map(p => 
         <tr className={this.TableLineDesign(p.age)}>
             <td>{p.firstName}</td>
             <td>{p.lastName}</td>
             <td>{p.age}</td>
         </tr>)
     }
     
     TableLineDesign = (age) => {
         if (age >= 65) {
             return "table-danger";
         }
         return '';
     }

    
}

export default PersonRow;