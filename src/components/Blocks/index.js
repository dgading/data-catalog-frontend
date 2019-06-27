import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

class Blocks extends React.PureComponent {

  render() {
    const Block = this.props.component || 'BasicBlock';
    const type = this.props.type;
    let paneTitle = this.props.paneTitle;

    if (paneTitle) {
      return (
        <Wrapper className={'container-front container ' + type }>
          <h2>{paneTitle}</h2>
          <div className="pane-content">
            {
              this.props.items.map(function(item){
                return <Block content={item} key={item.ref} />;
              })
            }
          </div>
        </Wrapper>
      );
    }
    else {
      return (
        <Wrapper className={'container-fluid ' + type }>

          <div className="pane-content">
            {
              this.props.items.map(function(item){
                return <Block content={item} key={item.ref} />;
              })
            }
          </div>
        </Wrapper>
      )
    }
  }
}

Blocks.defaultProps = {
  items: [],
};

Blocks.propTypes = {
  items: PropTypes.any,
  component: PropTypes.any,
};

export default Blocks
