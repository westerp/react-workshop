export const loadImage = (src) => {
	return new Promise((resolve, reject) => {
		const imgTag = document.createElement('img');
		imgTag.onload = () => resolve(src);
		imgTag.onerror = reject;
		imgTag.src = src;
	});
};