import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ArticlesContainer from '../components/ArticlesContainer'

const ArticlesCategories = ({ articles, categoryName }) => {
  return (
    <>
       <Header/>
        <main >
         <h1 className='text-white text-3xl font-bold mx-8 xl:mx-24 mb-6 pb-4 border-b-[1px] border-zinc-700'>{`Artículos de ${categoryName}`}</h1>
         <div className='flex justify-center'>
            <ArticlesContainer articles={articles}/>
         </div>
        </main>
       <Footer/>
    </>
  )
}

export default ArticlesCategories;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/categories`);
  const data = await res.json();
  const categories = data.data;

  const paths = categories.map((category) => ({
    params: { slug: category.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
    const { slug } = context.params;
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`);
    const data = await res.json();
    const articlesCategories = data.data;
  
    const articles = articlesCategories.filter((article) => article.attributes.category?.data?.attributes.slug === slug);
    
    const categoryMatch = articlesCategories.find((article) => article.attributes.category?.data?.attributes.slug === slug);
    const categoryName = categoryMatch.attributes.category?.data?.attributes.name;

    return {
      props: {
        articles,
        categoryName
      },
    };
  }
  
