export default class Post {
  constructor(node) {
    const { id, html, excerpt, frontmatter, fields, tableOfContents } = node;
    const { slug } = fields;
    const { emoji, categories, title, author, date } = frontmatter;

    this.id = id;
    this.excerpt = excerpt;
    this.emoji = emoji;
    this.html = html;
    this.slug = slug;
    this.title = title;
    this.author = author;
    this.date = date;
    this.categories = categories.split(' ');
    this.tableOfContents = tableOfContents;
  }
}

/*
"<ul>
<li>
<p><a href="#%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EB%AC%B8%EB%B2%95-%EC%A0%95%EB%A6%AC">파이썬 문법 정리</a></p>
<ul>
<li>
<p><a href="#code-classlanguage-textfindcode-%EB%AC%B8%EC%9E%90%EC%97%B4-%EA%B2%80%EC%83%89"><code class="language-text">find</code>: 문자열 검색</a></p>
<ul>
<li><a href="#%EC%82%AC%EC%9A%A9%EB%B2%95">사용법</a></li>
<li><a href="#code-classlanguage-textincode-operator"><code class="language-text">in</code> operator</a></li>
</ul>
</li>
<li>
<p><a href="#%EC%9E%85%EB%A0%A5%EB%B0%9B%EA%B8%B0">입력받기</a></p>
<ul>
<li><a href="#%EC%97%94%ED%84%B0%EB%A1%9C-%EA%B5%AC%EB%B6%84%EB%90%9C-%EC%9E%85%EB%A0%A5-%EB%B0%9B%EA%B8%B0">엔터로 구분된 입력 받기</a></li>
</ul>
</li>
<li>
<p><a href="#%EC%9E%85%EB%A0%A5-%EB%B9%A0%EB%A5%B4%EA%B2%8C-%EB%B0%9B%EA%B8%B0">입력 빠르게 받기</a></p>
<ul>
<li><a href="#code-classlanguage-textsysstdinreadlinecode"><code class="language-text">sys.stdin.readline()</code></a></li>
</ul>
</li>
</ul>
</li>
</ul>"

*/