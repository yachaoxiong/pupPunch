import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [username, setUsername] = useState('');
  const [signature, setSignature] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const loadUserProfile = async () => {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedSignature = await AsyncStorage.getItem('signature');
      const storedAvatarUrl = await AsyncStorage.getItem('avatarUrl');

      if (storedUsername) setUsername(storedUsername);
      if (storedSignature) setSignature(storedSignature);
      if (storedAvatarUrl) setAvatarUrl(storedAvatarUrl);
    };

    loadUserProfile();
  }, []);

  const handleSave = async () => {
    try {
      if (username.length > 15) {
        Alert.alert('错误', '昵称长度不能超过15个字符');
        return;
      }

      if (signature.length > 50) {
        Alert.alert('错误', '签名长度不能超过50个字符');
        return;
      }

      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('signature', signature);

      Alert.alert('保存成功', '您的信息已保存');
    } catch (error) {
      Alert.alert('错误', '保存信息时出错，请重试');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>昵称</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        maxLength={15}
        placeholder="输入昵称（最多15个字符）"
      />

      <Text style={styles.label}>签名</Text>
      <TextInput
        style={styles.input}
        value={signature}
        onChangeText={setSignature}
        maxLength={50}
        placeholder="输入签名（最多50个字符）"
      />

      <Button title="保存" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default ProfileScreen;
