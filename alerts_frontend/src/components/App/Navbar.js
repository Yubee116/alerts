import { Link } from 'react-router-dom';

export default function Navbar({ alerts }) {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <nav className='bg-gray-800'>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 items-center justify-center  sm:justify-start">
                        {/* <div className="flex flex-shrink-0 items-center">
                            <img
                                className="block h-8 w-auto lg:hidden"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                            <img
                                className="hidden h-8 w-auto lg:block"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="Your Company"
                            />
                        </div> */}
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">

                                <Link to='' className='bg-gray-900 text-white text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'></Link>
                                {/* <Link to='' className={classNames(
                                        item.current ? 'bg-gray-900 text-white' :
                                            'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium')}></Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <Link to='/new'>
                            <button type='button' className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>
                                Create Alert
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>




        // <nav>
        //     <h1>A Heading </h1>
        //     <div className='links'>
        //         <Link to='/'> </Link>
        //         <Link to='/newalert'></Link>
        //     </div>

        // </nav>
    )
}