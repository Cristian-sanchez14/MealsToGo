import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/3d-burgerpic.jpg"),
})`
  flex: 1;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const AccountContainer = styled.View`
  padding: ${(props) => props.theme.space[5]};
  margin-top: ${(props) => props.theme.space[5]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  margin: ${(props) => props.theme.space[1]};
  width: 300px;
`;