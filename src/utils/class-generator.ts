export type ResponsiveNumber = number | {
  base: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type ResponsiveBool = boolean | {
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
  },
  md: {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
    6: "md:col-span-6",
    7: "md:col-span-7",
    8: "md:col-span-9",
    9: "md:col-span-9",
    10: "md:col-span-10",
    11: "md:col-span-11",
    12: "md:col-span-12",
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
  },
};

const paddingClassesMap: Record<string, string> = {
  true: "p-8 lg:px-2 md:py-16",
  false: "",
};

const responsivePaddingClassesMap: Record<string, Record<string, string>> = {
  base: paddingClassesMap,
  sm: {
    true: "sm:p-8 lg:px-2 md:py-16",
    false: "sm:p-0 lg:p-0",
  },
  md: {
    true: "md:px-8 lg:px-2 md:py-16",
    false: "md:p-0 lg:p-0",
  },
  lg: {
    true: "lg:px-2 lg:py-16",
    false: "lg:p-0",
  },
  xl: {
    true: "xl:px-2 xl:py-16",
    false: "xl:p-0",
  },
};

function mapColSpanToClasses(colSpan: ResponsiveNumber): string[] {
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
  colStartEnd: ResponsiveNumber,
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

export function getColClasses(
  span: ResponsiveNumber,
  start?: ResponsiveNumber,
  end?: ResponsiveNumber
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

export function getCenteredColClasses(span: ResponsiveNumber) {
  const calculateStartEnd = (spanValue: number) => {
    const start = Math.floor((12 - spanValue) / 2) + 1;
    const end = start + spanValue;
    return { start, end };
  };

  const mapSpanToClasses = (spanValue: number, breakpoint?: string) => {
    const { start, end } = calculateStartEnd(spanValue);
    return {
      spanClasses: mapColSpanToClasses({ [breakpoint || 'base']: spanValue } as ResponsiveNumber),
      startClasses: mapColStartEndToClasses({ [breakpoint || 'base']: start } as ResponsiveNumber, colStartClasses, responsiveColStartClasses),
      endClasses: mapColStartEndToClasses({ [breakpoint || 'base']: end } as ResponsiveNumber, colEndClasses, responsiveColEndClasses),
    };
  };

  if (typeof span === 'number') {
    return mapSpanToClasses(span);
  } else {
    const result = {
      spanClasses: [] as string[],
      startClasses: [] as string[],
      endClasses: [] as string[],
    };

    for (const [breakpoint, value] of Object.entries(span)) {
      if (value !== undefined) {
        const classes = mapSpanToClasses(value, breakpoint === 'base' ? undefined : breakpoint);
        result.spanClasses.push(...classes.spanClasses);
        result.startClasses.push(...classes.startClasses);
        result.endClasses.push(...classes.endClasses);
      }
    }

    return result;
  }
}

export function getPaddingClasses(hasPadding: ResponsiveBool): string[] {
  function mapHasPaddingToClasses(value: boolean, breakpoint?: string): string {
    const classMap = breakpoint ? responsivePaddingClassesMap[breakpoint] : paddingClassesMap;
    return classMap[value.toString()];
  }

  if (typeof hasPadding === 'boolean') {
    return [mapHasPaddingToClasses(hasPadding)];
  } else {
    const classes: string[] = [];
    classes.push(mapHasPaddingToClasses(hasPadding.base));

    if (hasPadding.sm !== undefined) {
      classes.push(mapHasPaddingToClasses(hasPadding.sm, 'sm'));
    }
    if (hasPadding.md !== undefined) {
      classes.push(mapHasPaddingToClasses(hasPadding.md, 'md'));
    }
    if (hasPadding.lg !== undefined) {
      classes.push(mapHasPaddingToClasses(hasPadding.lg, 'lg'));
    }
    if (hasPadding.xl !== undefined) {
      classes.push(mapHasPaddingToClasses(hasPadding.xl, 'xl'));
    }

    return classes;
  }
}