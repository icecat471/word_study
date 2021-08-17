import { url } from 'inspector';
import react from 'react';
import homeImage from './home.jpg';

const Home: React.FC = () => {
    return (
        <img 
            src={homeImage} 
            alt="home image" 
            width="100%"
            height="100%"
        /> 
    );
}

export default Home;