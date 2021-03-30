import React, { Component } from 'react'
import { Select, Input, message, Upload, Button, Checkbox } from 'antd';
import { CloudUploadOutlined } from "@ant-design/icons";
import './SingleSelect.css';


const { Option } = Select;
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
export class SingleSelect extends Component {
    render() {
        return (
            <div className="single-select">
                <Select defaultValue="cardSelect" style={{ width: 180 }} placeholder='UI display type'>
                    <Option value="cardSelect">Card Select</Option>
                    <Option value="dropDown">Drop down</Option>
                    <Option value="radioButton">Radio Button</Option>
                </Select>
                <br />
                <Input className="cardname" placeholder={this.props.name} />
                <div className="cardType">
                    <Select style={{ width: 180 }} placeholder='Type'>
                        <Option value="flexibleLength">Flexible Length</Option>
                        <Option value="fixedLength">Fixed Length</Option>
                    </Select>
                    <Upload {...props}>
                        <Button icon={<CloudUploadOutlined />}>Upload icon (SVG)</Button>
                    </Upload>
                    <Select style={{ width: 180 }} placeholder='Position'>
                        <Option value="before">Before text</Option>
                        <Option value="after">After text</Option>
                    </Select>
                </div>
                <div className="cardColor">
                    <span>On Selection</span>
                    <Input className="cardColor-code" placeholder="Card Color" />
                    <Input className="cardColor-code" placeholder="Icon Color" />
                    <Select style={{ width: 190 }} placeholder='Image and Comment'>
                        <Option value="mandatory">Both mandatory </Option>
                        <Option value="optional">Both optional </Option>
                        <Option value="imagemandatory">Only image mandatory</Option>
                        <Option value="commentMandatory">Only comment mandatory </Option>
                    </Select>
                </div>
                <div className="responeValidation">
                    <Checkbox checked={false}>Need response validation</Checkbox>
                </div>
            </div>
        )
    }
}

export default SingleSelect
