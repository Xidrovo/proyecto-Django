BLOCKSIZE = 1024*1024
with open("ayudantes.csv", 'rb') as inf:
	with open("ayudantes.csv", 'wb') as ouf:
		while True:
			data = inf.read(BLOCKSIZE)
			if not data: break
		converted = data.decode('latin1').encode('utf-8')
		ouf.write(converted)
