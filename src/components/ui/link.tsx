import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';

interface Props {
  href: string;
  external?: boolean;
  className?: string;
  underline?: boolean;
  [key: string]: any;
}

const LinkComponent: React.FC<Props> = ({ href, external, className, underline, children, ...rest }) => {
  return (
    <Link
      href={href}
      target={external ? '_blank' : '_self'}
      className={cn(
        'inline-block transition-colors duration-300 ease-in-out',
        underline &&
          'underline decoration-muted-foreground underline-offset-[3px] hover:decoration-foreground',
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkComponent;