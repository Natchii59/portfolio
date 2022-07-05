import {
  ProfessionalStyle,
  StartTitle,
  StartZone,
  StartZoneSticky,
  TimeLineZoneSticky,
  TimeLineZone,
  TimeLineContainer,
} from './style';
import { CgScrollV } from 'react-icons/cg';
import { datas } from './datas';

export default function Professional() {
  return (
    <ProfessionalStyle>
      <StartZone>
        <StartZoneSticky>
          <StartTitle>
            Faites défiler la page pour découvrir mon parcours professionel
          </StartTitle>
          <CgScrollV
            style={{
              fontSize: '3rem',
              marginTop: '2rem',
            }}
          />
        </StartZoneSticky>
      </StartZone>

      {datas.map((d, i) => (
        <TimeLineZone key={'professional-' + i} complete={d.complete}>
          <TimeLineZoneSticky>
            <TimeLineContainer complete={d.complete}>
              <h2>{d.title}</h2>
              <p>{d.description}</p>
              <p>{d.date}</p>
            </TimeLineContainer>
          </TimeLineZoneSticky>
        </TimeLineZone>
      ))}
    </ProfessionalStyle>
  );
}
