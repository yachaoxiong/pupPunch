import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Animated,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Avatar from './Avatar';
import AvatorImage from '@/assets/images/avatar.png';
import {screenWidth} from '@/styles/constant';

const UserInfoDisplay: React.FC = () => {
  const [nickname, setNickname] = useState<string | null>(null);
  const [signature, setSignature] = useState<string | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [borderAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        let storedNickname = await AsyncStorage.getItem('nickname');
        let storedSignature = await AsyncStorage.getItem('signature');
        let storedAvatarUrl = await AsyncStorage.getItem('avatarUrl');

        if (!storedNickname || !storedSignature || !storedAvatarUrl) {
          const response = await fetch('https://api.example.com/user-info');
          const data = await response.json();

          storedNickname = data.nickname;
          storedSignature = data.signature;
          storedAvatarUrl = data.avatarUrl;

          await AsyncStorage.setItem('nickname', storedNickname ?? '');
          await AsyncStorage.setItem('signature', storedSignature ?? '');
          await AsyncStorage.setItem('avatarUrl', storedAvatarUrl ?? '');
        }

        setNickname(storedNickname);
        setSignature(storedSignature);
        setAvatarUrl(storedAvatarUrl);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    // Animate the border color to create a neon light effect
    Animated.loop(
      Animated.sequence([
        Animated.timing(borderAnimation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(borderAnimation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [borderAnimation]);

  const borderColorInterpolation = borderAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#FFD700', '#FFC107', '#FFD700'],
  });

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar imageUrl={avatarUrl} defaultImage={AvatorImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.nickname}>{nickname || 'Aria'}</Text>
        <Text style={styles.signature}>{signature || 'To Touch'}</Text>
      </View>
      <Animated.View
        style={[styles.neonBorder, {borderColor: borderColorInterpolation}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth * 0.65,
    height: screenWidth * 0.3,
    marginTop: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    position: 'relative',
  },
  avatarContainer: {
    width: screenWidth * 0.2,
    height: screenWidth * 0.2,
    borderRadius: (screenWidth * 0.2) / 2,
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    top: -50,
  },
  textContainer: {
    alignItems: 'center',
  },
  nickname: {
    fontSize: screenWidth * 0.04,
    fontWeight: '700',
    color: '#333',
    marginBottom: screenWidth * 0.005,
  },
  signature: {
    fontSize: screenWidth * 0.03,
    color: '#777',
    textAlign: 'center',
  },
  neonBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderWidth: 4,
    borderRadius: 12,
    borderColor: '#FFD700',
    opacity: 0.8,
    zIndex: -1,
  },
});

export default UserInfoDisplay;
