import { atom } from "recoil";

export const  dVal = navigator.languages[0].startsWith('fr') ? 'en' : 'fr',
              rVal = navigator.languages[0].startsWith('fr') ? 'fr' : 'en'

document.querySelector('html').lang = rVal
export const langState = atom({
  key: 'langState',
  default: {
    initialized: false,
    value: 'xt',
  },
  effects: [
    ({setSelf, onSet, node}) => {
      setSelf((value) => {
        if(!value.initialized){
          setTimeout(() => {
            setSelf({initialized: true, value: rVal})
            document.querySelector('html').classList.add('animated')
          }, 1300)
        }
        return value
      })
    }
  ]

})