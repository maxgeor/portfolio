export type Cols = number | {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type FullBleed = boolean | {
  base: boolean;
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
};

const spanClasses: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
  13: "col-span-13",
  14: "col-span-14",
  15: "col-span-15",
  16: "col-span-16",
};

const responsiveSpanClasses: Record<string, Record<string, string>> = {
  base: spanClasses,
  sm: {
    1: "sm:col-span-1",
    2: "sm:col-span-2",
    3: "sm:col-span-3",
    4: "sm:col-span-4",
    5: "sm:col-span-5",
    6: "sm:col-span-6",
    7: "sm:col-span-7",
    8: "sm:col-span-8",
    9: "sm:col-span-9",
    10: "sm:col-span-10",
    11: "sm:col-span-11",
    12: "sm:col-span-12",
    13: "sm:col-span-13",
    14: "sm:col-span-14",
    15: "sm:col-span-15",
    16: "sm:col-span-16",
  },
  md: {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    8: "md:col-span-8",
    9: "md:col-span-9",
    10: "md:col-span-10",
    11: "md:col-span-11",
    12: "md:col-span-12",
    13: "md:col-span-13",
    14: "md:col-span-14",
    15: "md:col-span-15",
    16: "md:col-span-16",
  },
  lg: {
    1: "lg:col-span-1",
    2: "lg:col-span-2",
    3: "lg:col-span-3",
    4: "lg:col-span-4",
    5: "lg:col-span-5",
    6: "lg:col-span-6",
    7: "lg:col-span-7",
    8: "lg:col-span-8",
    9: "lg:col-span-9",
    10: "lg:col-span-10",
    11: "lg:col-span-11",
    12: "lg:col-span-12",
    13: "lg:col-span-13",
    14: "lg:col-span-14",
    15: "lg:col-span-15",
    16: "lg:col-span-16",
  },
  xl: {
    1: "xl:col-span-1",
    2: "xl:col-span-2",
    3: "xl:col-span-3",
    4: "xl:col-span-4",
    5: "xl:col-span-5",
    6: "xl:col-span-6",
    7: "xl:col-span-7",
    8: "xl:col-span-8",
    9: "xl:col-span-9",
    10: "xl:col-span-10",
    11: "xl:col-span-11",
    12: "xl:col-span-12",
    13: "xl:col-span-13",
    14: "xl:col-span-14",
    15: "xl:col-span-15",
    16: "xl:col-span-16",
  },
};

const colStartClasses: Record<number, string> = {
  1: "col-start-1",
  2: "col-start-2",
  3: "col-start-3",
  4: "col-start-4",
  5: "col-start-5",
  6: "col-start-6",
  7: "col-start-7",
  8: "col-start-8",
  9: "col-start-9",
  10: "col-start-10",
  11: "col-start-11",
  12: "col-start-12",
  13: "col-start-13",
  14: "col-start-14",
  15: "col-start-15",
  16: "col-start-16",
};

const responsiveColStartClasses: Record<string, Record<string, string>> = {
  base: colStartClasses,
  sm: {
    1: "sm:col-start-1",
    2: "sm:col-start-2",
    3: "sm:col-start-3",
    4: "sm:col-start-4",
    5: "sm:col-start-5",
    6: "sm:col-start-6",
    7: "sm:col-start-7",
    8: "sm:col-start-8",
    9: "sm:col-start-9",
    10: "sm:col-start-10",
    11: "sm:col-start-11",
    12: "sm:col-start-12",
    13: "sm:col-start-13",
    14: "sm:col-start-14",
    15: "sm:col-start-15",
    16: "sm:col-start-16",
  },
  md: {
    1: "md:col-start-1",
    2: "md:col-start-2",
    3: "md:col-start-3",
    4: "md:col-start-4",
    5: "md:col-start-5",
    6: "md:col-start-6",
    7: "md:col-start-7",
    8: "md:col-start-8",
    9: "md:col-start-9",
    10: "md:col-start-10",
    11: "md:col-start-11",
    12: "md:col-start-12",
    13: "md:col-start-13",
    14: "md:col-start-14",
    15: "md:col-start-15",
    16: "md:col-start-16",
  },
  lg: {
    1: "lg:col-start-1",
    2: "lg:col-start-2",
    3: "lg:col-start-3",
    4: "lg:col-start-4",
    5: "lg:col-start-5",
    6: "lg:col-start-6",
    7: "lg:col-start-7",
    8: "lg:col-start-8",
    9: "lg:col-start-9",
    10: "lg:col-start-10",
    11: "lg:col-start-11",
    12: "lg:col-start-12",
    13: "lg:col-start-13",
    14: "lg:col-start-14",
    15: "lg:col-start-15",
    16: "lg:col-start-16",
  },
  xl: {
    1: "xl:col-start-1",
    2: "xl:col-start-2",
    3: "xl:col-start-3",
    4: "xl:col-start-4",
    5: "xl:col-start-5",
    6: "xl:col-start-6",
    7: "xl:col-start-7",
    8: "xl:col-start-8",
    9: "xl:col-start-9",
    10: "xl:col-start-10",
    11: "xl:col-start-11",
    12: "xl:col-start-12",
    13: "xl:col-start-13",
    14: "xl:col-start-14",
    15: "xl:col-start-15",
    16: "xl:col-start-16",
  },
};

