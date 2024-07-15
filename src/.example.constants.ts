/**
 * Ес чо создай в корне проекта constants.ts
 * Я просто не придумал другого способа
 * Нигде не написано и у других не видел
 */


/**
 * Беспричинно лучше не менять
 */
export enum FalsonRoutes {
  HOME = "/",
  COMMANDS = "/commands",
  HISTORY = "/history",
  DONATE = "/donate",
  STATUS = "/status",
}

/**
 * Это URL апишки
 * на конце / не ставить
 */
export const backendUrl = "http://localhost:4000/api";
