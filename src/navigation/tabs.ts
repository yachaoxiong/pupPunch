import HabitScreen from '@/features/habit/HabitScreen';

import HabitTabIcon from '@/components/svg-icons/navigation/HabitTabIcon';
import FocusTabIcon from '@/components/svg-icons/navigation/FocusTabIcon';
import ToDoTabIcon from '@/components/svg-icons/navigation/ToDoTabIcon';
import SparkTabIcon from '@/components/svg-icons/navigation/SparkTabIcon';
import TodayTabIcon from '@/components/svg-icons/navigation/TodayTabIcon';

export const createTabs = (t: (key: string) => string) => [
  {
    name: 'Habit',
    component: HabitScreen,
    icon: HabitTabIcon,
    label: t('习惯'),
  },
];
