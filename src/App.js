import { MOCK_DATA } from './stub/data';
import { Section } from './components/organism/Section';

function App() {
  return (
    <div className='row'>
      {MOCK_DATA.map((props, index) => <Section key={index} {...props}/>)}
    </div>
  );
}

export default App;