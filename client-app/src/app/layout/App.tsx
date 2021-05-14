import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import AdminDashboard from '../../features/admin/Dashboard/AdminDashboard';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import './styles.css';

function App() {
  

  
  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
          <Route exact path='/' component={HomePage} />
          <Route path='/AdminDashboard' component={AdminDashboard} />
      </Container>

    </>
  );
}

export default App;