const colEndClasses: Record<number, string> = {
  1: "col-end-1",
  2: "col-end-2",
  3: "col-end-3",
  4: "col-end-4",
  5: "col-end-5",
  6: "col-end-6",
  7: "col-end-7",
  8: "col-end-8",
  9: "col-end-9",
  10: "col-end-10",
  11: "col-end-11",
  12: "col-end-12",
  13: "col-end-13",
  14: "col-end-14",
  15: "col-end-15",
  16: "col-end-16",
};

const responsiveColEndClasses: Record<string, Record<string, string>> = {
  base: colEndClasses,
  sm: {
    1: "sm:col-end-1",
    2: "sm:col-end-2",
    3: "sm:col-end-3",
    4: "sm:col-end-4",
    5: "sm:col-end-5",
    6: "sm:col-end-6",
    7: "sm:col-end-7",
    8: "sm:col-end-8",
    9: "sm:col-end-9",
    10: "sm:col-end-10",
    11: "sm:col-end-11",
    12: "sm:col-end-12",
    13: "sm:col-end-13",
    14: "sm:col-end-14",
    15: "sm:col-end-15",
    16: "sm:col-end-16",
  },
    md: {
    1: "md:col-end-1",
    2: "md:col-end-2",
    3: "md:col-end-3",
    4: "md:col-end-4",
    5: "md:col-end-5",
    6: "md:col-end-6",
    7: "md:col-end-7",
    8: "md:col-end-8",
    9: "md:col-end-9",
    10: "md:col-end-10",
    11: "md:col-end-11",
    12: "md:col-end-12",
    13: "md:col-end-13",
    14: "md:col-end-14",
    15: "md:col-end-15",
    16: "md:col-end-16",
  },
    lg: {
    1: "lg:col-end-1",
    2: "lg:col-end-2",
    3: "lg:col-end-3",
    4: "lg:col-end-4",
    5: "lg:col-end-5",
    6: "lg:col-end-6",
    7: "lg:col-end-7",
    8: "lg:col-end-8",
    9: "lg:col-end-9",
    10: "lg:col-end-10",
    11: "lg:col-end-11",
    12: "lg:col-end-12",
    13: "lg:col-end-13",
    14: "lg:col-end-14",
    15: "lg:col-end-15",
    16: "lg:col-end-16",
  },
    xl: {
    1: "xl:col-end-1",
    2: "xl:col-end-2",
    3: "xl:col-end-3",
    4: "xl:col-end-4",
    5: "xl:col-end-5",
    6: "xl:col-end-6",
    7: "xl:col-end-7",
    8: "xl:col-end-8",
    9: "xl:col-end-9",
    10: "xl:col-end-10",
    11: "xl:col-end-11",
    12: "xl:col-end-12",
    13: "xl:col-end-13",
    14: "xl:col-end-14",
    15: "xl:col-end-15",
    16: "xl:col-end-16",
  },
};

const bleedClassesMap: Record<string, string> = {
  true: "-mx-15",
  false: "mx-0",
};

const responsiveBleedClassesMap: Record<string, Record<string, string>> = {
  base: bleedClassesMap,
  sm: {
    true: "sm:-mx-15",
    false: "sm:mx-0",
  },
  md: {
    true: "md:-mx-15",
    false: "md:mx-0",
  },
  lg: {
    true: "lg:-mx-15",
    false: "lg:mx-0",
  },
  xl: {
    true: "xl:-mx-15",
    false: "xl:mx-0",
  },
};

const bleedPaddingClassesMap: Record<string, string> = {
  true: "px-15",
  false: "px-0",
};

