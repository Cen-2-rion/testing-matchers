// функция сортировки здоровья по убыванию
export function getSortedHealthHeroes(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
