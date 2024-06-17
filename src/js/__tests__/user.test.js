import { getSortedHealthHeroes } from '../user';

// массив героев
const heroes = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

// проверочный тест
test('sorted array of heroes', () => {
  const result = getSortedHealthHeroes(heroes);
  
  expect(result).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
});
