import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import dayjs, {Dayjs} from 'dayjs';

interface HabitCompletion {
  completion: number;
}

interface HabitData {
  [date: string]: HabitCompletion;
}

interface HabitsData {
  [id: string]: HabitData;
}

interface Habit {
  id: string;
  name: string;
}

interface HabitListProps {
  habits: Habit[];
  habitData: HabitsData;
  selectedWeek: Dayjs[];
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
            {selectedWeek.map((date: Dayjs) => {
              const formattedDate = date.format('YYYY-MM-DD');
              const completion =
                habitData[item.id]?.[formattedDate]?.completion;
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
