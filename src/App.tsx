import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import logo from './logo.svg'
import './App.css'

function App() {
    const [toggle, setToggle] = useState<boolean>(true)

    useEffect(() => {
        if (toggle === true) {
            toast.success('Toggle on')
        } else {
            toast.warn('Toggle off')
        }
    })

    return (
        <div className="App">
            <header className="App-header">
                {toggle ? (
                    <img src={logo} className="App-logo" alt="logo" />
                ) : null}
                <button
                    className="App-button"
                    onClick={() => setToggle(!toggle)}
                >
                    Click me
                </button>
            </header>
            <ToastContainer autoClose={3000} hideProgressBar />
        </div>
    )
}

export default App
