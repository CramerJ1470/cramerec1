/*******************before afters Section ********************* */
export const getBeforeafters = async (applyFunc) => {
	const url = "https://cramerec1-db.herokuapp.com/api/beforeafters";
	const res = await fetch(url);
	await res.json().then((beforeafters) => {
		applyFunc([...beforeafters]);
	});
};

export const getAdditions = async (applyFunc) => {
	const url = "https://cramerec1-db.herokuapp.com/api/additions";
	const res = await fetch(url);
	await res.json().then((additions) => {
		applyFunc([...additions]);
	});
};

export const getDormers = async (applyFunc) => {
	const url = "https://cramerec1-db.herokuapp.com/api/dormers";
	const res = await fetch(url);
	await res.json().then((dormers) => {
		applyFunc([...dormers]);
	});
};