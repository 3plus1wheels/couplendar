import React, { memo } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";

// Calculate fixed dimensions
const { width } = Dimensions.get("window");
const CELL_SIZE = width / 7 - 8; // 7 days per week, minus margins

const Day = memo(({ date, state, today }: any) => {
  const isToday = date.dateString === today;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: isToday ? "#4f46e5" : "#fff",
          borderColor: isToday ? "#4f46e5" : "#e5e7eb",
        }
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: state === "disabled" 
              ? "#9ca3af" 
              : isToday 
              ? "#fff" 
              : "#111827",
          }
        ]}
      >
        {date.day}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    width: CELL_SIZE,
    height: CELL_SIZE * 1.75,
    margin: 4,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  }
});

export default Day;