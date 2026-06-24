import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import LocationInput from './location-input';
import DateSelectInput from './date-select-input';
import OccupancyInput from './occupancy-input';
import { Button } from '@/components/ui/button';
import dayjs from 'dayjs';

const Search = () => {
  const form = useForm({
    defaultValues: {
      city: '',
      roomsCount: 1,
      bookingDates: {
        from: dayjs().toDate(),
        to: dayjs().add(1, 'day').toDate(),
      },
    },
  });

  function onSubmit(data) {
    const sentData = {
      city: data.city,
      roomsCount: data.roomsCount,
      startDate: dayjs(data.bookingDates.from).format('YYYY-MM-DD'),
      endDate: dayjs(data.bookingDates.to).format('YYYY-MM-DD'),
    };
    console.log('Search data', sentData);
  }

  return (
    <section className="container">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-1 p-1 bg-yellow-300 lg:flex-row lg:items-center h-13 rounded"
        >
          <LocationInput form={form} />
          <DateSelectInput form={form} />
          <OccupancyInput form={form} />
          <Button type="submit" className="text-lg h-full cursor-pointer">
            Search
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default Search;
