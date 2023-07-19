import React from 'react'

const Article = ({article}) => {
  return (
    <div>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
    </div>
  )
}

export async function getStaticProps(context) {
    const { slug } = context.query

    let apiUrl = '';
    if (typeof window !== 'undefined') {
      apiUrl = `${window.location.protocol}//${window.location.host}`;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/articles?slug=${slug}`)
    const data = await res.json();
    const article = data.data
    return {
      props: {
        article,
      }
    }
  }

export default Article