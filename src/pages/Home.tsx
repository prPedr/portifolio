import Header from "../components/Header/Header"
import MenuApresentacao from "../components/MenuApresentacao/MenuApresentacao"
import Blog from "../components/Blog/Blog"
import Projetos from "../components/Projetos/Projetos"

const Home = () => {
  return (
    <>
      <Header />
      <MenuApresentacao />
      <Blog />
      <Projetos />
    </>
  )
}

export default Home