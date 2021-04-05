import React, { Component } from 'react'
import ReactQuill from 'react-quill';
import { Tooltip, message } from 'antd';

export class Quil extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '', saved:'' } // You can also pass a Quill Delta here
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
        // console.log(range, 'range')
        console.log(source, 'source')
        console.log(editor.getContents().ops[0].insert, 'editor')
        this.setState({saved: editor.getContents().ops[0].insert})
       if (range.index>0 && source === 'user') {
            console.log('yo')
            return (
                message.success(this.state.saved)
                // <Tooltip title="prompt text">
                //     {editor.getContents().ops[0].insert}
                // </Tooltip>
            )
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
            <div>

                <ReactQuill
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={this.state.text}
                    onChange={this.handleChange}
                    onChangeSelection={this.selectedChange}
                />
                <Tooltip placement="topLeft" title="text">
                    {this.state.saved}
                </Tooltip>
            </div>
        )
    }
}

export default Quil
