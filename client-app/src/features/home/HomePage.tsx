import React from 'react';
import { Container } from 'semantic-ui-react';
export default function HomePage(){
    return(
        <Container style ={{marginTop:'7em'}}>
            <h1>Home Page</h1>
            <a href="/.auth/login/aad">Azure AAD Login Link</a><br/>
            <a href="/.auth/login/github">Github Login Link</a><br/><br/>

            <a href="/.auth/me">Check login detail</a><br/>

        </Container>
    )
}