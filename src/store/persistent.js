const localStorageKey = "app_state"

export const save = (state) => {
	localStorage.setItem(localStorageKey, JSON.stringify(state))
}
export const load = () => {
	return JSON.parse(localStorage.getItem(localStorageKey) || "{}")
}