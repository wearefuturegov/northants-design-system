import React, { createContext, useContext } from 'react';
import useLocalStorage from '../../helpers/UseLocalStorage';
import {
  DirectoryShortListContextType,
  DirectoryShortListProviderProps,
  ShortListProps,
} from './DirectoryShortListProvider.types';

const DirectoryShortListContext = createContext<DirectoryShortListContextType>({});

export const DirectoryShortListProvider: React.FunctionComponent<DirectoryShortListProviderProps> = ({ children }) => {
  const [favourites, setFavourites] = useLocalStorage('DirectoryShort', []);

  const toggleFavourites = (
    id: string,
    name: string,
    snippet?: string,
    email?: string,
    website?: string,
    phone?: string
  ) => {
    const updatedFavourites: ShortListProps[] = [...favourites];

    if (isFavourite(id)) {
      const favouriteToRemove = updatedFavourites.find((favourite) => favourite.id === id);
      updatedFavourites.splice(updatedFavourites.indexOf(favouriteToRemove), 1);
    } else {
      updatedFavourites.push({
        id: id,
        name: name,
        snippet: snippet,
        email: email,
        website: website,
        phone: phone,
      });
    }

    setFavourites(updatedFavourites);
  };

  const isFavourite = (id: string) => {
    return typeof favourites.find((favourite) => favourite.id === id) !== 'undefined';
  };

  const value = {
    favourites: {
      favourites: favourites,
      setFavourites: setFavourites,
    },
    toggleFavourites: toggleFavourites,
    isFavourite: isFavourite,
  };

  return <DirectoryShortListContext.Provider value={value}>{children}</DirectoryShortListContext.Provider>;
};

export const useDirectoryShortListContext = () => {
  return useContext(DirectoryShortListContext);
};
