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
}
