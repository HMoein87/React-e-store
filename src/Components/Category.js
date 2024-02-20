import React from 'react'

//category component
const Category = ({id, title, onCategoryClick}) => {
  return (
    <div key={id} onClick={() => onCategoryClick(id)}>{title}</div>
  )
}

export default Category;