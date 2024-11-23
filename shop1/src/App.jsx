import 'flowbite'
import MainPage from './Components/MainPage'
import Workout from './Components/Workout'
import Generator from './Components/Generator'

function App() {
    return (
    <>
    <main className='min-h-screen flex flex-col dark:bg-gradient-to-r from-slate-800 to-slate-950 dark:text-slate-50'>
        <MainPage/>
        <Workout/>
        <Generator/>
    </main>
      
    </>
  )
}

export default App
