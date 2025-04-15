import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Телефони', href: '#' },
  { name: 'Аксесоари', href: '#' },
  { name: 'Оферти', href: '#' },
  { name: 'Контакти', href: '#' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 text-white min-h-screen flex flex-col">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12" aria-label="Global">
          <div className="flex lg:flex-1 items-center gap-2">
            <DevicePhoneMobileIcon className="w-6 h-6 text-cyan-400" />
            <span className="text-lg font-bold text-white">PhoneHub</span>
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
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium hover:text-cyan-400">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 justify-end">
            <a href="#" className="text-sm font-semibold hover:text-cyan-400">
              Вход →
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-slate-800 px-6 py-6 sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <span className="text-white text-lg font-bold">PhoneHub</span>
              <button
                type="button"
                className="p-2 text-white hover:bg-slate-700 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="block text-base font-medium text-white hover:text-cyan-400">
                  {item.name}
                </a>
              ))}
              <a href="#" className="block text-base font-semibold text-white hover:text-cyan-400">
                Вход
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero section */}
      <main className="flex-grow flex items-center justify-center px-6 lg:px-12 pt-32 pb-20">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-cyan-400">
            Открий най-новите смартфони
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            Голям избор от телефони, аксесоари и страхотни оферти. Подготвили сме нещо специално за теб!
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-400 transition"
            >
              Разгледай офертите
            </a>
            <a href="#" className="text-sm font-medium text-white hover:text-cyan-400">
              Научи повече →
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
