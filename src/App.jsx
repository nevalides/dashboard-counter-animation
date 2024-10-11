import Counter from './Counter';
import './App.css'

function App() {
  const currentDate = new Date();
  const formatDate = (date) => {
    const todayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    const time = `${date.getHours() > 10 ? date.getHours() : `0${date.getHours()}`}:${date.getMinutes() > 10 ? date.getMinutes() : `0${date.getMinutes()}`}`

    const days = ['Sunday', 'Monday', "Tuesday", 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return `${days[date.getDay()]}, ${todayDate} @${time}`
  }
  return (
    <div className='image-background w-full h-full min-h-screen'>
      <div className='body-counter w-full h-full bg-black bg-opacity-20 min-h-screen flex flex-col items-center justify-center lg:gap-6 md:gap-4 gap-2'>
        <Counter />
        <div className='text-white p-2 lg:text-2xl md:text-xl sm:text-lg text-base font-semibold leading-none'>
          {formatDate(currentDate)}
        </div>
      </div>
    </div>
  )
}

export default App
