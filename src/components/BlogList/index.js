import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogsListContainer">
      {blogsList.map(each => (
        <BlogItem item={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
