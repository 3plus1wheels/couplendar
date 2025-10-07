import { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddEvent() {
  const [event, setEvent] = useState('');
  const [selectedType, setSelectedType] = useState('one-time');
  const [modalVisible, setModalVisible] = useState(false);

  const eventTypes = [
    { label: 'One-time Event', value: 'one-time' },
    { label: 'Daily', value: 'daily' },
    { label: 'Weekly', value: 'weekly' },
    { label: 'Monthly', value: 'monthly' },
    { label: 'Yearly', value: 'yearly' },
  ];

  const handleSelectType = (value: string, label: string) => {
    setSelectedType(value);
    setModalVisible(false);
  };

  const selectedLabel = eventTypes.find(type => type.value === selectedType)?.label;

  return (
    <View className="flex-1 bg-white p-6 justify-center">
      <View className="space-y-6">
        {/* Header */}
        <View className="items-center">
          <Text className="text-2xl font-bold text-gray-900">Add New Event</Text>
        </View>

        {/* Form Fields */}
        <View className="space-y-4">
          {/* Event Name Input */}
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-1">
              Event Name
            </Text>
            <TextInput
              placeholder="Enter event name"
              value={event}
              onChangeText={setEvent}
              autoCapitalize="none"
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-base"
            />
          </View>

          {/* Event Type Selector */}
          <View>
            <Text className="text-sm font-medium text-gray-700 mb-1">
              Event Type
            </Text>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex-row justify-between items-center"
            >
              <Text className="text-base text-gray-900">{selectedLabel}</Text>
              <Text className="text-gray-500">▼</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Modal for Event Type Selection */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableOpacity
            className="flex-1 bg-black/50 justify-end"
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
          >
            <View className="bg-white rounded-t-3xl p-6">
              <View className="w-12 h-1 bg-gray-300 rounded-full self-center mb-4" />
              {eventTypes.map((type) => (
                <TouchableOpacity
                  key={type.value}
                  onPress={() => handleSelectType(type.value, type.label)}
                  className="py-4 border-b border-gray-100"
                >
                  <Text className={`text-base ${
                    selectedType === type.value ? 'text-indigo-600 font-medium' : 'text-gray-900'
                  }`}>
                    {type.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>

        {/* Submit Button */}
        <TouchableOpacity 
          onPress={() => console.log('Creating event:', event, 'Type:', selectedType)}
          className="w-full bg-indigo-600 rounded-xl px-4 py-4 mt-6"
        >
          <Text className="text-white text-center font-semibold text-base">
            Create Event
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}