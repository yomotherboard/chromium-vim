Config = {
    merge: (path, o='') => {
        return httpRequest({ url: path }).then( (data) => {
            // TODO: Clean this up!
            var added = window.parseConfig(data);

            if (added.error) {
                console.error(`parse error on line ${added.error.lineno} of ${path}: ${added.error.message}`);
                o.callback({
                    code: -2,
                    error: added.error,
                    config: settings
                });
                return;
            }

            added = added.value;
            added.localconfig = added.localconfig || false;

            var current = Object.clone(settings);
            var defaults = Object.clone(defaultSettings);
            added.localconfig = current.localconfig;

            Config.add(defaults, added);
            console.log(path);
            if (current.localconfig) {
                if (!settings.MAPPINGS) { settings = Object.clone(defaults); }

                Object.merge(settings, current);
                
                Config.add(settings, added);
            } else {
                Object.merge(settings, added);
                settings.RC = current.RC;
            }

            if (o) {
                o.callback({
                    code: 0,
                    error: null,
                    config: settings
                });
            }

            return Promise.resolve('');
        }, function() {
            if (o) {
                o.callback({
                    code: -1,
                    error: null,
                    config: settings
                });
            }
        });
    },

    add: (a, b) => {
        Object.keys(b).forEach((key) => {
            if (typeof b[key] === 'object' && !Array.isArray(b[key]) &&
                typeof a[key] === 'object' && !Array.isArray(a[key])) {
                Config.add(a[key], b[key]);
            } else {
                switch ( key ) {
                    case 'MAPPINGS':
                        a.MAPPINGS += '\n' + b.MAPPINGS;
                        break;
                    case 'RC':
                        a.RC += '\n' + b.RC;
                        break;
                    default:
                        a[key] = b[key];
                }
            }
        });
    },
    reset: () => {
        var localconfig = settings.localconfig;
        settings = Object.clone(defaultSettings);
        settings.localconfig = localconfig;
    }
}
