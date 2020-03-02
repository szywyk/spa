// boki trójkąta
	//a = 3;
	//b = 4;
	//c = 5;
	//h = 7

	// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
	let a = 3
	let b = 4
	let c = 5
	
	let obliczPole = (a, b, c) => {
		let p = 0.5*(a+b+c)
		let pole = Math.sqrt(p*(p-a)*(p-b)*(p-c))
		return pole
	}

	console.log( `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${obliczPole(a, b, c)}` );
