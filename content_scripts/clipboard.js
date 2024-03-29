var Clipboard = {
  store: '',
  copy: function(text, store) {
    if (!store) {
      this.store = text;
    } else {
      this.store += (this.store.length ? '\n' : '') + text;
    }
    RUNTIME('copy', {text: this.store});
  },
  paste: function(tabbed) {
    var engineUrl = Complete.getEngine(settings.defaultengine);
    engineUrl = engineUrl ? engineUrl.requestUrl :
      Complete.getEngine('google').requestUrl;
    RUNTIME(tabbed ? 'openPasteTab' : 'openPaste', {
      engineUrl: engineUrl
    });
  },
  get: function() {
    var t = document.createElement("textarea");
    document.body.appendChild(t);
    t.focus();
    document.execCommand('Paste');
    var text = t.value;
    document.body.removeChild(t);
    return text;
  }
};
