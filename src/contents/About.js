import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { aboutImage } from './About.module.css';

const About = () => {
  return (
    <AboutWrapper>
      <StaticImage className={aboutImage} alt="guy sitting" src="../images/about1.jpg" />
      <TextWrapper>
        <GreetingHeader>서민석 인사 올립니다.</GreetingHeader>
        <StyledParagraph>안녕하세요! </StyledParagraph>
        <StyledParagraph>
          2022년 2월 14일, 저에게는 의미가 없는 발렌타인 데이에 UIT 팀으로 입사한 서민석이라고 합니다. 라인에 입사한
          날로 앞으로 의미부여 하려고 합니다.
        </StyledParagraph>
        <StyledParagraph>
          저는 대학에서 철학을 전공하고, 계속 문과쪽 길만 걷다가 서른이 다 되어서야 개발에 입문했습니다. 배우는게
          힘들때도 있었지만, 개발은 저의 행동에 따라 즉각적인 피드백이 있고 문제를 해결하는 과정이 재미있어서 포기하지
          않을 수 있었습니다.
        </StyledParagraph>
        <StyledParagraph>
          저도 나름대로 성장하고 싶은 욕구가 있는데, 개인의 성장은 주위 환경이 굉장히 중요하더라고요. 그래서 라인을
          포함한 탑급 개발 회사에서 실력자들과 함께 꼭 한번 일해보고 싶었습니다. (그중에서도 라인은 특유의 글로벌함
          때문에 가장 오고 싶었는데, 이렇게 입사하게 되서 많이 좋습니다 &#128557; )
        </StyledParagraph>
        <StyledParagraph>
          저는 이제 4년차에 들어가는 개발자인데, 전공자도 아니고 여러분들에 비해 기본기라던가 이해력이라던가 부족한
          부분이 많습니다. 그만큼 열심히, 즐겁게 일해서 도움을 받을 뿐 아니라 힘이 될 수 있는 팀원으로 꼭
          성장하겠습니다!
        </StyledParagraph>
      </TextWrapper>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const TextWrapper = styled.div`
  padding: 40px;
  flex: 0 0 45%;
`;

const GreetingHeader = styled.h1`
  margin-bottom: 20px;
  font-size: 26px;
  line-height: 30px;
  font-weight: 700;
`;

const StyledParagraph = styled.p`
  margin-bottom: 20px;
  line-height: 1.5;
`;

export default About;
