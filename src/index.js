export default function () {
  /*global window, global */
  if (typeof window !== 'undefined') {
    return window.document;
  } else if (typeof global !== 'undefined') {
    return global.document;
  }
}
