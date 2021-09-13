import React from "react";
import { Image } from "react-native";
import { HeaderProps } from "../../interfaces/Header.interface";
import {
  HeaderStyle,
  HeaderImage1,
  HeaderImage2,
} from "./styles";

export default function Header({ image, image2 }: HeaderProps) {
  return (
    <HeaderStyle>
      <HeaderImage1>
        <Image source={image} />
      </HeaderImage1>
      <HeaderImage2>
        <Image source={image2} />
      </HeaderImage2>
    </HeaderStyle>
  );
}