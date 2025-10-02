import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function SignUp() {
  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold mb-4">Sign Up</Text>
      
      <TouchableOpacity 
        onPress={() => router.back()}
        className="mt-4"
      >
        <Text className="text-blue-500">
          Already have an account? Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
}