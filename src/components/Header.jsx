import Button from "./ui/Button";
import logoImg from '../assets/logo.jpg'

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg}/>
        <h1 id="title">Food App</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  )
}