

/*******************before afters Section ********************* */
export const getBeforeafters = async (applyFunc) => {
	const url = "https://cramerec1-db.herokuapp.com/api/beforeafters";
	const res = await fetch(url);
	await res.json().then((beforeafters) => {
		applyFunc([...beforeafters]);
	});
};
