import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

export function ImageGenerationForm() {
  return (
    <div className="relative flex flex-col items-start gap-8">
      <form className="grid w-full items-start gap-6">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Image Settings
          </legend>
          <div className="grid gap-3">
            <Label htmlFor="prompt">Prompt</Label>
            <Textarea
              id="prompt"
              placeholder="Describe the image you want to generate..."
              className="min-h-[9.5rem]"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="style">Style</Label>
            <Select>
              <SelectTrigger id="style">
                <SelectValue placeholder="Select a style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realistic">Realistic</SelectItem>
                <SelectItem value="cartoon">Cartoon</SelectItem>
                <SelectItem value="abstract">Abstract</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="width">Width</Label>
              <Input id="width" type="number" placeholder="512" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="height">Height</Label>
              <Input id="height" type="number" placeholder="512" />
            </div>
          </div>
        </fieldset>
        <Button type="submit" className="w-full">
          Generate Image
        </Button>
      </form>
    </div>
  );
}