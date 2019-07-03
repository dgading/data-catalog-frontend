import React from 'react'
import StyledLink from './StyledLink'
import TopicImage from './TopicImage'

class IconListItem extends React.PureComponent {

  render() {
    const { item } = this.props;
    console.log('item: ', item);
    const color =  "#0A77BD";
    let content = '';

    if (item.icon && item.none) {
      // Image provided as a url.
      content = (
        <StyledLink href={item.ref}>
          <img src={item.icon} alt={item.alt} />
          <div>{item.data}</div>
        </StyledLink>
      )
    }
    else {
      // Image provided by custom component.
      content = ( 
        <StyledLink href={`search?theme=${item.data}`}>
          <TopicImage title={item.data} fill={color} width="80" height="80" />
          <div>{item.data}</div>
        </StyledLink>
      )
    };

    return (
      <li key={item.identifier}>{content}</li>
    )
  }
}

export default IconListItem
