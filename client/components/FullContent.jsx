import React from 'react';

const FullContent = ({comments,searchValue}) =>{
  const length = searchValue.length;
  const index = comments.toUpperCase().indexOf(searchValue.toUpperCase());
  const commentPartOne = comments.slice(0,index);
  const commentSearch = comments.slice(index,index+length);
  const commentPartTwo = comments.slice(index+length);
  console.log(index)


  return(
  <div><span>{commentPartOne}</span><a style={{fontWeight:`bold`}}>{commentSearch}</a><span>{commentPartTwo}</span></div>
  )
}

export default FullContent;