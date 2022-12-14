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
        <h3>You just hit a route that doesn&#39;t exist... the sadness. π¦</h3>
        <h3>π§ λΉ λ₯Έ μμΌ μμ μΆκ°λ  μμ μ΄κ±°λ... μλͺ»λ νμ΄μ§μλλ€! π§</h3>
        <h3>λ€λ₯Έ κ±° λλ¬λ³΄λ€ κ°μΈμ π</h3>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
