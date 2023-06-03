import './Navbar.css'

const clickedHome = () => {
    alert('Home page is still updating....')
}

const clickedAbout = () => {
    alert('About page is still updating....')
}

const clickedContact = () => {
    alert('Contact page is still updating....')
}

const clickedSkills = () => {
    alert('Skills page is still updating....')
}
const Navbar = () => {
    return(
        <nav class='navbar'>
            <h1 className='home' onClick={clickedHome}>Home</h1>
            <h1 className='about' onClick={clickedAbout}>About</h1>
            <h1 className='contact' onClick={clickedContact}>Contact</h1>
            <h1 className='skills' onClick={clickedSkills}>Skills</h1>
        </nav>
    )
}

export default Navbar;