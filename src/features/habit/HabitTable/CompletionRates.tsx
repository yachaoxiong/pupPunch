import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Dayjs} from 'dayjs';

interface HabitListProps {
  habits: {id: string; name: string}[];
  selectedWeek: Dayjs[];
  habitData: {[habitId: string]: {[date: string]: {completion: number}}};
}

const HabitList: React.FC<HabitListProps> = ({
  habits,
  selectedWeek,
  habitData,
}) => {
  return (
    <FlatList
      data={habits}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text>{item.name}</Text>
          <Text>
            {selectedWeek.map(date => {
              const dateString = date.format('YYYY-MM-DD');
              const completion = habitData[item.id]?.[dateString]?.completion;
              return ` ${completion !== undefined ? completion : 0}%`;
            })}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default HabitList;
