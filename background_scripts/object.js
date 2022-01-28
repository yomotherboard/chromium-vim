Object.remap = (o, fields) => {
	var r = {};
	fields.forEach( (f) => {
		switch(f) {
			case 'url':
				r[f] = o.url;
			default:
				r[f] = o.request[f];
		}
	});
	return r;
};
