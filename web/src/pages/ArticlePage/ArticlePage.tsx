import ArticleCell from 'src/components/ArticleCell'
import { MetaTags } from '@redwoodjs/web'

const ArticlePage = () => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

    <ArticleCell />
    </>
  )
}

export default ArticlePage
