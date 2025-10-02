import { router } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/auth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn(email, password);
  };

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold mb-4">Sign In</Text>

      <View className="w-full max-w-sm gap-4">
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="w-full bg-gray-100 rounded-lg px-4 py-3"
        />
        
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="w-full bg-gray-100 rounded-lg px-4 py-3"
        />

        <TouchableOpacity 
          onPress={handleSignIn}
          className="w-full bg-blue-500 rounded-lg px-4 py-3 mt-4"
        >
          <Text className="text-white text-center font-semibold">Sign In</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity 
        onPress={() => router.push('/(auth)/signup')}
        className="mt-4"
      >
        <Text className="text-blue-500">
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
    </View>
  );
}