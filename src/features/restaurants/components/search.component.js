import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useTheme } from 'react-native-paper';

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const theme = useTheme();


  // search component on map. Able to search location
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer
      shadowColor="#000000"
      shadowOpacity={0.3}
      shadowOffset={{ width: 0, height: 0 }}
    >
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        style={{ backgroundColor: theme.colors.onSecondary }} 
        onIconPress={onFavouritesToggle}
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};