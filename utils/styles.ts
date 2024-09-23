import clsx from 'clsx';
import type { ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const twMerge = extendTailwindMerge<'color-scheme'>({
  extend: {
    classGroups: {
      'color-scheme': [(cls: string) => /^color-scheme-/.test(cls)],
    },
  },
});

export const cn = (...classes: ClassValue[]) => [...new Set(twMerge(clsx(classes)).split(' '))].join(' ');
