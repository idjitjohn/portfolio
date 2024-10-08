const texts = {
  xt: {
    title: '⎎⎍⌰⌰⌇⏁⏃☊☍ ⎅⟒⎐⟒⌰⍜⌿⌿⟒⍀',
    wait: '⟊⎍⌇⏁ ⏃ ⌇⟒⋏☊⍜⋏⎅, ⌿⌰⟒⏃⌇⟒...',
    greeting: `⊑⟟! ⟟'⋔ ⋔⏃⍀⌇⍜⋏,`,
    askmission: '⊑⏃⎐⟒ ⊬⍜⎍ ☌⍜⏁ ⏃ ⋔⟟⌇⌇⟟⍜⋏ ⍙⟟⏁⊑ ⏁⊑⟒⌇⟒ ⌇⏁⏃☊☍⌇ ⏚⟒⌰⍜⍙ ?...',
    contactme: '☊⍜⋏⏁⏃☊⏁ ⋔⟒',
    bestprojs: '⏚⟒⌇⏁ ⌿⍀⍜⟊⟒☊⏁⌇',
    numberprojs: '+18 ⎅⍜⋏⟒',
    fornow: '⎎⍜⍀ 2023',
  },
  en: {
    title: 'Fullstack Developper',
    wait: 'Just a sencond, please...',
    greeting: `Hi! I'm Marson,`,
    askmission: 'My passion will help you pursue your ambitions. Need some help with those stacks?',
    contactme: 'Contact me',
    bestprojs: 'Best projects',
    numberprojs: '+18 Done',
    fornow: 'for 2023',
  },
  fr: {
    title: 'Développeur Fullstack',
    wait: 'Une seconde, svp...',
    greeting: `Je suis Marson,`,
    askmission: 'Ma passion vous aidera à poursuivre vos ambitions. Je peux vous aider sur ces Stacks ...',
    contactme: 'Contactez moi',
    bestprojs: 'Top des projets',
    numberprojs: '+18 Terminés',
    fornow: 'pour 2023',
  }
}


export const getText = (key, lang = 'fr') => texts[lang][key]