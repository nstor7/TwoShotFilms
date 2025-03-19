import { FaInstagram, FaTiktok, FaYoutube, FaVimeoV, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import styles from './socialLinks.module.css';

const SocialLinks = () => {
  const socialMedia = [
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/tu_usuario' },
    { name: 'TikTok', icon: <FaTiktok />, url: 'https://tiktok.com/@tu_usuario' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://youtube.com/@tu_canal' },
    { name: 'Vimeo', icon: <FaVimeoV />, url: 'https://vimeo.com/tu_usuario' },
    { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://linkedin.com/in/tu_perfil' },
    { name: 'Mail', icon: <FaEnvelope />, url: 'mailto:info@[tu-dominio].com' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, url: 'https://wa.me/50712345678' },
  ];

  return (
    <div className={styles.socialLinks}>
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;