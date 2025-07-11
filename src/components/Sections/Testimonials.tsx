import {FC, memo} from 'react';

import {testimonial} from '../../data/data';
// import {Testimonial} from '../../data/dataDef';

const Testimonials: FC = memo(() => {
  const {testimonials} = testimonial;

  // If no testimonials, don't render the section
  if (!testimonials.length) {
    return null;
  }

  return (
    <>
    </>
    // <Section noPadding sectionId={SectionId.Testimonials}>
    //   <div
    //     className={classNames(
    //       'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
    //       parallaxEnabled && 'bg-fixed',
    //       {'bg-neutral-700': !imageSrc},
    //     )}
    //     style={imageSrc ? {backgroundImage: `url(${resolveSrc}`} : undefined}>
    //     <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
    //       <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">
    //         <div
    //           className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
    //           onScroll={handleScroll}
    //           ref={scrollContainer}>
    //           {testimonials.map((testimonial, index) => {
    //             const isActive = index === activeIndex;
    //             return (
    //               <Testimonial isActive={isActive} key={`${testimonial.name}-${index}`} testimonial={testimonial} />
    //             );
    //           })}
    //         </div>
    //         <div className="flex gap-x-4">
    //           {[...Array(testimonials.length)].map((_, index) => {
    //             const isActive = index === activeIndex;
    //             return (
    //               <button
    //                 className={classNames(
    //                   'h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4',
    //                   isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-60',
    //                 )}
    //                 disabled={isActive}
    //                 key={`select-button-${index}`}
    //                 onClick={setTestimonial(index)}></button>
    //             );
    //           })}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Section>
  );
});

// const Testimonial: FC<{testimonial: Testimonial; isActive: boolean}> = memo(
//   ({testimonial: {text, name, image}, isActive}) => (
//     <div
//       className={classNames(
//         'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
//         isActive ? 'opacity-100' : 'opacity-0',
//       )}>
//       {image ? (
//         <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
//           <QuoteIcon className="absolute -left-2 -top-2 h-4 w-4 stroke-black text-white" />
//           <img className="h-full w-full rounded-full" src={image} />
//         </div>
//       ) : (
//         <QuoteIcon className="h-5 w-5 shrink-0 text-white sm:h-8 sm:w-8" />
//       )}
//       <div className="flex flex-col gap-y-4">
//         <p className="prose prose-sm font-medium italic text-white sm:prose-base">{text}</p>
//         <p className="text-xs italic text-white sm:text-sm md:text-base lg:text-lg">-- {name}</p>
//       </div>
//     </div>
//   ),
// );

export default Testimonials;
