import './Resume.scss';
import Left from '../../components/Left';
import Right from '../../components/Right'
import Page from '../../components/Page';
import DetailedMissions from '../../components/DetailedMissions';

const lang = 'fr'

function Resume() {
  return (
    <div className="Resume">
      <Page>
        <Left/>
        <Right lang={lang}/>
      </Page>
      {/* <DetailedMissions lang={lang}/> */}
    </div>
  )
}

export default Resume
