import HabitScreen from '@/features/habit/HabitScreen';
import FocusScreen from '@/features/focus/FocusScreen';
import ToDoScreen from '@/features/to-do/ToDoScreen';
import SparkScreen from '@/features/spark/SparkScreen';
import TodayScreen from '@/features/today/TodayScreen';

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
  {
    name: 'ToDo',
    component: ToDoScreen,
    icon: ToDoTabIcon,
    label: t('待办'),
  },
  {
    name: 'Today',
    component: TodayScreen,
    icon: TodayTabIcon,
    label: t('今日'),
  },
  {
    name: 'Focus',
    component: FocusScreen,
    icon: FocusTabIcon,
    label: t('专注'),
  },
  {
    name: 'Spark',
    component: SparkScreen,
    icon: SparkTabIcon,
    label: t('便签'),
  },
];