const responsiveBleedPaddingClassesMap: Record<string, Record<string, string>> = {
  base: bleedPaddingClassesMap,
  sm: {
    true: "sm:px-15",
    false: "sm:px-0",
  },
  md: {
    true: "md:px-15",
    false: "md:px-0",
  },
  lg: {
    true: "lg:px-15",
    false: "lg:px-0",
  },
  xl: {
    true: "xl:px-15",
    false: "xl:px-0",
  },
};

function mapColSpanToClasses(colSpan: Cols): string[] {
  if (typeof colSpan === 'number') {
    return [spanClasses[colSpan]];
  } else {
    const classes: string[] = [];
    classes.push(spanClasses[colSpan.base]);
    if (colSpan.sm !== undefined) {
      classes.push(responsiveSpanClasses.sm[colSpan.sm]);
    }
    if (colSpan.md !== undefined) {
      classes.push(responsiveSpanClasses.md[colSpan.md]);
    }
    if (colSpan.lg !== undefined) {
      classes.push(responsiveSpanClasses.lg[colSpan.lg]);
    }
    if (colSpan.xl !== undefined) {
      classes.push(responsiveSpanClasses.xl[colSpan.xl]);
    }
    return classes;
  }
}

function mapColStartEndToClasses(
  colStartEnd: Cols,
  baseClasses: Record<number, string>,
  responsiveClasses: Record<string, Record<number, string>>
): string[] {
  if (typeof colStartEnd === 'number') {
    return [baseClasses[colStartEnd]];
  } else {
    const classes: string[] = [];
    if (colStartEnd.base !== undefined) {
      classes.push(baseClasses[colStartEnd.base]);
    }
    if (colStartEnd.sm !== undefined) {
      classes.push(responsiveClasses.sm[colStartEnd.sm]);
    }
    if (colStartEnd.md !== undefined) {
      classes.push(responsiveClasses.md[colStartEnd.md]);
    }
    if (colStartEnd.lg !== undefined) {
      classes.push(responsiveClasses.lg[colStartEnd.lg]);
    }
    if (colStartEnd.xl !== undefined) {
      classes.push(responsiveClasses.xl[colStartEnd.xl]);
    }
    return classes;
  }
}

function mapBleedAndPaddingClasses(bleed: FullBleed) {
  const bleedClasses: string[] = [];
  const paddingClasses: string[] = [];

  function addClassesForBreakpoints(
    baseClass: string,
    responsiveClassesMap: Record<string, Record<string, string>>,
    breakpoints: {
      sm?: boolean;
      md?: boolean;
      lg?: boolean;
      xl?: boolean;
    },
    targetClasses: string[]
  ) {
    targetClasses.push(baseClass);
    if (breakpoints.sm !== undefined) {
      targetClasses.push(responsiveClassesMap.sm[breakpoints.sm.toString()]);
    }
    if (breakpoints.md !== undefined) {
      targetClasses.push(responsiveClassesMap.md[breakpoints.md.toString()]);
    }
    if (breakpoints.lg !== undefined) {
      targetClasses.push(responsiveClassesMap.lg[breakpoints.lg.toString()]);
    }
    if (breakpoints.xl !== undefined) {
      targetClasses.push(responsiveClassesMap.xl[breakpoints.xl.toString()]);
    }
  }

  if (typeof bleed === 'boolean') {
    bleedClasses.push(bleedClassesMap[bleed.toString()]);
    paddingClasses.push(bleedPaddingClassesMap[bleed.toString()]);
  } else {
    addClassesForBreakpoints(bleedClassesMap[bleed.base.toString()], responsiveBleedClassesMap, bleed, bleedClasses);
    addClassesForBreakpoints(bleedPaddingClassesMap[bleed.base.toString()], responsiveBleedPaddingClassesMap, bleed, paddingClasses);
  }

  return {
    bleedClasses,
    paddingClasses,
  };
}

export function getColClasses(
  span: Cols,
  start?: Cols,
  end?: Cols
) {
  const spanClasses = mapColSpanToClasses(span);
  const startClasses = start ? mapColStartEndToClasses(start, colStartClasses, responsiveColStartClasses) : [];
  const endClasses = end ? mapColStartEndToClasses(end, colEndClasses, responsiveColEndClasses) : [];

  return {
    spanClasses,
    startClasses,
    endClasses,
  };
}

export function getFullBleedClasses(fullBleed: FullBleed) {
  const { 
    bleedClasses, 
    paddingClasses 
  } = mapBleedAndPaddingClasses(fullBleed);

  return {
    bleedClasses,
    paddingClasses,
  };
}
