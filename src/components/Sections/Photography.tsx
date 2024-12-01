
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Photograph: FC = memo(() => {

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Photography}>
testetstwstst
    </Section>
  );
});

Photograph.displayName = 'Photograph';
export default Photograph;
