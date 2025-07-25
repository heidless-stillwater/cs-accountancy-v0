import { Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  textClassName?: string;
};

export default function Logo({ className, textClassName }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Briefcase className="h-8 w-8 text-primary" />
      <span
        className={cn(
          'text-xl font-bold font-headline text-primary',
          textClassName
        )}
      >
        CS Accountancy
      </span>
    </div>
  );
}
