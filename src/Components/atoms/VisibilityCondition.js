import React, { Component } from 'react';
import { Radio } from 'antd';

export default class VisibilityCondition extends Component {
     render(){
         return(
             <div style={{marginTop: 40}}>
             <div>
                 <h3>Visibility Condition</h3>
             </div>
             <div>
                   <Radio.Group>
      <Radio value={1}>All time Visible</Radio>
      <Radio value={2}>Conditional Visible</Radio>
    </Radio.Group>
             </div>
             </div>
         )
     }
}