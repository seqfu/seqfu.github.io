function insertAfterScript (e) {
  let curScriptElement = document.currentScript;

  // See https://stackoverflow.com/questions/4793604/how-to-insert-an-element-after-another-element-in-javascript-without-using-a-lib
  curScriptElement.parentNode.insertBefore(e, curScriptElement.nextSibling);
}
