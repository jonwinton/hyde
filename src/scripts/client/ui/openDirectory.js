'use strict';

const remote = require('electron').remote;
const dialog = remote.require('electron').dialog;

export default class OpenDirectory {
  constructor(el, callback) {
    this.el = el;

    this.selectedDir = '';

    this.callback = callback;

    this.init();
  }

  init() {
    this.el.addEventListener('click', this.openDialog.bind(this));
  }

  openDialog() {
    this.callback(dialog.showOpenDialog({ properties: ['openDirectory'] }));
  }
}
