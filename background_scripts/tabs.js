var Tabs = {
    //update: (o, data) => {
        //chrome.tabs.update(o.sender.tab.id, data);
    //},

    mute: (tab) => {
        chrome.tabs.update(tab.id, {muted: !tab.mutedInfo.muted});
    },

    reply: (o, data, callback = null) => {
        chrome.tabs.sendMessage(o.sender.tab.id, data, callback);
    },

    echo: (o, fields = '') => {
        var r = {};

        if (!fields) {
            r = o.request;
        } else {
            fields.forEach( f => {
                r[f] = o.request[f];
            });}

		chrome.tabs.sendMessage(o.sender.tab.id, r);
    },

	queryActive: (callback) => {
		chrome.tabs.query({active: true, currentWindow: true}, callback);
	},
}
