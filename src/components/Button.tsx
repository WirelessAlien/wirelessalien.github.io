import React, { ReactNode } from 'react';
import { cn } from '../utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'tonal' | 'outlined' | 'text';
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function Button({ variant = 'filled', children, className, icon, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none h-10';
  
  const variants = {
    filled: 'bg-primary text-on-primary hover:bg-primary/90 shadow-sm',
    tonal: 'bg-secondary-container text-on-secondary-container hover:bg-secondary-container/80',
    outlined: 'border border-outline text-primary hover:bg-primary/10',
    text: 'text-primary hover:bg-primary/10 px-4',
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)} 
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
