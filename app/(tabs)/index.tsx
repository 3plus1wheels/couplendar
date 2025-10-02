import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import Day from "../../components/Day";

export default function MyCalendar() {
  const today = new Date().toISOString().split("T")[0];
  const [currentMonth, setCurrentMonth] = useState(today);

  return (
    <SafeAreaView 
      style={styles.container}
      edges={['top', 'left', 'right']}
    >
      <View style={styles.calendarWrapper}>
        <Calendar
          current={currentMonth}
          onMonthChange={(month) => {
            setCurrentMonth(month.dateString);
          }}
          enableSwipeMonths={true}
          hideExtraDays={true}
          dayComponent={({ date, state }) => (
            <Day date={date} state={state} today={today} />
          )}
          markedDates={{
            [today]: { selected: true, marked: true, selectedColor: '#2E66E7' }
          }}
          theme={{
            calendarBackground: '#fff',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
            monthTextColor: '#000',
            dayTextColor: '#000',
            textDisabledColor: '#d9e1e8'
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  calendarWrapper: {
    flex: 1,
    backgroundColor: '#fff'
  }
});