import logo from './logo.svg';
import './App.css';

import QuestionTemplate from './Components/QuestionTemplate';
import LegalTemplate from './Components/LegalAgreementTemplate/LegalTemplate';

function App() {
  return (
    <div style={{ margin: '25px' }}>
      {/* <QuestionTemplate /> */}
      <LegalTemplate/>
    </div>
  );
}

export default App;
