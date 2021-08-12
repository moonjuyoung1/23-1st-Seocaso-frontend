import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <div className="login-box" onClick={e => e.stopPropagation()}>
        <header>
          <img src="/images/seocaso_logo.png" className="header-image" />
        </header>
        <div>
          {this.props.children}
          <div className="row-linebox">
            <hr />
            <span>OR</span>
          </div>
          <button className="input-facebook">Facebook 으로 로그인</button>
        </div>
      </div>
    );
  }
}

export default Layout;
