import React from 'react';
import ArticleCard from './ArticleCard';

const ArticlesContainer = ({articles}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center mx-8 mb-12'>
      { articles.map((article) => (
        <ArticleCard key={article.id} article={article}/>
      )) }
    </div>
  )
}

export default ArticlesContainer    