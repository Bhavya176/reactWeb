import React from "react"

const Sresult = (props) => {
  console.log(props)
  const img = `https://source.unsplash.com/user/erondu/400x300/?${props.name}`
  console.log(img)
  return (
    <>
      <img src={img} alt="rendom" />
    </>
  )
}

export default Sresult
