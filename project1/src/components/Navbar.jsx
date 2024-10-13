const Navbar = () =>{
    return(
        <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="" />
        </div>
        <div>
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button>Log in</button>
        </div>
      </nav>
    )
}

export default Navbar;