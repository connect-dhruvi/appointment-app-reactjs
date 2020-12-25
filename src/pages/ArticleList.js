import React from 'react';
import articles from './article-content';
import ArticleListPage from '../components/ArticleListPage';

function ArticleList() {
    return (
        <div>
            <ArticleListPage articles= {articles}/>
        </div>
    )
}
export default ArticleList;
