
import { Link } from 'react-router-dom'
import Button from './Button'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {
  const signOutOnClick = () => {
    signOut(auth);
    location.reload()
  }
  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    if(response.user){
        location.reload()
    }
  }





  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-5">
        <div className='flex items-center flex-shrink-0 text-white mr-6  '>
                <Link to='/' className='font-semibold text-xl tracking-tight'>Alcohol Activists</Link>
        </div>
        <div className="flex justify-center ">
                    <div className="text-sm lg:flex-grow  flex justify-end">
                        <Button className="p-3 m-5 bg-indigo-900 justify-center rounded-full">
                            <div>
                                <Link to='/'  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-indigo-200 hover:text-white mr-1'>
                                    Home
                                </Link>
                            </div>

                        </Button>
                        <Button className="p-3 m-5 bg-indigo-900 justify-center rounded-full">
                            <div>
                                <Link to='/about'  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-indigo-200 hover:text-white mr-1'>
                                    About
                                </Link>
                            </div>

                        </Button>
                        <Button className="p-3 m-5 bg-indigo-900 justify-center rounded-full">
                            <div>
                                <Link to='/dashboard'  className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-indigo-200 hover:text-white mr-1'>
                                    Dashboard
                                </Link>
                            </div>

                        </Button>
                        
                        {
                            !auth.currentUser ? 
                            <Button className='p-3 m-5 bg-indigo-900 justify-center rounded-full'>
                                <div>
                                    <Link to="/" onClick= { () =>{signInOnClick()}} 
                                    className ="flex  place-items-center mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white">
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                    
                            <Button className='p-3 m-5 bg-indigo-900 justify-center rounded-full'>
                                <div>
                                    <Link to="/" onClick= { () =>{signOutOnClick()}} 
                                    className ="flex  place-items-center mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white">
                                        Log Out 
                                    </Link>
                                </div>
                            </Button>

                        }
                    </div>
        </div>
    </nav>
  )
}

export default Navbar
