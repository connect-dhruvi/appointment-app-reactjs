import React from 'react';
import {Link} from 'react-router-dom';

function ArticleListPage({articles}) {
    return(
        <React.Fragment>
 
        {articles.map((article, key) => (
            <div>
                <Link key={key} to={`/article/${article.name}`}>
                    <h2>{article.name.substring(0, 1).toUpperCase() + article.name.substring(1)}</h2>
                </Link>
                <p>{article.details.substring(0, 120)}...</p>
                <hr/>
            </div>
        ))}
    </React.Fragment>
)
}



export default ArticleListPage;