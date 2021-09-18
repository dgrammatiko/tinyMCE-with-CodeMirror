/**
 * plugin.js
 *
 * Copyright 2013 Web Power, www.webpower.nl
 * @author Arjan Haverkamp
 */
/**
 * The plugin is modified to reuse the CodeMirror editor that's already distributed with Joomla.
 * Only TinyMCE >5 is supported.
 *
 * By Dimitrios Grammatikogiannis
 */
tinymce.PluginManager.add('highlightPlus', function(editor, url) {
  function showSourceEditor() {
    editor.focus();
    editor.selection.collapse(true);

    if (!editor.settings.codemirror) editor.settings.codemirror = {};

    // Insert caret marker
    if (editor.settings.codemirror && editor.settings.codemirror.saveCursorPosition) {
      editor.selection.setContent('<span style="display: none;" class="CmCaReT">&#x0;</span>');
    }

    let codemirrorWidth = 800;
    if (editor.settings.codemirror.width) {
      codemirrorWidth = editor.settings.codemirror.width;
    }

    let codemirrorHeight = 550;
    if (editor.settings.codemirror.height) {
      codemirrorHeight = editor.settings.codemirror.height;
    }

    const buttonsConfig = [
      {
        type: 'custom',
        text: 'Ok',
        name: 'codemirrorOk',
        primary: true
      },
      {
        type: 'cancel',
        text: 'Cancel',
        name: 'codemirrorCancel'
      }
    ]

    const config = {
      title: 'HTML source code',
      url: url + '/source.html',
      width: codemirrorWidth,
      height: codemirrorHeight,
      resizable: true,
      maximizable: true,
      fullScreen: editor.settings.codemirror.fullscreen,
      saveCursorPosition: false,
      buttons: buttonsConfig
    }

    config.onAction = function (dialogApi, actionData) {
      if (actionData.name === 'codemirrorOk') {
        const doc = document.querySelectorAll('.tox-dialog__body-iframe iframe')[0];
        doc.contentWindow.submit();
        editor.undoManager.add();
        win.close();
      }
    }

    const win = editor.windowManager.openUrl(config);

    if (editor.settings.codemirror.fullscreen) {
      win.fullscreen(true);
    }
  }

  editor.ui.registry.addButton('code', {
    icon: 'sourcecode',
    title: 'Source code+',
    tooltip: 'Source code+',
    onAction: showSourceEditor
  });

  editor.ui.registry.addMenuItem('code', {
    icon: 'sourcecode',
    text: 'Source code+',
    onAction: showSourceEditor,
    context: 'tools'
  });
});
