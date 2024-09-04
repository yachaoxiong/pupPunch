import dayjs, {Dayjs} from 'dayjs';

// 定义 Habit 的类型，包括 id 和 name
interface Habit {
  id: string;
  name: string;
}

// 使用 id 作为键的 Habit 数据类型
interface HabitCompletion {
  completion: number;
}

interface HabitData {
  [date: string]: HabitCompletion;
}

interface HabitsData {
  [id: string]: HabitData;
}

// 假设习惯的 id 和数据
export const habits: Habit[] = [
  {id: '1', name: '跑步'},
  {id: '2', name: '阅读'},
  {id: '3', name: '早起'},
];

export const habitData: HabitsData = {
  '1': {
    // 跑步
    '2024-09-01': {completion: 70},
    '2024-09-02': {completion: 85},
    '2024-09-03': {completion: 40},
    '2024-09-04': {completion: 60},
    '2024-09-05': {completion: 90},
    '2024-09-06': {completion: 30},
    '2024-09-07': {completion: 100},
  },
  '2': {
    // 阅读
    '2024-09-01': {completion: 50},
    '2024-09-02': {completion: 70},
    '2024-09-03': {completion: 90},
    '2024-09-04': {completion: 100},
    '2024-09-05': {completion: 30},
    '2024-09-06': {completion: 50},
    '2024-09-07': {completion: 40},
  },
  '3': {
    // 早起
    '2024-09-01': {completion: 100},
    '2024-09-02': {completion: 95},
    '2024-09-03': {completion: 80},
    '2024-09-04': {completion: 60},
    '2024-09-05': {completion: 75},
    '2024-09-06': {completion: 50},
    '2024-09-07': {completion: 65},
  },
};
