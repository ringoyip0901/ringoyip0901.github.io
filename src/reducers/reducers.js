const about = "Hello! This website belongs to someone named Ringo Yip :) I'm a software engineer specializing in Javascript. I love building things through modern technologies. My goal is to make as much of a difference as possible to the world through my programming skills.";
const experience = "Software engineer @ React-Scope; Formerly Chemical Engineer @ Freeport-McMoRan";
const education = "USC";
const portfolio = "TBA"

const intro = "Hey there! This website, built upon React/Redux, belongs to someone named Ringo Yip! :) I am a software engineer who just loves building anything in general, whether it is frontend or backend. The power of creating something out of nothing through lines of code really intrigues me. I'm always up for a coffee chat or just anything about programming in general! Make sure to also check out my portfolio on my Github!"
const init = {"about": about, "experience": experience, "education": education, "portfolio": portfolio, "intro": intro};

export default function(state = init, action) {
  switch(action.type) {
    case 'About': {
      return state["about"];
    }
    case 'Experience': {
      return state["experience"];
    }
    case 'Education': {
      return state['education'];
    }
    case 'Portfolio': {
      return state['portfolio']
    }
    case 'intro': {
      return state['intro']
    }
    default: 
      return state;
  }
}