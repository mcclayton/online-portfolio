import React, { Component } from 'react';
import Layout from '../components/layout';
import Search from '../components/surf/Search';
import SurfCamContainer from '../components/surf/SurfCamContainer';

const MONDOS_ID = '584204204e65fad6a770904d';

export default class SurfPage extends Component {
  render() {
    return (
      <Layout>
        <Search />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <SurfCamContainer defaultSpotId={MONDOS_ID} />
        </div>
      </Layout>
    );
  }
}
