import { combineReducers } from "redux";
import main from './control/main';
import ui from './control/ui';
import modal from './control/modal';
import content from './control/content';

import user from './data/user';

const rootReducer = combineReducers({
  main,
  ui,
  modal,
  content,

  user
});

export default rootReducer;
