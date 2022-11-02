function test_one(output_array)
{
	output_array.sort();									//предварительная сортировка
	//считаем кол-во повторений каждого числа в массиве
	var result = {};
	for (var i = 0; i < output_array.length; ++i)
	{
	    var a = output_array[i];
	    if (result[a] != undefined)
	        ++result[a];
	    else
	        result[a] = 1;
	}
	drawTest(result, 1);
	return result;
}

function test_two(output_array)
{
	var result = [];

	for (var i = 0; i < output_array.length; i++) {
		// console.log(output_array[i] +", " + output_array[i + 1]);
		result[i] = output_array[i] + ", " + output_array[i + 1];				//заполню массив парами, потом колхоз: скопирую с консоли эти пары и в экселе точечный график нарисую)
		// ctx.fillRect(output_array[i], output_array[i + 1], 1,1);				//отрисовка точек(закомител, потому что точки рисует за пределами видимости - очень большие значения)
	}
	console.log(result);
	var test2 = document.getElementById('test2');								//далее просто покажем скрин из excel)))
	test2.style.display = 'block';
}

function test_three(output_array)
{
	var binary_str = '';
	for (var i = 0; i < output_array.length; i++) {
		binary_str += output_array[i].toString(2);								//переводим всю последовательность в бинарный вид и записываем все в строку
	}
	return binary_str;
}

function test_three_1(output_array)
{
	var binary_str = test_three(output_array);

	var count_zero = binary_str.split(/[0]/).length - 1;						//считаем в бинарной последовательности кол-во 0
	var count_one = binary_str.split(/[1]/).length - 1;							//считаем в бинарной последовательности кол-во 1

	console.log('0 - ' + count_zero);
	console.log('1 - ' + count_one);

	var result = [count_zero, count_one];
	drawTest(result, 10000);
}

function test_three_2(output_array)
{
	var binary_str = test_three(output_array);

	var count_zero_zero = binary_str.split(/[00]/).length - 1;				//считаем в бинарной последовательности кол-во пар 00
	var count_zero_one = binary_str.split(/[01]/).length - 1;
	var count_one_zero = binary_str.split(/[10]/).length - 1;
	var count_one_one = binary_str.split(/[11]/).length - 1;

	console.log('00 - ' + count_zero_zero);
	console.log('01 - ' + count_zero_one);
	console.log('10 - ' + count_one_zero);
	console.log('11 - ' + count_one_one);

	var result = [count_zero_zero, count_zero_one, count_one_zero, count_one_one];
	drawTest(result, 10000);
}

function drawTest(my_array, gridScale)
{
	var myBarchart = new Barchart(
	    {
	        canvas:myCanvas,
	        padding:30,
	        gridScale:gridScale,
	        gridColor: '#000',
	        data:my_array,
	        colors:['#bc500b','#bca500']
	    }
	);
	myBarchart.draw();
}
