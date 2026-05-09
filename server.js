const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    // ROOT
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        return res.end('Server is running...');
    }

    // GET API
    if (req.url.startsWith('/api/user') && req.method === 'GET') {

    	const urlObj = new URL(req.url, `http://${req.headers.host}`);

    	const name = urlObj.searchParams.get('name') || 'Guest';
    	const age = urlObj.searchParams.get('age') || 'N/A';

    	res.writeHead(200, {'Content-Type': 'application/json'});

    	return res.end(JSON.stringify({
        	status: 200,
        	message: 'User fetched successfully',
        	user: {
            		name,
            		age
        	}
    	}));
    }

    // POST API
    if (req.url === '/api/user' && req.method === 'POST') {
        return res.end(JSON.stringify({
            message: 'POST working'
        }));
    }

    // DEFAULT
    res.writeHead(404);
    res.end('Route not found');

});

server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});