import clsx from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classes: ClassValue[]) => [...new Set(twMerge(clsx(classes)).split(' '))].join(' ');
