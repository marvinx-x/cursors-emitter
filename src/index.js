"use strict"

import { swupTransitions } from './scripts/swup'
import { utils, getIndexPage } from './scripts/utils';
import { Cursor1 } from './scripts/cursors/cursor1';
import { Cursor2 } from './scripts/cursors/cursor2';
import { Cursor3 } from './scripts/cursors/cursor3';
import { Cursor4 } from './scripts/cursors/cursor4';

export const setCursor = () => {
  const index = getIndexPage();
  switch (index) {
    case 1:
      new Cursor1(index);
      break;
    case 2:
      new Cursor2(index);
      break;
    case 3:
      new Cursor3(index);
      break;
    case 4:
      new Cursor4(index);
      break;
    default:
  }
}

window.addEventListener('load', async () => {
  await utils();
  swupTransitions();
});
