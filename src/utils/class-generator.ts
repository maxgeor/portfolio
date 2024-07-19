export type GridSpan = number | {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type FullBleed = boolean | {
  base: boolean;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

export function generateGridSpanClasses(span: GridSpan) {
  let spanClasses = '';

  switch (typeof span) {
    case 'number':
      spanClasses = `col-span-${span}`;
      break;
    case 'object':
      for (const [breakpoint, cols] of Object.entries(span)) {
        if (breakpoint === 'base') {
          spanClasses += `col-span-${cols} `;
        } else {
          spanClasses += `${breakpoint}:col-span-${cols} `;
        }
      }
      break;
  }

  return spanClasses;
}

export function generateFullBleedClasses(fullBleed: FullBleed) {
  const BLEED = '-mx-15';
  const NO_BLEED = 'mx-0';
  const PADDING = 'px-15';
  const NO_PADDING = 'px-0';

  let bleedClasses = '';
  let paddingClasses = '';

  switch (typeof fullBleed) {
    case 'number':
      bleedClasses = fullBleed ? BLEED : NO_BLEED;
      paddingClasses = fullBleed ? PADDING : NO_PADDING;
      break;
    case 'object':
      for (const [breakpoint, isFullBleed] of Object.entries(fullBleed)) {
        if (breakpoint === 'base') {
          bleedClasses += isFullBleed ? BLEED : NO_BLEED;
          paddingClasses += isFullBleed ? PADDING : NO_PADDING;
        } else {
          bleedClasses += ' ' + `${breakpoint}:${isFullBleed ? BLEED : NO_BLEED}`;
          paddingClasses += ' ' + `${breakpoint}:${isFullBleed ? PADDING : NO_PADDING}`;
        }
      }
      break;
  }

  return { bleedClasses, paddingClasses };
}