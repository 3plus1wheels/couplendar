import { useRouter, useSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AgendaScreen() {
  const params = useSearchParams();
  const router = useRouter();
  const selectedDate = params.date; // Expecting date in 'YYYY-MM-DD' format

  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Agenda
        items={{
          [selectedDate]: [{ name: 'Sample Event 1' }, { name: 'Sample Event 2' }],
        }}
        selected={selectedDate}
        renderItem={renderItem}
        renderEmptyData={() => (
          <View style={styles.emptyData}>
            <Text>No events for this day.</Text>
          </View>
        )}
        theme={{
          agendaDayTextColor: '#000',
          agendaDayNumColor: '#000',
          agendaTodayColor: '#2E66E7',
          agendaKnobColor: '#2E66E7'
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginRight: 10,
    marginTop: 17,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  emptyData: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
});   