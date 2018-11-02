const pad = (num) => num < 10 ? "0"+num : num+""

export const formatDate = (date) => {
	if (!date) {
		date = new Date()
	}

	return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}
export default formatDate