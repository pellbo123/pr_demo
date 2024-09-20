import {userEffect} from "react"

export default function Snake() {
userEffect(() => {
    window.location.href = '/snake/index.html'
})
    return null;
  }
  