import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Modalize} from 'react-native-modalize';
import CheckIcon from '@/components/svg-icons/CheckIcon';
import CloseIcon from '@/components/svg-icons/CloseIcon';
import HabitForm from '@/features/habit/CreateHabit/HabitForm';
import {screenHeight} from '@/styles/constant';

interface CreateHabitProps {
  isVisible: boolean;
  onClose: () => void;
}

const CreateHabit: React.FC<CreateHabitProps> = ({isVisible, onClose}) => {
  const modalRef = useRef<Modalize>(null);

  const [formState, setFormState] = useState({
    habitName: '',
    habitIcon: '',
    backgroundColor: '',
    targetFrequency: 1,
  });

  const handleSaveHabit = () => {
    onClose();
  };

  useEffect(() => {
    if (isVisible) {
      modalRef.current?.open();
    } else {
      modalRef.current?.close();
    }
  }, [isVisible]);

  return (
    <Modalize
      ref={modalRef}
      modalHeight={screenHeight * 0.6}
      onBackButtonPress={() => {
        onClose();
        return true;
      }}
      onOverlayPress={onClose}
      HeaderComponent={
        <View style={styles.header}>
          <CloseIcon size={30} onPress={onClose} />
          <CheckIcon size={30} onPress={handleSaveHabit} />
        </View>
      }>
      {/* <HabitForm formState={formState} setFormState={setFormState} /> */}
    </Modalize>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '2%',
    paddingHorizontal: '2%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
  },
});

export default CreateHabit;
