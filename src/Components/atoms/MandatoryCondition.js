import React, { Component } from 'react';
import { Radio } from 'antd';

export default class MandatoryCondition extends Component {
     render(){
         return(
             <div style={{marginTop: 30}}>
             <div>
                 <h3>Mandatory Condition</h3>
             </div>
             <div>
                   <Radio.Group>
      <Radio value={1}>All time Visible</Radio>
      <Radio value={2}>Non-Mandatory</Radio>
      <Radio value={3}>Conditional Visible</Radio>
    </Radio.Group>
             </div>
             </div>
         )
     }
}