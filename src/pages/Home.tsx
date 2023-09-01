
import Background from '../assets/images/Background-unsplash-Nick.jpg'

function Home() {
  return (
    <div 
      style = { {backgroundImage: `url(${Background})`}} 
      className='flex flex-row justify-center align-to mx-auto bg-cover bg-fixed h-screen'
      >
        <div className="flex place-items-left h-fit min-w-0 pt-2 bg-white bg-opacity-25">
          <center><p className='bg-blue-600 text-white p-0 rounded flex justify-center text-xl font-mono bg-opacity-25'>
            Welcome Home, I hope you enjoy your stay at the Alcohol Activists Home page.
            <br />
            Never backdown. Never what?
          </p></center>
        </div>
    </div>
  )
}

export default Home
