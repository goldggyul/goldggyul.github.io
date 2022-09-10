import React from 'react';
import IconButtonBar from '../icon-button-bar';
import './style.scss';

function PageFooter({ author, siteUrl, social, showHitCounter = false }) {
  return (
    <footer className="page-footer-wrapper">
      <div className="page-footer">
        <div className="copyright">
          © {new Date().getFullYear()}
          &nbsp;
          <a href={siteUrl}>goldggyul</a>
          {/* <IconButtonBar links={['github', githubUrl]} style={{ color: '#a8a8a8', fontSize: 24 }} /> */}
        </div>
        {!showHitCounter && <div className="footer-social"><IconButtonBar links={social} /></div>}
        {showHitCounter && <div className="hit-counter">
          <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fgoldggyul.github.io%2Fhit-counter&count_bg=%23FF8500&title_bg=%233CB200&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false" /></a>
        </div>}
      </div>
    </footer>
  );
}

export default PageFooter;
