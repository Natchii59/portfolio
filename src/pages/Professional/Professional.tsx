import {
  ProfessionalStyle,
  StartTitle,
  StartZone,
  StartZoneSticky,
  TimeLineZoneSticky,
  TimeLineZone,
  TimeLineContainer,
  GoToTop,
} from './style';
import { CgScrollV } from 'react-icons/cg';
import { datas } from './datas';
import { useEffect, useState } from 'react';

export default function Professional() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ProfessionalStyle>
      <GoToTop
        style={{
          opacity: scrollPosition > 300 ? '1' : '0',
          zIndex: scrollPosition > 300 ? '100' : '-1',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <StartZone>
        <StartZoneSticky>
          <StartTitle>
            Faites défiler la page pour découvrir mon parcours professionnel
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
