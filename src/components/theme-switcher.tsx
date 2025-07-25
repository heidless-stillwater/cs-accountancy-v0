'use client';

import * as React from 'react';
import { Moon, Palette, Sun, Check } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const themes = [
  {
    name: 'Professional Blue',
    primary: '#2563EB',
    accent: '#F97316',
    value: 'theme-0',
  },
  {
    name: 'Earthy Slate',
    primary: '#334155',
    accent: '#F59E0B',
    value: 'theme-1',
  },
  {
    name: 'Modern Cyan',
    primary: '#06B6D4',
    accent: '#4338CA',
    value: 'theme-2',
  },
  { name: 'Clean Blue', primary: '#2563EB', accent: '#0EA5E9', value: 'theme-3' },
  { name: 'Fresh Aqua', primary: '#0891B2', accent: '#10B981', value: 'theme-4' },
  { name: 'Bold Indigo', primary: '#3730A3', accent: '#EAB308', value: 'theme-5' },
];

const ThemeIcon = ({ primary, accent }: { primary: string; accent: string }) => (
  <div className="relative h-4 w-6 mr-2">
    <div
      className="absolute h-4 w-4 rounded-full"
      style={{ backgroundColor: primary, right: '0' }}
    />
    <div
      className="absolute h-4 w-4 rounded-full"
      style={{ backgroundColor: accent, left: '0', top: '0', opacity: 0.8 }}
    />
  </div>
);

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = (newTheme: string) => {
    const isDark = resolvedTheme === 'dark';
    if(newTheme.startsWith('theme-')) {
      const darkSuffix = isDark ? '-dark' : '';
      setTheme(`${newTheme}${darkSuffix}`);
    } else {
      setTheme(newTheme);
    }
  };

  const currentBaseTheme = theme?.replace('-dark', '');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-between px-2 py-1.5">
           <Label htmlFor="dark-mode" className="flex items-center gap-2">
            {resolvedTheme === 'dark' ? (
                <Moon className="h-5 w-5" />
            ) : (
                <Sun className="h-5 w-5" />
            )}
            <span className="text-sm">
                {resolvedTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}
            </span>
          </Label>
          <Switch
            id="dark-mode"
            checked={resolvedTheme === 'dark'}
            onCheckedChange={(isDark) => {
              const currentTheme = theme?.replace('-dark', '') || 'system';
              if(isDark) {
                  if(currentTheme.startsWith('theme-')) {
                    setTheme(`${currentTheme}-dark`);
                  } else {
                    setTheme('dark');
                  }
              } else {
                if(currentTheme.startsWith('theme-')) {
                    setTheme(currentTheme);
                  } else {
                    setTheme('light');
                  }
              }
            }}
          />
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Custom Themes</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => handleThemeChange('light')}>
                Default
                {theme === 'light' || theme === 'dark' || theme === 'system' && (
                    <Check className="ml-auto h-4 w-4" />
                )}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {themes.map((t) => (
                <DropdownMenuItem
                  key={t.value}
                  onClick={() => handleThemeChange(t.value)}
                >
                  <ThemeIcon primary={t.primary} accent={t.accent} />
                  <span>{t.name}</span>
                  {currentBaseTheme === t.value && (
                    <Check className="ml-auto h-4 w-4" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
