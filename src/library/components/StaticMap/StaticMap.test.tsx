import React from 'react';
import { render } from '@testing-library/react';
import StaticMap from './StaticMap';
import { StaticMapProps } from './StaticMap.types';
import { ThemeProvider } from 'styled-components';
import { west_theme } from '../../../themes/theme_generator';

describe('Test Static Map Component', () => {
  let props: StaticMapProps;

  beforeEach(() => {
    props = {
      centre: '',
      imageAltText: 'An example map',
    };
  });

  const renderComponent = () =>
    render(
      <ThemeProvider theme={west_theme}>
        <StaticMap {...props} />
      </ThemeProvider>
    );

  it('should render static map correctly', () => {
    const { getByTestId, getByRole } = renderComponent();

    const component = getByTestId('StaticMap');
    const image = getByRole('img');

    expect(component).toBeVisible();
    expect(image).toHaveAttribute('alt', 'An example map');
  });
});
