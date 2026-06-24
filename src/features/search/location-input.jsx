import { Button } from '@/components/ui/button';
import { FormControl, FormField } from '@/components/ui/form';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { DESTINATIONS } from '@/config/app.config';
import React, { useState } from 'react';

//implementing shadcn's popover component https://ui.shadcn.com/docs/components/radix/popover

const LocationInput = ({ form }) => {
  const city = form.watch('city');

  const [isPopOverOpen, setIsPopOverOpen] = useState(false);

  function citySelectHandler(e, index) {
    e.preventDefault();
    const selectedDestination = DESTINATIONS[index];
    form.setValue('city', selectedDestination?.city || '');
    setIsPopOverOpen(false);
  }
  return (
    <Popover open={isPopOverOpen} onOpenChange={setIsPopOverOpen}>
      <PopoverTrigger asChild>
        <div className="flex gap-2 items-center px-4 py-2 rounded bg-background lg:min-w-[360px] h-full">
          <Icon
            icon="bed"
            size="24"
            className="text-muted-foreground shrink-0"
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormControl>
                <Input
                  className="w-full h-full px-2 text-sm border-0 focus-visibile:ring-transparent focus-visible:ring-offset-transparent placeholder:font-normal placeholder:text-foreground focus:placeholder-muted-foreground"
                  placeholder="Where are you going"
                  {...field}
                />
              </FormControl>
            )}
          />
          <div
            role="button"
            className={city ? '' : 'opacity-0 pointer-events-none'}
            onClick={(e) => {
              e.preventDefault();
              form.setValue('city', '');
            }}
            aria-label="Clear the city input"
          >
            <Icon
              icon="close"
              size="18"
              className="text-muted-forefround shrink-0"
            />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent
        sideOffset="1"
        align="start"
        className="w-[420px]"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="p-3">
          <p className="text-sm font-semibold">Popular Destinations nearby</p>
        </div>
        <div className="max-h-[330px] overflow-auto">
          {DESTINATIONS.map((destination, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-3 py-2 hover:bg-accent cursor-pointer transition-colors duration-200 border-b border-border"
              onClick={(e) => citySelectHandler(e, index)}
            >
              <Icon icon="location" />
              <div>
                <p className="text-sm font-semibold">{destination.city}</p>
                <p className="text-sm text-muted-foreground">
                  {destination.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LocationInput;
