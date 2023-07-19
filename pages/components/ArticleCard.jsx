import { AtRule } from 'postcss'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ArticleCard = ({article}) => {
  const { name } = article.attributes.author.data.attributes;
  const { title, description, slug } = article.attributes;
  const urlSlug = article.attributes.slug;
  const categorySlug = article.attributes.category.data?.attributes?.slug
  const category = article.attributes.category.data?.attributes?.name;
  const image = `http://localhost:1337${article.attributes.image.data.attributes.formats.medium.url}`;
  const publishedAt = new Date(article.attributes.publishedAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const publishDate = new Intl.DateTimeFormat('es-ES', options).format(publishedAt);

  return (
    <article className='flex flex-col bg-zinc-800 w-full sm:w-[272px] h-[468px] p-6 shadow-lg shadow-zinc-950/70 rounded-[4px]'>
        <div className='relative h-48 mb-4'>
            <Image 
                src={image}
                fill
                alt='mysql image'
                className='object-cover w-full h-full grayscale'
            />
        </div>
        <div className='mb-4'>
            <div className='mb-4'>
                <p className='text-slate-50 text-xs mb-2'>{name}<span className='text-teal-500'> {publishDate}</span></p>
                <Link href={`/categories/${categorySlug}`}>
                    <p className='bg-flrs-100 hover:bg-amber-600 ease-in duration-100 text-white inline py-1 px-2 text-xs font-semibold'>{category || "Sin Categoría"}</p>
                </Link>
            </div>
            <h3 className='text-slate-50 text-base font-semibold mb-2'>{title}</h3>
            <p className='text-slate-400 text-sm line-clamp-2'>
                {description}
            </p>
        </div>
        <Link href={`/article/${urlSlug}`} className='block w-full text-sm mt-auto bg-teal-400 text-zinc-900 font-semibold py-2 px-4 ease-in duration-200 hover:bg-teal-600 hover:text-white text-center'>
            Continuar leyendo
        </Link>
    </article>
  )
}

export default ArticleCard