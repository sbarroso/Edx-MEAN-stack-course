# Edx-MEAN-stack-course
Edx course involving the Mean stack

************************************
To work behind a proxy
************************************

	npm config set proxy http://proxy.company.com:8888
	npm config set https-proxy http://proxy.company.com:8888
	npm config set strict-ssl false

Add environment variable
	SET http_proxy=http://alca.proxy.corp.sopra:8080

and read it in the code like this:
	var proxy = process.env.http_proxy;


For Superagent:

	var superagent = require('superagent');
	var superagentProxy = require('superagent-proxy');

	superagentProxy(superagent);

	if (proxy) {
		return superagent.get(url).proxy(proxy).end(function(error, res) {
			......
		});
	} else {
		return superagent.get(url).end(function(error, res) {
			......
		});
	}

For Stripe:

	var ProxyAgent = require('https-proxy-agent');
	stripe.setHttpAgent(new ProxyAgent(proxy));

-----------------------------------

For Source Tree to work properly
	git config --global http://alca.proxy.corp.sopra:8080

-----------------------------------

To install Karma in windows

npm install -g karma-cli

-----------------------------------