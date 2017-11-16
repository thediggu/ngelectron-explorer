import template from './folder.html';
import controller from './folder.controller';
import './folder.scss';

let folderComponent = {
  transclude: true,
  bindings: {
  	details: "="
  },
  template,
  controller
}

export default folderComponent;