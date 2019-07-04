import * as React from 'react';
import { useRootData } from '../tools/hook';

export const AboutView: React.FC<{ toggle: () => void, isVisible: boolean }> = ({ toggle, isVisible }) => {
  return (
    <section>
      {isVisible && <div><h1>This is a boilerplate project with</h1>
        <ul>
          <li><a href='https://github.com/facebook/react'>React</a></li>
          <li><a href='https://github.com/mobxjs/mobx-state-tree'>mobx-state-tree</a></li>
          <li><a href='https://github.com/mobxjs/mobx-react-lite'>react-mobx-lite</a></li>
          <li><a href='https://github.com/microsoft/TypeScript'>typescript</a></li>
        </ul>
      </div>}    
      <button onClick={() => toggle()}>Toggle about</button>
    </section>
  );
}

export const About = () => {
  const { toggle, isVisible } = useRootData(store => ({
    toggle: store.about.toggle,
    isVisible: store.about.isVisible
  }));
  return <AboutView toggle={toggle} isVisible={isVisible} />
}

export default About;