import React from "react";

import Types from './types';

// interface IProps {
//   onPress: Function;
//   title: string;
//   textColor: string;
//   backgroundColor: string;
// }

interface IButton {
  props?: any;
  type: 'fab' | 'default' | 'simple';
}

const Button: React.FC<IButton> = ({type = 'simple', props}) => {
    const choosen = type === 'default' ? 'simple' : type;
    const ToRender = Types[choosen];

    return <ToRender {...props} />
};

export default Button;