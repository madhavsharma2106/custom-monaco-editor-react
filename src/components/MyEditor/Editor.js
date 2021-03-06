import { logger } from "../../Logger";

export class Editor {
  constructor(editor) {
    this.editor = editor.current;
  }

  _defaultLogger(value) {
    console.log(value);
  }

  /**
   * Listens to events of cursor selection.
   */
  onChangeCursorSelection(cb = this._defaultLogger) {
    this.editor.onDidChangeCursorSelection(cb);
  }

  /**
   * Listens to change in cursor position
   */
  onChangeCursorPosition(cb = this._defaultLogger) {
    this.editor.onDidChangeCursorPosition(cb);
  }

  /**
   * Listens to value change in the editor
   */
  onValueChange(cb = this._defaultLogger) {
    this.editor.onDidChangeModelContent(cb);
  }

  /**
   * Get value
   *
   * @return {string} current value of the editor
   */
  getValue() {
    console.log(this.editor.getValue());
    return this.editor.getValue();
  }

  /**
   * Takes value and replaces the editor with it.
   * @param {string} value
   */

  setValue(value) {
    console.log(this.editor.setValue(value));
    logger.warn("This is a warning");
  }

  /**
   *  Sets the cursor position to the specified position
   * @param {{column: number, lineNumber: number}} position
   */
  setPosition(position) {
    this.editor.setPosition(position);
  }

  getOptions() {
    console.log(this.editor.getOptions());
  }

  setMultipleSelections(selections) {
    this.editor.setSelections(selections);
  }

  setSelectionsWithHighlight(selections) {
    this.editor.deltaDecorations(
      [],
      [
        {
          range: {
            endColumn: 4,
            startColumn: 0,
            endLineNumber: 4,
            startLineNumber: 0,
          },
          options: {
            className: "blue-background",
            hoverMessage: { value: "This message is on hover" },
          },
        },
      ]
    );
  }

  /**
   * Adding new cursors
   */
  addNewCursor() {
    const position = [
      {
        range: {
          endColumn: 4,
          startColumn: 4,
          endLineNumber: 2,
          startLineNumber: 2,
        },
        options: {
          className: "blue-cursor",
        },
      },
      {
        range: {
          endColumn: 5,
          startColumn: 5,
          endLineNumber: 3,
          startLineNumber: 3,
        },
        options: {
          className: "blue-cursor",
        },
      },
    ];

    this.editor.deltaDecorations([], position);
  }

  /**
   * Inserts text at the cursor position
   */
  insertAtCursorPosition(text) {
    this.editor.trigger("keyboard", "type", {
      text,
    });
  }
}
