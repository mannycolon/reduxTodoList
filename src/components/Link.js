import React, { Component, PropTypes } from 'react';

class Link extends Component {
  render(){
    let { active, children, onClick } = this.props;
    if(active){
      return <span>{children}</span>
    }
    return(
      <a href="#"
         onClick={ e => {
           e.preventDefault()
           onClick()}}>
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link;
