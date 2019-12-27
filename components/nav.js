import React from 'react'
import Link from 'next/link'
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response);
}

const Nav = () => (
  <nav>
    <ul>
      {/* 首頁 */}
      <li>
        <Link 
          href='/'
        >
          <a>Home</a>
        </Link>
      </li>

      {/* 關於 */}
      <li>
        <Link 
          href='/about'
        >
          <a>About</a>
        </Link>
      </li>

      {/* Google Sign In */}
      <li>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          
          cookiePolicy={'single_host_origin'}
        />
      </li>

    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav > ul {
        padding: 0px 16px;
      }
      li {
        display: flex;
        padding: 0px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 18px;
      }
    `}</style>
  </nav>
)

export default Nav
