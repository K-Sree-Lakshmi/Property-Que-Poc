import logo from './logo.svg';
import './App.css';

import QuestionTemplate from './Components/QuestionTemplate';
import LegalTemplate from './Components/LegalAgreementTemplate/LegalTemplate';
import Quil from './Components/LegalAgreementTemplate/Quill';

function App() {
  return (
    <div style={{ margin: '25px' }}>
      {/* <QuestionTemplate /> */}
      {/* <LegalTemplate/> */}
      <Quil/>
    </div>
  );
}

export default App;
