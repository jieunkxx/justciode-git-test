const getEvenNumbers = () => {
	let res = [];
	for(let i=2; i<=50; i+=2) {
		res.push(i);
	}
	
	return res; 
}

module.export = {getEvenNumbers};