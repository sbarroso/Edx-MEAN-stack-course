var ProxyAgent = require('https-proxy-agent');
var superagent = require('superagent');
var superagentProxy = require('superagent-proxy');

superagentProxy(superagent);

module.exports = function() {

	var proxy = process.env.http_proxy || 'http://alca.proxy.corp.sopra:8080';
	proxy = undefined;

	var initStripe = function(stripe) {
		if (proxy) {
			stripe.setHttpAgent(new ProxyAgent(proxy));
		}	
	};

	var getSuperAgent = function(url) {
		if (proxy) {
			return superagent.get(url).proxy(proxy);
		} else {
			return superagent.get(url);
		}
	};

	var postSuperAgent = function(url) {
		if (proxy) {
			return superagent.post(url).proxy(proxy);
		} else {
			return superagent.post(url);
		}
	};

	return {
		initStripe: initStripe,
		getSuperAgent: getSuperAgent,
		postSuperAgent: postSuperAgent
	};
};
