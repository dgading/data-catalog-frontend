import React from 'react';
import PropTypes from 'prop-types';

class StatBlock extends React.PureComponent {

  render() {
    const { content } = this.props;

    return (
      <div className="stat-block">
        <i className={content.icon}></i>
        <h2>{content.title}</h2>
        <p>{content.body}</p>
      </div>
    )

  }
}

StatBlock.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  ref: PropTypes.number,
};

export default StatBlock
