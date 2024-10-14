import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Welcome to Our Website</h1>
        <Link to='/register'><button>Register</button></Link>
        <br></br>
        <br></br>
        <Link to='/login'><button>Login</button></Link>
    </div>
  )
}

export default Home