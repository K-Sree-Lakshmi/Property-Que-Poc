import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Popover, Tooltip} from 'antd'
import ReactTooltip from 'react-tooltip'
class RichTextEditor extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { content: '' };
      }
    

  handleEditorChange = (content, editor) => {
    this.setState({ content });
    return (
        <div>
             <Tooltip title="prompt text">
                 <span>
                     {content}
                   </span>
                 </Tooltip>
               
        </div>
    )
  }

  handleSelectionChange = () =>{

         <div style> 
              <Tooltip title="prompt text">
                  <span>
                      {this.state.content}
                    </span>
                  </Tooltip>
                
         </div>
     
  }

  render() {
    return (
      <Editor
      apiKey='k9nsatht95qrv78muc892yy8gbhuwc8pfc77db7nyyrqpvpd'
        initialValue={"Sample Text"}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount  ',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help',
        quickbars_selection_toolbar: 
            'bold italic | quicklink h2 h3 blockquote quickimage quicktable | Add Deviation',
        }}
        onEditorChange={this.handleEditorChange}
        onSelectionChange={this.handleSelectionChange}
      />
    );
  }
}

export default RichTextEditor;
