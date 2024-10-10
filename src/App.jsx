import Counter from './Counter';
import './App.css'

function App() {
  return (
    <div className='image-background w-full h-full min-h-screen'>
      <div className='body-counter w-full h-full bg-black bg-opacity-20 min-h-screen flex items-center justify-center'>
        <Counter />
      </div>
    </div>
  )
}

export default App
