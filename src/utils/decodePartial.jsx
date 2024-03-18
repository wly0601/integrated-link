function decodePartial(input, key){
	const result = input.map((str, index) => {
		const temp = String.fromCharCode(parseInt(str) ^ parseInt(key[index].charCodeAt(0)));
		return temp;
	})

	return result.join("")
};

export default decodePartial;