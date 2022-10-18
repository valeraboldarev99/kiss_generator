function test_one(output_array)
{
	output_array.sort();									//предварительная сортировка
	var count_array = [];
	for (var i = 0; i < output_array.length; i++) {			//подсчет количества одинаковых элементов
		if(output_array[i] == output_array[i-1])
		{
			if(!count_array[i])
			{
				count_array[i-1] = 2			//если повторяется в первый раз то количество повторений 2, ключ - значение входного массива, а значение 2(количество повторений)
				count_array[i] = 2			//если повторяется в первый раз то количество повторений 2, ключ - значение входного массива, а значение 2(количество повторений)
			}
			else {
				count_array[i] += 1;			//если уже повторялось, то + 1
			}
		}
		else {
			count_array[i] = 1;				//по умолчанию 1
		}
	}
	drawTest(count_array.filter(Number));
	return count_array;					//уберем пустые эл-ты массива и вернем его
}

function drawTest(my_array)
{
	var myBarchart = new Barchart(
	    {
	        canvas:myCanvas,
	        padding:30,
	        gridScale:1,
	        gridColor: '#000',
	        data:my_array,
	        colors:['#bc500b','#bca500']
	    }
	);
	myBarchart.draw();
}


