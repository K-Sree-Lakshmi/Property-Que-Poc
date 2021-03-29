import React, { Component } from 'react'
import './QuestionTemplate.css';
import { Input, Select, Checkbox } from 'antd';
import { MoreOutlined, DeleteOutlined, FileAddOutlined, PlusCircleFilled } from "@ant-design/icons";
import SingleSelect from './Single Select/SingleSelect';
import ShortText from './Short Area text/ShortText';
const { Option } = Select;

export class QuestionTemplate extends Component {
    render() {
        return (
            <div className="detail">
                <div className="questions">
                    <div className="questions__header">
                        <Input className="questions__header-que" placeholder="Question" />
                        <Select style={{ width: 180 }} placeholder='Select Que Type'>
                            <Option value="singleSelect"><PlusCircleFilled />&nbsp;Single Select</Option>
                            <Option value="multiSelect"><PlusCircleFilled /> &nbsp;Multi Select</Option>
                            <Option value="shortTextArea"><PlusCircleFilled /> &nbsp;Short text area</Option>
                            <Option value="binary"><PlusCircleFilled /> &nbsp;Binary</Option>
                            <Option value="datePicker"><PlusCircleFilled /> &nbsp;DatePicker</Option>
                        </Select>
                    </div>
                    {/* <SingleSelect /> */}
                    <ShortText/>
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


