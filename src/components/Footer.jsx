import React from 'react'

export default function Footer() {
  return (
    <footer className="">

        <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
            <ul className="flex items-center space-x-6">
                <li className="link">About</li>
                <li className="link">Advertising</li>
                <li className="link">Business</li>
                <li className="link">How Search works</li>
            </ul>
            <ul className="flex items-center space-x-6">
                <li className="link">Privicy</li>
                <li className="link">Terms</li>
                <li className="link">Settings</li>                
            </ul>
        </div>
    </footer>
  )
}
