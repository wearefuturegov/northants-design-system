import { SummaryRowProps } from '../../components/SummaryList/SummaryList.types';
import { LocationProps } from './DirectoryService.types';

export const transformService = (email: string, url: string): SummaryRowProps[] => {
  const service: SummaryRowProps[] = [];

  if (email) {
    service.push({
      term: 'Email',
      detail: email,
    });
  }

  if (url) {
    service.push({
      term: 'Website',
      detail: url,
    });
  }

  return service;
};

export const transformLocation = (location: LocationProps): SummaryRowProps[] => {
  const terms = [
    {
      term: 'Name',
      detail: location.name,
    },
    {
      term: 'Description',
      detail: location.description,
    },
  ];

  location.physical_addresses.forEach((address) => {
    terms.push({
      term: 'Address',
      detail: `${address.address_1}
                    <br />
                    ${address.city}
                    <br />
                    ${address.state_province}
                    <br />
                    ${address.postal_code}
                    <br />
                    ${address.country}`,
    });
  });

  return terms;
};
