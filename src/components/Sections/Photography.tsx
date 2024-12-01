import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {photograph, SectionId} from '../../data/data';
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
