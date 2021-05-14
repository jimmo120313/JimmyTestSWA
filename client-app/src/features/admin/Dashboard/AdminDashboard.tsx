import React, { useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { Employee } from '../../../app/models/Employee';
import EmployeeList from './EmployeeList';
import axios from 'axios';

// interface Props {
//     // selectedEmployee: Employee | undefined;
//     // selectEmployee: (id: string) => void;
//     // // cancelSelectActivity: () => void;
//     // // editMode: boolean;
//     // // openForm: (id: string) => void;
//     // // closeForm: () => void;
//     // // createOrEdit: (activity: Activity) => void;
//     // deleteEmployee: (id: string) => void;
// }

export default function AdminDashboard() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [isAuthenticated, setAuthenticatedStatus] = useState();
  
    useEffect(() => {
        axios.get('/.auth/me').then(response=>{setAuthenticatedStatus(response.data.clientPrincipal)});
        debugger;
        axios.get<Employee[]>('/api/employees').then(response => {
        setEmployees(response.data);
       });
       
    }, [])
    
    if (isAuthenticated) {
        return (
            <React.Fragment>
            <h1>Employee List</h1>
                 <Grid>
                     <Grid.Column width='10'>
                         <EmployeeList employees={employees} 
                             // selectEmployee={selectEmployee} 
                             // deleteEmployee={deleteEmployee}
                         />
                     </Grid.Column>
                     {/* <Grid.Column width='6'>
                         {selectedActivity && !editMode &&
                         <ActivityDetails 
                             activity={selectedActivity} 
                             cancelSelectActivity={cancelSelectActivity}
                             openForm={openForm} 
                         />}
                         {editMode &&
                         <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} />}
                     </Grid.Column> */}
                 </Grid>
                 </React.Fragment>
                )
    }else{
                return(
                    <h2> Please <a href=".auth/login/aad?post_login_redirect_uri=/AdminDashboard">Log in</a> before accessing Admin Dashboard</h2>
                )
    }
}