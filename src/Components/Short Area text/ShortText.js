import React, { Component } from 'react'
import { Select, Input, message, Upload, Button, Checkbox } from 'antd';
import './ShortText.css';
import '../Single Select/SingleSelect.css';


const { Option } = Select;
export class ShortText extends Component {
    render() {
        return (
            <div className="short-text">
                <div>
                    <Select defaultValue="valueUnits" style={{ width: 180 }} placeholder='UI display type'>
                        <Option value="boxText">Box text</Option>
                        <Option value="halfLine">Half line</Option>
                        <Option value="halfBox">Half box</Option>
                        <Option value="valueUnits">Value and Units</Option>
                    </Select>
                </div>
                <div className="unitsValues">
                    <div>
                        <span>Units</span>
                        <br />
                        <Input className="cardname" placeholder="unit" />
                    </div>
                    <div className="valueValidation">
                        <span>Value</span>
                        <br />
                        <br />
                        <Checkbox checked={true}>Need response validation</Checkbox>
                        <div className="valeComparison">
                            <Select defaultValue="number" style={{ width: 180 }} placeholder='Validation details'>
                                <Option value="number">Number</Option>
                                <Option value="xyz">XYZ</Option>
                            </Select>
                            <Select defaultValue="greater" style={{ width: 180 }}>
                                <Option value="greater">Greater Than</Option>
                                <Option value="lesser">Lesser Than</Option>
                            </Select>
                            <Input className="number-value" value={0} />
                        </div>
                        <Input className="errorText" value="Number needs to be greater than 0" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ShortText
