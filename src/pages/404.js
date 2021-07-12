import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Spinner from '../components/Spinner';

const NotFoundPage = () => (
  <Layout>
    <Spinner>
      <p style={{ fontSize: '24px' }}>
        {'The page you tried to access was not found. '}
      </p>
      <div>
        <Link to="/">{'➟ Go Back Home'}</Link>
      </div>
    </Spinner>
  </Layout>
);

export default NotFoundPage;
