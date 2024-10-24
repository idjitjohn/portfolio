import React from 'react'
import './Text.scss'

const Text = props => {
  const texts = (props.children || '').split('\n')
  return (
    <React.Fragment>
      {texts.map((fragment, index) => {
        return <React.Fragment key={index}>{fragment}{index < texts.length && <br/>}</React.Fragment>
      })}
    </React.Fragment>
  )
}
export default Text