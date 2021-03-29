import logo from './logo.svg';
import './App.css';

import QuestionTemplate from './Components/QuestionTemplate';

function App() {
  return (
    <div style={{margin:'25px'}}>
      {/* <Input placeholder="Question" />
      <Select style={{ width: 120 }}>
      <Option value="jack"><PlusOutlined/> Jack</Option>
      <Option value="lucy"><CloseOutlined/> Lucy</Option>
      <Option value="Yiminghe"><DeleteOutlined/> yiminghe</Option>
    </Select>
    <Checkbox>Checked</Checkbox> */}
    <QuestionTemplate/>
    </div>
  );
}

export default App;
