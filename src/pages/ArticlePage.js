import React from 'react';
import ArticleListPage from '../components/ArticleListPage';
import articles from "./article-content";

function ArticlePage({ match }) {
    const name = match.params.name;
    console.log(name);
    const article = articles.find(a => a.name === name);
    const otherArticle = articles.filter(a => a.name !== name);
    //console.log(article);
    return (
        <>
            <div> {!article ? <h1>Article {name} doesn not exist.</h1> :
                <div>
                    <h1>{article.name.toUpperCase()}</h1>
                    <p>
                        {article.details}
                    </p>
                    <div>
                        <img src={article.src} />
                    </div>
                </div>
            }
            </div>
            <h1> Other Articles </h1>
                <ArticleListPage articles={otherArticle} />
        </>

    )
}


export default ArticlePage;
