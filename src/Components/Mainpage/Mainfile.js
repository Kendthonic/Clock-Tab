import Navbar from "../Navbar/Navbar"
import LeftCorner from "../LeftCorner/LeftCorner";
import './Mainfile.css'

const Mainpage = () => {
    return(
        <div className="main">
            <Navbar />
            <LeftCorner title="webkendev" message="Hi there! I'm Kendrick Bareng. Capable of developing simple to complex projects."/>
            <LeftCorner title="Full Stack Developer" message="Hi there! I'm Kendrick Bareng. Capable of developing simple to complex projects."/>
        </div>
    )
}

export default Mainpage;