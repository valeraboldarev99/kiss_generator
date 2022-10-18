function xn_generator(start_value, length)
{
	xn = [];
	x = start_value;
	xn.push(x);
	for (var i = 0; i < length - 1; i++) {
		x = (69069 * x + 1) % 2 ** 32;
		xn.push(x);
	}
	console.log('xn = ' + xn);
	return xn;
}

function un_generator(start_value, length)
{
	un = [];
	u = start_value;			//u(n-1)
	cn = 2*u % 2**32;			//rand cn
	un.push(u);
	for (var i = 0; i < length - 1; i++) {
		u2 = (2*u + cn) % 2**32;		//u(n-2)
		u = (2*u + u2 + cn) % 2 ** 32;
		un.push(u);
		it = i - 2;
	}
	console.log('un = ' + un);
    return un;
}

function start()
{
	const start_value = parseInt(document.getElementById('start_value').value|0);
	const length = parseInt(document.getElementById('length').value|0);
	xn_arr = xn_generator(start_value, length);
	un_arr = un_generator(start_value, length);

	const result = [];

	for (var i = 0; i < length; i++)
	{
		const x = xn_arr[i] === undefined ? 0 : xn_arr[i];
		const u = un_arr[i] === undefined ? 0 : un_arr[i];

		result.push((x + u) % 2 ** 32);
	}

	// test_array = [1,1,1,2,3,5,5,6];
	// console.log(test_one(test_array));
	console.log(test_one(result));

	// console.log('result = ' + result);
}