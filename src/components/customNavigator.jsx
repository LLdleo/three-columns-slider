import React from 'react';
import PropTypes from 'prop-types';
import Bullets from "react-awesome-slider/src/core/bullets";
import { getClassName } from 'react-awesome-slider/src/helpers/components';

export default class customBullets extends Bullets {
}

// function customNavigator() {
//   return (
//     <customBullets
//       cssModule={mergeStyles(cssModule)}
//       rootElement={rootElement}
//       media={this.media}
//       selected={this.state.index}
//       onClick={info => {
//         this.onTransitionRequest('bullet', info.index);
//         this.goTo(info);
//       }}
//     />
//   )
// }
