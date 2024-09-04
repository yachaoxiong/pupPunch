import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

interface CustomColorPickerProps {
  colors: string[];
  selectedColor: string;
  onSelect: (color: string) => void;
}

const CustomColorPicker: React.FC<CustomColorPickerProps> = ({
  colors,
  selectedColor,
  onSelect,
}) => {
  return (
    <View style={styles.container}>
      {colors.map(color => (
        <TouchableOpacity
          key={color}
          style={[
            styles.colorBlock,
            {backgroundColor: color},
            selectedColor === color && styles.selectedColorBlock,
          ]}
          onPress={() => onSelect(color)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  colorBlock: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedColorBlock: {
    borderColor: '#000',
  },
});

export default CustomColorPicker;
