import logoImg from '../../assets/medicare-logo.png'

const Logo = ({ className = '', alt = 'Medicare Wellington Logo' }) => {
  return (
    <img src={logoImg} alt={alt} className={className} />
  )
}

export default Logo
