import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

interface HabitFormProps {
  formState: {
    habitName: string;
    habitIcon: string;
    backgroundolor: string;
    targetFrequency: number;
  };
  setFormState: (state: any) => void;
}

const HabitForm: React.FC<HabitFormProps> = ({formState, setFormState}) => {
  const handleInputChange = (field: string, value: string) => {
    setFormState({...formState, [field]: value});
  };

  return (
    <View style={styles.formContainer}>
      <Text style={styles.label}>Name:</Text>
      {/* <TextInput
        style={styles.input}
        value={formState.name}
        onChangeText={value => handleInputChange('name', value)}
        placeholder="Enter habit name"
      />
      <Text style={styles.label}>Icon:</Text>
      <TextInput
        style={styles.input}
        value={formState.icon}
        onChangeText={value => handleInputChange('icon', value)}
        placeholder="Enter habit icon"
      />
      <Text style={styles.label}>Color:</Text>
      <TextInput
        style={styles.input}
        value={formState.color}
        onChangeText={value => handleInputChange('color', value)}
        placeholder="Enter habit color"
      />
      <Text style={styles.label}>Target Frequency:</Text>
      <TextInput
        style={styles.input}
        value={formState.targetFrequency.toString()}
        onChangeText={value => handleInputChange('targetFrequency', value)}
        placeholder="Enter target frequency"
        keyboardType="numeric"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
  },
});

export default HabitForm;
