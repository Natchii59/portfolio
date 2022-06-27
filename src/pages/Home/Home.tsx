import {
  HomeContainer1,
  HomeProfilePicture,
  HomeStyle,
  HomeText,
  HomeTimeLine,
  HomeTLTimestamp,
  HomeTitle,
  HomeTitleDesc,
  HomeTLStatus,
  HomeTLLi,
  HomeContainer2,
} from './style';
import photo from '../../assets/profile-picture-without-bg.png';
import { getAge } from '../../utils/functions';
import { timelineDatas } from './datas';

export default function Home() {
  return (
    <HomeStyle>
      <HomeContainer1
        style={{
          background:
            'linear-gradient(0deg, var(--onyx) 0%, var(--mint-cream) 90%)',
        }}
      >
        <HomeText>
          <HomeTitle>Nathan Caron, alias Natchi</HomeTitle>

          <p>
            Hello (World!), je m'appelle Nathan, j'ai {getAge()}ans, et je suis
            étudiant en BTS SIO et développeur FullStack.
          </p>
        </HomeText>

        <HomeProfilePicture src={photo} alt='Profile' />
      </HomeContainer1>

      <HomeContainer2>
        <HomeTitleDesc>
          Voici une petite frise chronologique me concernant
        </HomeTitleDesc>

        <HomeTimeLine>
          {timelineDatas.map((t, i) => (
            <HomeTLLi key={'timeline-' + i}>
              <HomeTLTimestamp complete={t.complete}>
                <span>{t.date}</span>
              </HomeTLTimestamp>
              <HomeTLStatus complete={t.complete}>
                <h4>{t.content}</h4>
              </HomeTLStatus>
            </HomeTLLi>
          ))}
        </HomeTimeLine>
      </HomeContainer2>
    </HomeStyle>
  );
}
