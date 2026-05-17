const knownNameFunction = (req, res, next) => {
	// res.json('Alexander Walker Thoene');
	res.redirect('/api-docs');
}

module.exports = { knownNameFunction };