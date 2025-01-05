import React from 'react'

//props come from the parent (in the app.js)
// one way of doing this, another is just getting the title
/* const Header = (props) => {

  return (
    <header>
        <h1>{props.title}</h1>
    </header>
  );
}; */

const defaultTitle = 'default title'

const Header = ({ title = defaultTitle }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

//seems to not be working the title on top is the way to do it?
Header.defaultProps = {
  title: 'default title'
}

export default Header;

