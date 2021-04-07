import React, { Component } from 'react';
import { Select } from 'antd';

export default class OtherInformation extends Component {

 
     render(){
        const { Option } = Select;
        function onChange(value) {
            console.log(`selected ${value}`);
          }
          
          function onBlur() {
            console.log('blur');
          }
          
          function onFocus() {
            console.log('focus');
          }
          
          function onSearch(val) {
            console.log('search:', val);
          }
         return(
             <div style={{marginTop: 30}}>
                 <h3>Other Information</h3>
                 <div style={{display:'flex', justifyContent:'space-between'}}>
     <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
  >
    <Option value="jack">a</Option>
    <Option value="lucy">b</Option>
    <Option value="tom">c</Option>
  </Select>
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">a</Option>
    <Option value="lucy">b</Option>
    <Option value="tom">c</Option>
  </Select>
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">a</Option>
    <Option value="lucy">b</Option>
    <Option value="tom">c</Option>
  </Select>,
  </div> 
             </div>
         )
     }
}