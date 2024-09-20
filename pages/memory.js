import {userEffect} from "react"

export default function memory() {
userEffect(() => {
    window.location.href = '/memory/index.html'
})
    return null;
  }
  