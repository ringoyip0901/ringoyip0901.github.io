//action About Me
//action Experience
//Education 
//Find me! 

export const about = () => {
  console.log('about action is working')
  return {
    type: "About", 
  }
}

export const experience = () => {
  console.log('experience action is working')
  return {
    type: "Experience", 
  }
}

export const education = () => {
  console.log('education action is working')
  return {
    type: "Education", 
  }
}

export const portfolio = () => {
  console.log('portfolio action is working')
  return {
    type: "Portfolio", 
  }
}

export const intro = () => {
  console.log('intro action is working')
  return {
    type: "intro", 
  }
}