import React, { Component } from 'react'
import { Input, Select, Checkbox } from 'antd';
import { findByLabelText } from '@testing-library/dom';


export default class BasicInformation extends Component {
    render(){
        const {screenKey} = this.props;
        return(
            <div style={{display:'flex', flexDirection:'column'}}>
                <h3>Basic Information</h3>
                <div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <Input style={{width:'35%' }} placeholder={`${screenKey} Name`}/>
                <Input style={{width:'60%'}} placeholder={`${screenKey} Helper Text`}/>
                </div>
                <div style={{display:'flex', marginTop:20}}>
                <Input style={{width:'35%' }} placeholder={`${screenKey} Display Order`} />
                <Input style={{width:'35%', marginLeft:40}} placeholder={`${screenKey} Status`} />
                </div>
                </div>
            </div>
        )
    }
}