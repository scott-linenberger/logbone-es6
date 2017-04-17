/** Class for handling undefined  */
export default class UndefinedException {
  /**
   * Constructs an object with a message stating the variable is undefined.
   * @param {string } variableName - name of the variable that is undefined
   */
  constructor(variableName) {
    this.variableName = variableName;
    this.message = `${variableName} is undefined: ${variableName} cannot be undefined!`;
  }
}
