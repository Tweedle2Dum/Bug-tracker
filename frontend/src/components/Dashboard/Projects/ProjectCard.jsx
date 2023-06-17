import React from 'react'

export default function ProjectCard({key,name,desc}) {
 
  return (
    <>
    {console.log(name)}
        <div key={key}>
        {name}
        {desc}
        </div>
    </>
  )
}
