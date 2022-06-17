import React, { createContext, useContext, useState } from 'react';
import {
  PostCodeAddressProviderProps,
  PostCodeAddressContextType,
  ResultsProps,
} from './PostCodeAddressProvider.types';

const PostCodeAddressContext = createContext<PostCodeAddressContextType>({});

export const defaultResults: ResultsProps = {
  addresses: [],
  postcode: '',
  records_in_payload: null,
  requested_page: null,
  total_pages: null,
  total_records: null,
};

export const PostCodeAddressProvider: React.FunctionComponent<PostCodeAddressProviderProps> = ({ children }) => {
  const [postcode, setPostCode] = useState<PostCodeAddressContextType['postcodeValue']['postcode']>('');
  const [results, setResults] = useState<PostCodeAddressContextType['resultsValue']['results']>(defaultResults);

  const value: PostCodeAddressContextType = {
    postcodeValue: {
      postcode: postcode,
      setPostcode: setPostCode,
    },
    resultsValue: {
      results: results,
      setResults: setResults,
    },
  };

  return <PostCodeAddressContext.Provider value={value}>{children}</PostCodeAddressContext.Provider>;
};

export const usePostcodeAddressContext = () => {
  return useContext(PostCodeAddressContext); // as PostCodeAddressContextType;
};
