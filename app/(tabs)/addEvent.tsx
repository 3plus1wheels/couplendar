import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function addEvent() {
  const [event, setEvent] = useState('');

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold mb-4">Event</Text>

      <View className="w-full max-w-sm gap-4">
        <TextInput
          placeholder="Name"
          value={event}
          onChangeText={setEvent}
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full bg-gray-100 rounded-lg px-4 py-3"
        />
        
        <TouchableOpacity 
          //onPress={handleSignIn}
          className="w-full bg-blue-500 rounded-lg px-4 py-3 mt-4"
        >
          <Text className="text-white text-center font-semibold">Create Event</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}