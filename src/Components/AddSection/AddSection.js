import React, { Component } from 'react';
import { Radio } from 'antd';
import VisibilityCondition from '../atoms/VisibilityCondition'
import MandatoryCondition from '../atoms/MandatoryCondition';
import OtherInformation from '../atoms/OtherInformation';
export default class AddGroup extends Component {
     render(){
         return(
             <div>
      <VisibilityCondition/>
      <MandatoryCondition/>
      </div>
         )
     }
}