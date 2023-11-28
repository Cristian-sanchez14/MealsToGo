import React from 'react';
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 0px 0px 0px 0px;
`;
const TitleFavourites = styled.Text`
  margin: 10px;
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.title};
`
export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <TitleFavourites variant="caption">Favourites</TitleFavourites>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};