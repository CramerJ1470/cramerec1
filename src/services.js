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

export const getKitchens = async (applyFunc) => {
	const url = "https://cramerec1-db.herokuapp.com/api/kitchens";
	const res = await fetch(url);
	await res.json().then((kitchens) => {
		applyFunc([...kitchens]);
	});
};

export const getBaths = async (applyFunc) => {
	const url = "https://cramerec1-db.herokuapp.com/api/baths";
	const res = await fetch(url);
	await res.json().then((baths) => {
		applyFunc([...baths]);
	});
};

export const getInteriors = async (applyFunc) => {
	const url = "https://cramerec1-db.herokuapp.com/api/interiors";
	const res = await fetch(url);
	await res.json().then((interiors) => {
		applyFunc([...interiors]);
	});
};

export const getExteriors = async (applyFunc) => {
	const url = "https://cramerec1-db.herokuapp.com/api/exteriors";
	const res = await fetch(url);
	await res.json().then((exteriors) => {
		applyFunc([...exteriors]);
	});
};

export const getUniquefeatures = async (applyFunc) => {
	const url = "https://cramerec1-db.herokuapp.com/api/uniquefeatures";
	const res = await fetch(url);
	await res.json().then((uniquefeatures) => {
		applyFunc([...uniquefeatures]);
	});
};

export const getBasements = async (applyFunc) => {
	const url = "https://cramerec1-db.herokuapp.com/api/basements";
	const res = await fetch(url);
	await res.json().then((basements) => {
		applyFunc([...basements]);
	});
};