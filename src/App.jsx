import './App.css'
import Card from './components/Card'

function App() {
  
  const usuario = {
    nome: "Patrícia Santos Vasques",
    idade: 30,
    foto: "https://avatars.githubusercontent.com/u/115937834?v=4",
    github: "https://github.com/Patricia-Vasques",
    linkedin: "https://www.linkedin.com/in/patr%C3%ADcia-santos-vasques-aa9438253/",
  }

    return (
      <div>
        <Card usuario={usuario} />
      </div>
    )

}

export default App;
