import React, { Component } from 'react';
import copy from 'copy-text-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';
import Layout from '../components/layout';

export default class MacInstallPage extends Component {
  render() {
    const { location } = this.props;
    const script = `/bin/bash -c "$(curl -fsSL ${location.origin}/mac.sh)"`;
    return (
      <Layout>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <p>
            Run the following command in your terminal to fully configure/setup
            your Mac.
          </p>
          <p
            style={{
              cursor: 'pointer',
              borderRadius: '5px',
              border: '1px solid #2E333E',
              padding: '5px',
            }}
            onClick={() => {
              if (copy(script)) {
                toast.success(`Copied Script`);
              }
            }}
          >
            {script}
          </p>
          <a
            href="https://github.com/mcclayton/MacSetup"
            className="icon fa-github"
          >
            <span style={{ padding: '5px' }}>{' View MacSetup On Github'}</span>
          </a>
          <Toaster />
        </div>
      </Layout>
    );
  }
}
