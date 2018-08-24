import React from 'react';

const DataSource = () => (
  <section>
    <h3>データソース</h3>
    <p>
      Jクラブ個別経営情報開示資料(平成18年度〜平成29年度分)<br />
      <a href="https://www.jleague.jp/aboutj/management/club-h28kaiji.html">https://www.jleague.jp/aboutj/management/club-h28kaiji.html</a>
    </p>
    <ul>
      <li><a href="https://www.jleague.jp/">Jリーグ.jp</a></li>
      <li><a href="https://data.j-league.or.jp/SFTP01/">J.LEAGUE Data Site</a></li>
      <li><a href="http://www.jfl.or.jp/">日本フットボールリーグオフィシャルWebサイト</a></li>
      <li><a href="https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8">Wikipedia</a></li>
    </ul>
  </section>
);

const Credit = () => (
  <section>
    <h3>制作</h3>
    <p>cieloazul310</p>
    <p>
      Web: <a href="https://cieloazul310.github.io">水戸地図</a><br />
      Twitter: <a href="https://twitter.com/cieloazul310">@cieloazul310</a>
    </p>
  </section>
);

const Copyrights = () => (
  <aside>
    <p>Copyright © 2018 cieloazul310 All right reserved.</p>
  </aside>
);

const Attribution = () => (
  <div>
    <DataSource />
    <Credit />
    <Copyrights />
  </div>
);

export default Attribution;
