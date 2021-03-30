import React, { Component } from 'react'
import './QuestionTemplate.css';
import { Input, Select, Checkbox } from 'antd';
import { MoreOutlined, DeleteOutlined, FileAddOutlined, PlusCircleFilled } from "@ant-design/icons";
import SingleSelect from './Single Select/SingleSelect';
import ShortText from './Short Area text/ShortText';
const { Option } = Select;

const queTypes = ['SingleSelect', 'ShortText','MultipleSelect']
export class QuestionTemplate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedQue: ""
        }
    }

    handleChange(val){
        this.setState({selectedQue:val})
    }

    displayQueComponent(){
        switch(this.state.selectedQue){
            case queTypes[0]:
                // console.log('hi')
                return <SingleSelect name="Card 1" />
            case queTypes[1]:
                return  <ShortText />
            case queTypes[2]:
                return <SingleSelect name="Tag 1"/>
            default:
                return
        }
    }

    render() {
        return (
            <div className="detail">
                <div className="questions">
                    <div className="questions__header">
                        <Input className="questions__header-que" placeholder="Question" />
                        <Select onChange={(e)=>this.handleChange(e)} style={{ width: 180 }} placeholder='Select Que Type'>
                            <Option value="SingleSelect"><PlusCircleFilled /> &nbsp;Single Select</Option>
                            <Option value="MultipleSelect"><PlusCircleFilled /> &nbsp;Multiple Select</Option>
                            <Option value="ShortText"><PlusCircleFilled /> &nbsp;Short text area</Option>
                            <Option value="Binary"><PlusCircleFilled /> &nbsp;Binary</Option>
                            <Option value="DatePicker"><PlusCircleFilled /> &nbsp;DatePicker</Option>
                        </Select>
                    </div>
                    {this.displayQueComponent()}
                </div>
                <div className="variableName">
                    <Input className="variableName__input" placeholder="Variable Name" />
                    <div className="variableName__checkbox">
                        <Checkbox checked={true}>is Mandatory</Checkbox>
                        <br />
                        <br />
                        <span>CONDITIONAL MANDATORY</span>
                    </div>
                    <div className="variableName__icons">
                        <FileAddOutlined />
                        <DeleteOutlined />
                        <MoreOutlined />
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionTemplate


