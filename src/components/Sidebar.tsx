import React from 'react';
import { Triangle, Image, Palette, Code2, Book, Settings2, LifeBuoy, SquareUser } from 'lucide-react';
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex h-full flex-col border-r">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <Triangle className="size-5 fill-foreground" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2">
        <NavItem icon={<Image className="size-5" />} label="Generate" active />
        <NavItem icon={<Palette className="size-5" />} label="Gallery" />
        <NavItem icon={<Code2 className="size-5" />} label="API" />
        <NavItem icon={<Book className="size-5" />} label="Docs" />
        <NavItem icon={<Settings2 className="size-5" />} label="Settings" />
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        <NavItem icon={<LifeBuoy className="size-5" />} label="Help" />
        <NavItem icon={<SquareUser className="size-5" />} label="Account" />
      </nav>
    </aside>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`rounded-lg ${active ? 'bg-muted' : ''}`}
          aria-label={label}
        >
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={5}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}