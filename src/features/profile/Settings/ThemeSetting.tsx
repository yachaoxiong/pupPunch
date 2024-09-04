import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme} from '@/store/slices/themeSlice';
import {ThemeType} from '@/store/slices/themeSlice';
import {RootState} from '@/store/store';
import {useTranslation} from 'react-i18next';
import Divider from '@/components/Divider';

const themes = [
  {code: 'sunnyDay', label: 'Sunny Day'},
  {code: 'midnightBlue', label: 'Midnight'},
  {code: 'forestGreen', label: 'Forest'},
  {code: 'coolBreeze', label: 'Cool Breeze'},
];

const SettingsScreen: React.FC = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const selectedTheme = useSelector((state: RootState) => state.theme.theme);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleThemeChange = (theme: ThemeType) => {
    dispatch(setTheme(theme));
    closeModal();
  };

  const renderThemeLabel = (themeCode: ThemeType) => {
    const theme = themes.find(t => t.code === themeCode);
    return theme ? theme.label : 'Unknown';
  };

  return (
    <View>
      <View style={styles.themeRow}>
        <Text style={styles.labelText}>{t('Theme')}</Text>
        <TouchableOpacity onPress={openModal} style={styles.openModalButton}>
          <Text style={styles.openModalText}>
            {renderThemeLabel(selectedTheme)}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={modalVisible}
        animationType="slide"
        onRequestClose={closeModal}>
        <Pressable style={styles.modalBackground} onPress={closeModal}>
          <View style={styles.modalContent}>
            {themes.map((theme, index) => (
              <React.Fragment key={theme.code}>
                <TouchableOpacity
                  style={[
                    styles.themeItem,
                    theme.code === selectedTheme && styles.selectedThemeItem,
                  ]}
                  onPress={() => handleThemeChange(theme.code as ThemeType)} // Type assertion
                >
                  <Text style={styles.themeLabel}>{theme.label}</Text>
                </TouchableOpacity>
                {index < themes.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  themeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'gray',
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  labelText: {
    fontSize: 16,
    marginRight: 10,
  },
  openModalButton: {
    borderRadius: 5,
  },
  openModalText: {
    color: '#fff',
    fontSize: 16,
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
  themeItem: {
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  selectedThemeItem: {
    backgroundColor: '#f0f0f0',
  },
  themeLabel: {
    fontSize: 18,
  },
});

export default SettingsScreen;
