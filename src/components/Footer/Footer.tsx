// Css
import './Footer.css'

// icons
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          Made With ❤ by{' '}
          <a
            href="https://www.linkedin.com/in/abdulrahman-ahmed-424407215/"
            target="_blank"
          >
            Abdelrahman Ahmed
          </a>
        </p>
        <div className="links">
          <a
            href="https://github.com/AbdoDawam"
            target="_blank"
            className="text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulrahman-ahmed-424407215/"
            target="_blank"
            className="text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
