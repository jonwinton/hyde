'use strict';

import OpenDirectory from './client/ui/OpenDirectory';
import {list, inspectTree} from 'fs-jetpack';
import riot from 'riot';
import './client/tags';

function readDir(dir) {
  console.log(typeof dir[0]);
  console.log(list(dir[0]));
  console.log(inspectTree(dir[0]));
}

var btn = document.querySelector('.btn');


new OpenDirectory(btn, readDir);

riot.mount('root');


