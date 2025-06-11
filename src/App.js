import './style.scss';
import Header from './components/header/Header';
import Research from './components/research/Research';
import Cards from './components/cards/Cards';
import { useState } from 'react';

const App = () => {

    const [researchValue, setResearchValue] = useState(null);

    const handleResearchValue = (value) => {
        setResearchValue(value);
    };

    return (
        <div className='App'>
            <Header />
            <Research value={handleResearchValue} />
            <Cards researchValue={researchValue} />
        </div>
    );
};

export default App;