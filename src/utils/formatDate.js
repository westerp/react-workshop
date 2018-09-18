const pad = (num) => num < 10 ? "0"+num : num+""

export const formatDate = (date) => {
	if (!date) {
		date = new Date()
	}

	return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDay())}`
}
export default formatDate