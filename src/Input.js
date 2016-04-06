import React from 'react';
import InputBase from './InputBase';
import * as FormControls from './FormControls';
import deprecationWarning from './utils/deprecationWarning';

class Input extends InputBase {
  render() {
    if (this.props.type === 'static') {
      deprecationWarning('Input type=static', 'FormControls.Static');
      return <FormControls.Static {...this.props} />;
    }

    return super.render();
  }
}

if (process.env.NODE_ENV !== 'production') {
  Input.propTypes = {
    type: React.PropTypes.string
  };
}

export default Input;
