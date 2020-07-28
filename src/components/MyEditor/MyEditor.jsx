import React, { useRef, useState, useEffect } from "react";

import { ControlledEditor } from "@monaco-editor/react";
export default function MyEditor() {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const editorRef = useRef(null);

  function handleEditorDidMount(_, editor) {
    setIsEditorReady(true);
    editorRef.current = editor;
  }

  /**
   * This useEffect is being used as an Initialiser for the Editor.
   * The steps taken are:
   *
   * 1. Attach a listener to the editor.
   */
  useEffect(() => {
    if (editorRef && isEditorReady) {
      listenToValueChange();
    }
  }, [editorRef, isEditorReady]);

  function listenToValueChange() {
    editorRef.current.onDidChangeModelContent((ev) => {
      console.log(editorRef.current.getValue());
    });
  }

  return (
    <>
      <ControlledEditor
        height="95vh"
        language="javascript"
        value={"// write your code here"}
        editorDidMount={handleEditorDidMount}
        theme={"dark"}
        options={{
          minimap: {
            enabled: false,
          },
        }}
      />
    </>
  );
}
