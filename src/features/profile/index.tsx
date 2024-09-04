import React, {useEffect, useCallback, useMemo} from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  StyleSheet,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '@/store/store';
import {closeDrawer} from '@/store/slices/drawerSlice';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import PersonalInfo from '@/features/profile/personal-info';
import {screenHeight, screenWidth} from '@/styles/constant';
import SettingsIcon from '@/components/svg-icons/SettingsIcon';
import LogoutIcon from '@/components/svg-icons/LogoutIcon';
import {RootStackParamList} from '@/types/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '@/utilize/ThemeProvider';

type SettingsScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;

const ProfileDrawer: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation<SettingsScreenProp>();
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  const translateX = useSharedValue(isOpen ? 0 : -screenWidth);

  useEffect(() => {
    translateX.value = withTiming(
      isOpen ? 0 : -screenWidth,
      {duration: 300},
      () => {
        if (!isOpen) {
          runOnJS(handleCloseDrawer)();
        }
      },
    );
  }, [isOpen]);

  const handleCloseDrawer = useCallback(() => {
    dispatch(closeDrawer());
  }, [dispatch]);

  const panGesture = useMemo(
    () =>
      Gesture.Pan()
        .onUpdate(e => {
          translateX.value = Math.max(
            -screenWidth,
            e.translationX - screenWidth,
          );
        })
        .onEnd(() => {
          if (translateX.value > -screenWidth / 2) {
            translateX.value = withTiming(0, {duration: 300});
          } else {
            translateX.value = withTiming(-screenWidth, {duration: 300}, () => {
              runOnJS(handleCloseDrawer)();
            });
          }
        }),
    [translateX, handleCloseDrawer],
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  const handleSettingsPress = useCallback(() => {
    handleCloseDrawer();
    navigation.navigate('Settings');
  }, [handleCloseDrawer, navigation]);

  const handleLogoutPress = useCallback(() => {
    Alert.alert('确认退出', '你确定要退出登录吗？', [
      {text: '取消', style: 'cancel'},
      {
        text: '退出',
        onPress: () => console.log('用户已退出登录'),
        style: 'destructive',
      },
    ]);
  }, []);

  return (
    <>
      {isOpen && (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => {
              translateX.value = withTiming(-screenWidth, {duration: 300}, () =>
                runOnJS(handleCloseDrawer)(),
              );
            }}
          />
          <GestureDetector gesture={panGesture}>
            <Animated.View
              style={[
                styles.drawer,
                animatedStyle,
                {backgroundColor: theme.background},
              ]}>
              <SafeAreaView style={styles.safeArea}>
                <PersonalInfo />
                <View style={styles.iconRow}>
                  <TouchableOpacity
                    onPress={handleSettingsPress}
                    style={styles.iconButton}>
                    <SettingsIcon size={24} color="#8fe311" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleLogoutPress}
                    style={styles.iconButton}>
                    <LogoutIcon size={24} color="#f70303" />
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </Animated.View>
          </GestureDetector>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight,
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  drawer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: screenWidth * 0.8,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center', // 中心对齐
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
  },
});

export default ProfileDrawer;
