import React, { useRef, useState, useEffect } from "react";

import { ControlledEditor } from "@monaco-editor/react";
import { Editor } from "./Editor";

import "./styles.css";
import { initialValue } from "../../utils";

const editorConfig = {
  options: {
    minimap: {
      enabled: false,
    },
  },
  theme: "dark",
  language: "javascript",
  height: "95vh",
  value: initialValue,
};

/**
 * TODO:
 *  [x] Get selections
 *  [x] Set Selections
 *  [x] Highlight Selections
 *  [ ] Add tooltip to selection
 *  [x] Get Value of Editor
 *  [x] Insert text at position
 *  [x] Insert Multiple Cursors
 *  [x] Highlight Cursors
 *  [ ] Add tooltip to cursors
 *  [x] Get Value Change
 */

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
    editor.addNewCursor();
  };

  useEffect(() => {
    if (editorRef && isEditorReady) {
      initialiseListeners();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorRef, isEditorReady]);

  const slections = [
    {
      selectionStartColumn: 0,
      selectionStartLineNumber: 0,
      positionLineNumber: 4,
      positionColumn: 4,
    },

    {
      selectionStartColumn: 5,
      selectionStartLineNumber: 5,
      positionLineNumber: 9,
      positionColumn: 9,
    },
  ];

  return (
    <>
      <button onClick={() => editor?.getValue()}>Get Value</button>
      <button onClick={() => editor?.insertAtCursorPosition("Yo")}>
        Insert Text
      </button>
      <button onClick={() => editor?.setPosition({ column: 5, lineNumber: 1 })}>
        Set Position
      </button>
      <button onClick={() => editor?.setMultipleSelections(slections)}>
        Set Selection
      </button>
      <button onClick={() => editor?.setSelectionsWithHighlight()}>
        Set Selection with Highlight
      </button>
      <button onClick={() => editor?.addNewCursor()}>Set New Cursor</button>
      <ControlledEditor
        editorDidMount={handleEditorDidMount}
        {...editorConfig}
      />
    </>
  );
}
