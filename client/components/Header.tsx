import { COLORS } from "@/constants";
import { HeaderProps } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";

export default function Header({
  title,
  showBack,
  showSearch,
  showCart,
  showMenu,
  showLogo,
}: HeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white">
      {/* Left side  */}
      <View className="flex-row items-center flex-1">
        {showBack && (
          <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
        )}
      </View>

      {/* Right side  */}
      <View></View>
    </View>
  );
}
