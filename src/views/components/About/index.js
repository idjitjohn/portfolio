import React from 'react'
import './About.scss'

const title = {
  en: "Full Stack Developper",
  fr: "Développeur Full Stack"
}

const About = ({lang}) => {
  return (
    <div className="About">
      <div className="name">Marson LAZA</div>
      <div className="role">{title[lang]}</div>
      <div className="description">
        {
          lang === 'fr' && <React.Fragment>
            Développeur web &amp; Mobile expérimenté avec plus de <strong style={{fontWeight: 600}}>sept(7) ans d'expérience</strong>. Passionné par l'expérience utilisateur (UX) et possède une solide compréhension des principes et des pratiques du développement web et mobile. Toujours à la recherche de nouveaux défis. Toujours prêt à résoudre des problèmes et sans cesse à la recherche de nouveaux axes d'améliorations.
          </React.Fragment>
        }
        {
          lang === 'en' && <React.Fragment>
            Experienced Web Developer with over <strong>seven(7) years</strong>. Have a real passion for UX (User eXperience), with a solid understanding of web and mobile development principles and practices. Always looking for new challenges. Always happy to help others, solve problems and looking for new ways to improve.
          </React.Fragment>
        }
      </div>
    </div>
  )
}
export default About