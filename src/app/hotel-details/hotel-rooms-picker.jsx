import Icon from '@/components/ui/icon';
import React from 'react';
const Room = ({ id, type, price, amenities, photos, isSelected }) => {
  return (
    <article>
      {isSelected && (
        <div className='flex items-center gap-1 px-5 py-1 rounded-t-lg bg-brand'> 
          <Icon icon="star" size="18" className="fill-amber-500" />
          <p className="text-xs font-bold text-white uppercase">
            Selected Category
          </p>
        </div>
      )}
    </article>
  );
};

const HotelRoomPicker = ({ rooms }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold">Choose your room</h2>
      <div className="space-y-4">
        {rooms.map((room) => (
          <Room {...room} key={room.id} />
        ))}
      </div>
    </section>
  );
};

export default HotelRoomPicker;
