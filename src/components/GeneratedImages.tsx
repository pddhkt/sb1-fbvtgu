import React from 'react';
import { Badge } from './ui/badge';

export function GeneratedImages() {
  return (
    <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4">
      <Badge variant="outline" className="absolute right-3 top-3">
        Generated Images
      </Badge>
      <div className="flex-1 overflow-auto">
        {/* Add generated images here */}
        <p className="text-center text-muted-foreground">
          Generated images will appear here
        </p>
      </div>
    </div>
  );
}