# Алгоритм Берлекэмпа-Мэсси для примера
import numpy as np 
import random 

s = [1,1,1,1,1,0,1,0,0,0]
n = len(s)
c = [0 for i in range(n)]; c[0] = 1 
b = [0 for i in range(n)] ; b[0] = 1 
L = 0; m = -1; N  =0; 
# print(b)
while N < n: 
	suma = 0

	for i in range(1 , L + 1) :
		suma = (suma + c[i] * s[N - i]) % 2

	d = (s[N] + suma) % 2

	if d == 1:
		t = [c[i] for i in range(n)]
		print('t')
		print(t)
		for j in range(n - N + m):
			c[N - m + j] = (c[N - m + j] + b[j]) % 2

		if L <= N / 2:
			L = N + 1 - L
			m = N
			b = [t[i] for i in range(n)]
	print(L)
	N += 1
