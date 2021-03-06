import React, { Fragment } from 'react';

import './Layout.less';

const layout = props => (
  <Fragment>
    <header className="main-header">{props.header}</header>
    {props.mobileNav}
    {/* <main className="content">{props.children}</main> */}
  </Fragment>
);

export default layout;
