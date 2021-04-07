import React, { Component } from 'react'
import ReactQuill from 'react-quill';
import { Button, Tooltip, message } from 'antd';
import './Quill.css';

export class Quil extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '', saved: '', visible: false } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
        this.selectedChange = this.selectedChange.bind(this)

    }

    handleChange(content, delta, source, editor) {
        // console.log(content, 'content')
        // console.log(delta,'delta')
        // console.log(source,'source')
        // console.log(editor,'editor')
        // console.log(value, 'hi')
        this.setState({ text: content })
    }

    selectedChange(range, source, editor) {
        console.log(range, 'range')
        console.log(source, 'source')
        console.log(editor.getContents().ops[0].insert, 'editor')
        this.setState({ saved: editor.getContents().ops[0].insert })
        // if (range.index > 0 && source === 'user') {
        if (source === 'user') {

            console.log('yo')
            this.setState({ visible: !this.state.visible })
        }

    }

    render() {
        const modules = {
            toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image'],
                ['clean']
            ],
        }

        const formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ]
        return (
            <div className='quil__editor-container'>
                <div>
                    {/* <ReactQuill
                        style={{
                            width: "600px",
                            height: "500px"
                        }}
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        value={this.state.text}
                        onChange={this.handleChange}
                        onChangeSelection={this.selectedChange}
                    /> */}
                    <ReactQuill
                        style={{
                            width: "600px",
                            height: "500px",
                            border: '1px solid #ccc'
                        }}
                        theme="bubble"
                        modules={modules}
                        value={this.state.text}
                        onChange={this.handleChange}
                    onChangeSelection={this.selectedChange}
                    />
                </div>
                <div className="quil-tooltip">
                    {this.state.visible ?
                        <Tooltip placement="top" title="Add deviation">
                            <Button type="primary" shape="circle" onClick={() => alert('hey')}>
                                A
                        </Button>
                        </Tooltip>
                        : null}
                </div>
            </div>
        )
    }
}

export default Quil
