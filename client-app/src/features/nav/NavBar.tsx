//import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import axios from 'axios';


export default function NavBar() {
    const [isAuthenticated, setAuthenticatedStatus] = useState();
  
    useEffect(() => {
        axios.get('/.auth/me').then(response=>{setAuthenticatedStatus(response.data.clientPrincipal)});
       
    }, [])

  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={NavLink} to='/' exact header>

            {/* <img src="/assets/eight20logo.png" alt="logo" style={{marginRight:'10px',width:'100px'}}/> */}
            ANZEND
        </Menu.Item>
        <Menu.Item as={NavLink} to='/EmployeeDash' name="Employee Dashboard" />
        <Menu.Item as={NavLink} to='/EmployeeCommu' name="Employee Communications" />
        <Menu.Item as={NavLink} to='/AdminDashboard' name="Admin Dashboard" />
        <Menu.Item name="friends" >
        {isAuthenticated? <Button onClick={()=>{window.location.href = "/.auth/logout";}}  negative content='Logout'/>:<Button  onClick={()=>{window.location.href = "/.auth/login/aad";}}   positive content='Login'/>}
        </Menu.Item>
      </Container>
    </Menu>
  );
};

