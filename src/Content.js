import React from 'react' //ctr+alt+r for ES7snippet -->(rafce)

const Content = () => {
    function handleNameChange(){
        const names = ["Earn","Grow","Give","Create"];
        const int = Math.floor(Math.random()*4)
        return names[int]
    }
  return (
   <p>Lets {handleNameChange()} Money</p>
  )
}

export default Content;