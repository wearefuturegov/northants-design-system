import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';
import EventDetails from './EventDetails';
import { EventDetailsProps } from './EventDetails.types';

describe('Event Details Component', () => {
  let props: EventDetailsProps;

  beforeEach(() => {
    props = {
      startTime: '16 August 2024 10:00:00',
      location: 'The Guildhall',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <EventDetails {...props} />
      </ThemeProvider>
    );

  it('should render date time and location text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('EventDetails');

    expect(component).toHaveTextContent('Friday 16 August 2024 at 10:00 am');
    expect(component).toHaveTextContent('The Guildhall');
  });

  it('should display 12pm and not 00pm for midday', () => {
    props.startTime = '16 August 2024 12:00:00';

    const { getByTestId } = renderComponent();

    const component = getByTestId('EventDetails');

    expect(component).toHaveTextContent('Friday 16 August 2024 at 12:00 pm');
  });

  it('should display the end time when the same day', () => {
    props.endTime = '16 August 2024 13:00:00';

    const { getByTestId } = renderComponent();

    const component = getByTestId('EventDetails');

    expect(component).toHaveTextContent('to 1:00 pm');
  });

  it('should display the end date when not the same day', () => {
    props.endTime = '17 August 2024 13:00:00';

    const { getByTestId } = renderComponent();

    const component = getByTestId('EventDetails');

    expect(component).toHaveTextContent('to Saturday 17 August 2024 at 1:00 pm');
  });

  it('should say all day for all day events', () => {
    props.startTime = '16 August 2024 00:00:00';
    props.endTime = '16 August 2024 23:59:59';

    const { getByTestId } = renderComponent();

    const component = getByTestId('EventDetails');

    expect(component).toHaveTextContent('Friday 16 August 2024 - all day');
  });
});
