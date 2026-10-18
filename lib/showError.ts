export const ERROR_EVENT = "landing:error";

/** Показує повідомлення про помилку у спливаючому вікні (його малює <ErrorToast />). */
export function showError(message: string) {
  window.dispatchEvent(new CustomEvent<string>(ERROR_EVENT, { detail: message }));
}
