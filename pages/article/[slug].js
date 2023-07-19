import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const Article = ({ article }) => {
  const {title, content} = article.attributes;
  const { name } = article.attributes.author.data.attributes;
  const category = article.attributes.category.data?.attributes?.name;
  const categorySlug = article.attributes.category.data?.attributes?.slug;
  const image = `process.env.NEXT_PUBLIC_STRAPI_API_URL${article.attributes.image.data.attributes.formats.medium.url}`
  const publishedAt = new Date(article.attributes.publishedAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const publishDate = new Intl.DateTimeFormat('es-ES', options).format(publishedAt);

  const paragraphs = content.split('\n\n').map((paragraph, index) => (
    <p key={index} className='text-white mb-4' >{paragraph}</p>
  ));

  return (
    <>
      <Header/> 
        <div className='mx-8 xl:mx-24 mb-12'>
            <div className='relative h-[400px] mb-4'>
                <Image
                    src={image}
                    fill
                    alt={title}
                    style={{objectFit: "cover", objectPosition: "center"}}
                    className='grayscale'
                />
            </div>
            <div className='flex gap-4 mb-4'>
                <p className='text-white text-xs'>Fecha de Publicación <span className='text-flrs-400'>{publishDate}</span> </p>
                <p className='text-white text-xs'>Escrito por <span className='text-flrs-400'>{name}</span></p>
            </div>
            <div className='flex items-center gap-2 mb-4'>
                <p className='text-white text-xs'>
                    Categorías:
                </p>
                <Link href={`/categories/${categorySlug}`}>
                    <p className='bg-flrs-100 hover:bg-amber-600 ease-in duration-100 text-white inline py-1 px-2 text-xs font-semibold'>
                        {category || "Sin Categoría"}
                    </p>
                </Link>
            </div>
            <h1 className='text-white text-4xl font-bold mb-6 pt-4 border-t-[1px] border-zinc-700'>{title}</h1>
            <div>
                {paragraphs}
            </div>
        </div>
      <Footer/>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`);
  const data = await res.json();
  const articles = data.data;

  const paths = articles.map((article) => ({
    params: { slug: article.attributes.slug },
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
  const articles = data.data;

  const article = articles.find((article) => article.attributes.slug === slug);

  return {
    props: {
      article,
    },
  };
}

export default Article;
