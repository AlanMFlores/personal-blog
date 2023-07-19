import ArticleCard from "./components/ArticleCard";
import Header from "./components/Header";
import WebCard from "./components/WebCard";
import SocialCard from "./components/SocialCard";
import WelcomeHero from "./components/WelcomeHero";
import Footer from "./components/Footer";

export default function Home({articles}) {

  return (
    <>
      <Header/>
      <main className="flex justify-center mb-12">
        <section className="grid gap-5 mx-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <WebCard/>
          <SocialCard/>
          <WelcomeHero/>
          {
              articles.map((article) => (
                <ArticleCard key={article.id} article={article}/>
              ))
          }
        </section>
      </main>
      <Footer/>
    </>
  )
}

export async function getStaticProps() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/articles?populate=*`)
  const data = await res.json();
  const articles = data.data

  return {
    props: {
      articles,
    }
  }
}