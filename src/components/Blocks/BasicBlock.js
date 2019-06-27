import React from 'react';
import PropTypes from 'prop-types';

class BasicBlock extends React.PureComponent {

  render() {
    const { content } = this.props;

    return (
      <div className="basic-block">
        <h2>{this.props.content.title}</h2>
        <p>{this.props.content.body}</p>
      </div>
    )

  }
}

BasicBlock.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default BasicBlock
