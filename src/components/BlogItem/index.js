import './index.css'

const BlogItem = props => {
  const {item} = props

  return (
    <li className="blogItemContainer">
      <div className="blogItemTop">
        <h1 className="blogItemHeading">{item.title}</h1>
        <p className="blogItemDescription">{item.publishedDate}</p>
      </div>
      <p className="blogItemDescription">{item.description}</p>
    </li>
  )
}

export default BlogItem
