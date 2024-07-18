
import './style.css'
import Trash from '../../assets/16qg.svg'
function Home() {

  const users = [{
    id: '234as23s',
    name: 'catau',
    age: 33,
    email: 'cat@email.com'


  },
  {
    id: '234a3232as23s',
    name: 'Aline',
    age: 28,
    email: 'Aline@email.com'

  },
  {
    id: '234a3232as2332a3s',
    name: 'Alan',
    age: 38,
    email: 'Alan@email.com'

  }
  ]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Idade' name='idade' type='number' />
        <input placeholder='E-mail' name='email' type='email' />
        <button type="button">Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:<span> {user.name}</span></p>
            <p>Idade:<span>{user.age}</span></p>
            <p>Email:<span> {user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="lixeira" />
          </button>
        </div>

      ))}



    </div>

  )
}
export default Home
