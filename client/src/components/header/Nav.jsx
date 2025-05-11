import { useContext, useState } from 'react'
import { Link } from 'react-router'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'
import { UserContext } from '../../context/userContext.js'
import { FaRegUserCircle } from "react-icons/fa";
import Clock from 'react-live-clock';



export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { email } = useContext(UserContext)


  const guestNav = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/phone/catalog' },
    { name: 'Login', href: '/phone/login' },
    { name: 'Register', href: '/phone/register' },
  ]

  const userNav = [
    { name: 'Home', href: '/' },
    { name: 'Catalog', href: '/phone/catalog' },
    { name: 'Create', href: '/phone/create' },
    { name: 'My-Profils', href: '/phone/my-profil' },
    { name: 'Logout', href: '/phone/logout' },
  ]


  const navItems = email ? userNav : guestNav

  return (

    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-6 py-4 lg:px-12" aria-label="Global">
        <div className="flex lg:flex-1 items-center gap-2">
          <DevicePhoneMobileIcon className="w-6 h-6 text-cyan-400" />
          <Link to={'/'}>
            <span className="text-lg font-bold text-white hover:text-cyan-400">Phone Shop</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-slate-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex gap-x-10">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium hover:text-cyan-400">
              {item.name}
            </a>
          ))}
        </div>
         <div className="hidden lg:flex lg:flex-1 justify-end">
        {!email && <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Sofia'}  />} 
          {email && <div className="relative flex items-center">
            <FaRegUserCircle className="w-6 h-6 text-white -ml-8" />
          </div>}
          <Link to={'/phone/my-profil'} className='hover:text-cyan-400'>{email}</Link>
        </div>
       
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-slate-800 px-6 py-6 sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <span className="text-white text-lg font-bold">Phone Shop</span>
            <div className="relative flex items-center">
           {email &&<FaRegUserCircle className="w-10 h-6 text-white -ml-8" /> }
            <Link to={'/phone/my-profil'} 
            onClick={() => setMobileMenuOpen(false)}
            className='block text-base font-medium text-white '>{email}</Link> 
          </div>
            <button
              type="button"
              className="p-2 text-white hover:bg-slate-700 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 space-y-4">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="block text-base font-medium text-white hover:text-cyan-400">
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>

  )
}
