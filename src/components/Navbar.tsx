import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };

    return (
        <nav className='flex items-center justify-between flex-wrap bg-cyan-500 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-semibold text-xl tracking-tight'>look at this cool beverage page!</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-teal-200 border rounded border-teal-400 hover:text-white hover:border-white'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
                <div className='w-full block flex-grow items-center'>
                    <div className="text-sm lg:flex-grow">
                        <Button className='p-3 m-5 bg-cyan-200 rounded m-3 hover:bg-cyan-200 hover:drop-shadow-custom_button hover:border-2 hover:border-grey-100/100 justify-center'>
                            <div>
                                <Link to='/' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-white mr-4'>
                                    Home
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-cyan-200 rounded m-3 hover:bg-cyan-200 hover:drop-shadow-custom_button hover:border-2 hover:border-grey-100/100 justify-center'>
                            <div>
                                <Link to='/dashboard' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-white mr-4'>
                                    Dashboard
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-cyan-200 rounded m-3 hover:bg-cyan-200 hover:drop-shadow-custom_button hover:border-2 hover:border-grey-100/100 justify-center'>
                            <div>
                                <Link to='/About' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-white mr-4'>
                                    About
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-cyan-200 rounded m-3 hover:bg-cyan-200 hover:drop-shadow-custom_button hover:border-2 hover:border-grey-100/100 justify-center'>
                            <div>
                                <Link to='/Complaints' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-white mr-4'>
                                    Complaints
                                </Link>
                            </div>
                        </Button>
                        <Button className='p-3 m-5 bg-cyan-200 rounded m-3 hover:bg-cyan-200 hover:drop-shadow-custom_button hover:border-2 hover:border-grey-100/100 justify-center'>
                            <div>
                                <Link to='/About_complaints' onClick={ clicked} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-white mr-4'>
                                    About Complaints
                                </Link>
                            </div>
                        </Button>
                        {
                            !isAuthenticated ? 
                            <Button className='p-3 m-5 bg-cyan-200 rounded m-3 hover:bg-cyan-200 hover:drop-shadow-custom_button hover:border-2 hover:border-grey-100/100 justify-center'>
                                <div>
                                    <Link to="/" onClick={signInOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-white'>
                                        Login
                                    </Link>
                                </div>
                            </Button>
                            :
                            <Button className='p-3 m-5 bg-cyan-200 rounded m-3 hover:bg-cyan-200 hover:drop-shadow-custom_button hover:border-2 hover:border-grey-100/100 justify-center'>
                                <div>
                                    <Link to="/" onClick={signOutOnClick} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-teal-600 hover:text-white'>
                                        Sign Out
                                    </Link>
                                </div>
                            </Button>
                        }
                    </div>
                </div>
            ) : (
                <></>
            )}
        </nav>
    );
}

export default Navbar;