import React from 'react';

export default class ClientFooter extends React.Component {

  _prepareMsg() { return {__html: this.props.complianceMsg}; };

  render() {
    return (
      <div className="container-fluid client-footer">
        <div dangerouslySetInnerHTML={this._prepareMsg()} />
      </div>
    );
  }
}
