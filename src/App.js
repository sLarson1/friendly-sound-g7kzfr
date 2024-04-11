import Avatar from './Avatar';

const data = [{src:"https://sandpack-bundler.vercel.app/img/avatars/001.png",alt:"person with curly hair and a black T-shirt"},
{src:"https://sandpack-bundler.vercel.app/img/avatars/003.png",
alt:"person with short hair wearing a blue hoodie"}];

function App() {
  return (
    <div className="avatar-set">
    {
    data.map((element) => (     
      <Avatar
      src={element.src}
      alt={element.alt}/>
    ))
    }
    </div>
  )
}

export default App;