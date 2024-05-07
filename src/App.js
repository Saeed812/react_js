import Header from './componet/Header'
import Footer from './componet/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
   
   <div>
        <Header/>
        <main>
          <Container className='py-3'> 
            
            <HomeScreen/>
            
          </Container>
        </main>
        <Footer/>
   </div>
  
  );
}

export default App;
