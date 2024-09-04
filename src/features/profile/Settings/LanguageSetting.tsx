import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setLanguage} from '@/store/slices/languageSlice';
import {RootState} from '@/store/store';
import Divider from '@/components/Divider';
import {screenWidth} from '@/styles/constant';
import {useTranslation} from 'react-i18next';

const languages = [
  {code: 'en', label: 'English'},
  {code: 'zh', label: '中文'},
];

const LanguageSetting: React.FC = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootState) => state.language.language,
  );
  const [modalVisible, setModalVisible] = React.useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleLanguageChange = (lang: string) => {
    dispatch(setLanguage(lang));
    closeModal();
  };

  const renderLanguageLabel = (languageCode: string) => {
    switch (languageCode) {
      case 'zh':
        return '中文';
      case 'en':
        return 'English';
      default:
        return 'Unknown';
    }
  };

  return (
    <View>
      <View style={styles.languageRow}>
        <Text style={styles.labelText}>{t('语言')}</Text>
        <TouchableOpacity onPress={openModal} style={styles.openModalButton}>
          <Text style={styles.openModalText}>
            {renderLanguageLabel(selectedLanguage)}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}>
        <Pressable style={styles.modalBackground} onPress={closeModal}>
          <View style={styles.modalContent}>
            {languages.map((lang, index) => (
              <React.Fragment key={lang.code}>
                <TouchableOpacity
                  style={[
                    styles.languageItem,
                    lang.code === selectedLanguage &&
                      styles.selectedLanguageItem,
                  ]}
                  onPress={() => handleLanguageChange(lang.code)}>
                  <Text style={styles.languageLabel}>{lang.label}</Text>
                </TouchableOpacity>
                {index < languages.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  languageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'gray',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  labelText: {
    fontSize: screenWidth * 0.04,
    marginRight: 10,
  },
  openModalButton: {
    borderRadius: 5,
  },
  openModalText: {
    color: '#fff',
    fontSize: screenWidth * 0.04,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  languageItem: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  selectedLanguageItem: {
    backgroundColor: '#f0f0f0',
  },
  languageLabel: {
    fontSize: 18,
  },
});

export default LanguageSetting;
