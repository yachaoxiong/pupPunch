// src/navigation/tabs.ts

import HabitScreen from '@src/features/habit/HabitScreen';
import FocusScreen from '@src/features/focus/FocusScreen';
import ToDoScreen from '@src/features/to-do/ToDoScreen';
import SparkScreen from '@src/features/spark/SparkScreen';
import TodayScreen from '@src/features/today/TodayScreen';

import HabitTabIcon from '@src/components/svg-icons/navigation/HabitTabIcon';
import FocusTabIcon from '@src/components/svg-icons/navigation/FocusTabIcon';
import ToDoTabIcon from '@src/components/svg-icons/navigation/ToDoTabIcon';
import SparkTabIcon from '@src/components/svg-icons/navigation/SparkTabIcon';
import TodayTabIcon from '@src/components/svg-icons/navigation/TodayTabIcon';

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
    label: t('灵感'),
  },
];
