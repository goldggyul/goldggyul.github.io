import React from 'react';
import Layout from '../layout';
import Seo from '../components/seo';
import './404style.scss';

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <div className="not-found-content" style={{ textAlign: 'center' }}>
        <h1>404: Not Found</h1>
        <h3>You just hit a route that doesn&#39;t exist... the sadness. 💦</h3>
        <h3>🚧 빠른 시일 안에 추가될 예정이거나... 잘못된 페이지입니다! 🚧</h3>
        <h3>다른 거 둘러보다 가세요 👀</h3>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
