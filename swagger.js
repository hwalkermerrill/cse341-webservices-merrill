const swaggerAutogen = require('swagger-autogen')();

const doc = {
	info: {
		title: 'Contacts API',
		description: 'API documentation for Contacts project'
	},
	host: 'cse341-webservices-merrill.onrender.com',
	schemes: ['https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/contacts.js', './routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
