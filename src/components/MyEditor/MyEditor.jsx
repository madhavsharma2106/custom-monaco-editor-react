import React, { useRef, useState, useEffect } from "react";

import { ControlledEditor } from "@monaco-editor/react";
import { Editor } from "./Editor";

const editorConfig = {
  options: {
    minimap: {
      enabled: false,
    },
  },
  theme: "dark",
  language: "javascript",
  height: "95vh",
  value: "// Write your code here",
};

export default function MyEditor() {
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);

  function handleEditorDidMount(_, editor) {
    setIsEditorReady(true);
    editorRef.current = editor;
    setEditor(new Editor(editorRef));
  }

  const initialiseListeners = () => {
    editor.onValueChange();
  };

  useEffect(() => {
    if (editorRef && isEditorReady) {
      initialiseListeners();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorRef, isEditorReady]);

  return (
    <>
      <button onClick={() => editor?.getValue()}>Get Value</button>

      <ControlledEditor
        editorDidMount={handleEditorDidMount}
        {...editorConfig}
      />
    </>
  );
}
