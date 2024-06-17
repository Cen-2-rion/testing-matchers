// функция сортировки здоровья по убыванию
export default function getSortedHealthHeroes(heroes) {
  return heroes.sort((a, b) => b.health - a.health);
}
