/**
 * Клонирование простого объекта
 * @param {object} object
 * @returns {object}
 */
export function clone(object) {
  return JSON.parse(JSON.stringify(object));
}

/**
 * Возвращает промис, который зарезолвится через заданное количество милисекунд
 * @param {number} time - время в милисекундах
 * @returns {Promise<unknown>}
 */
export function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

/**
 * Функция заменяет вхождения шаблонных параметров вида {someParam} на соответствующие значения из replacer
 * Например, имея string 'Цена {price} руб.' и replacer { price: 100 } на выходе получится 'Цена 100 руб.'
 * @param {string} string
 * @param {object} replacer
 * @returns {string}
 */
export function replaceParams(string, replacer) {
  return (string || '').replace(/({[^}]+})/g, (match) => {
    const paramName = match.slice(1, -1);

    return replacer && ['string', 'number'].includes(typeof replacer[paramName])
      ? replacer[paramName]
      : '';
  });
}

/**
 * Отправка цели в метрику
 * @param {string} name - название цели
 * @param {object} [params] - параметры визита
 */
export function reachGoal(name, params = {}) {
  if (window.ym) {
    window.ym(12345678, 'reachGoal', name, params);
  }
}

/**
 * Преобразование camelCase в kebab-case
 * @param {string} string
 * @returns {string}
 */
export function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Получает день месяца по timestamp
 * @param {number} timestamp
 * @returns {number}
 */

export function getDay(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.getDate();
}

/**
 * Получает месяц по timestamp
 * @param {number} timestamp
 * @returns {string}
 */
export function getMonth(timestamp) {
  const date = new Date(timestamp * 1000);
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];
  return months[date.getMonth()];
}
