import React, { Component } from 'react'
import CKEditor from 'ckeditor4-react';

export class LegalTemplate extends Component {
    editorData(e){
        console.log(e)
        console.log(e.editor.getData())
    }
    render() {
        return (
            <div>
                <CKEditor data="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>"
                    onChange={(e) => this.editorData(e)} />
            </div>
        )
    }
}

export default LegalTemplate
