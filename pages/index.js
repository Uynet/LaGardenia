import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Post from './posts/[id]'

//builtin func
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

function PostData({id , date , title}){
  return(
            <div className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a> {title} </a>
              </Link>
              <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
            </div>
  )
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>ゆいブログ</h2>
        <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title }) => (
            <PostData key={id} id={id} date={date} title={title}/>
          ))}
        </ul>
      </section>
    </Layout>
  )
}