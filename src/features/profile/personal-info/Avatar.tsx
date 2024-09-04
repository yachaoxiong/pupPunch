import React, {useCallback, useState} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Text,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {screenHeight, screenWidth} from '@/styles/constant';
import {useTranslation} from 'react-i18next';

interface AvatarProps {
  sizeMultiplier?: number;
  defaultImage: any;
  imageUrl?: string | null;
}

const Avatar: React.FC<AvatarProps> = ({
  sizeMultiplier = 0.2,
  defaultImage,
  imageUrl,
}) => {
  const {t} = useTranslation();
  const avatarSize = screenWidth * sizeMultiplier;
  const [avatar, setAvatar] = useState<{uri: string} | null>(
    imageUrl ? {uri: imageUrl} : defaultImage,
  );
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSelectImage = useCallback(() => {
    ImagePicker.openPicker({
      width: avatarSize * 2, // 裁剪宽度
      height: avatarSize * 2, // 裁剪高度
      cropping: true, // 启用裁剪
      cropperCircleOverlay: true, // 圆形裁剪
    })
      .then(image => {
        setAvatar({uri: image.path});
      })
      .catch(error => {
        Alert.alert('Error', error.message || 'Failed to select image.');
        console.log('Image selection error:', error);
      });
  }, [avatarSize]);

  const toggleModal = useCallback(() => {
    setModalVisible(prev => !prev);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Image
          source={avatar || defaultImage}
          style={[
            styles.avatar,
            {
              width: avatarSize,
              height: avatarSize,
              borderRadius: avatarSize / 2,
            },
          ]}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={closeModal}
        animationType="fade">
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                source={avatar || defaultImage}
                style={[
                  styles.modalImage,
                  {
                    width: screenWidth * 0.6,
                    height: screenWidth * 0.6,
                    borderRadius: screenWidth * 0.3,
                  },
                ]}
                resizeMode="cover"
              />
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={handleSelectImage}>
                <Text style={styles.uploadButtonText}>{t('上传新头像')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 2,
    borderColor: '#ddd',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  modalContent: {
    alignItems: 'center',
  },
  modalImage: {
    marginBottom: screenHeight * 0.03,
    borderWidth: 2,
    borderColor: '#fff',
  },
  uploadButton: {
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.05,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: screenHeight * 0.03,
    backgroundColor: '#000',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: screenWidth * 0.04,
  },
});

export default Avatar;
