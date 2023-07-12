import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

export default class TextEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div
      style={{
        width: '900',
        marginLeft: '20%',
        marginTop: '50px',
        marginRight: '20%',
        padding: '10px',
        border: '5px solid #5e5873',
        borderRadius: '20px',
        
    }}
      >
        <Editor
        
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            options: ['inline', 'list', 'textAlign',  'history'],
          }}
        />
        <textarea
          style={{display: 'none'}}
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        ></textarea>
      </div>
    );
  }
}