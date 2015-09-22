'use strict';
/* global Package */

Package.describe({
	name: 'anthonyastige:ground-user',
	summary: 'Get logged user\'s data available on startup and offline.',
	version: '0.1.3',
	git: 'https://github.com/anthonyastige/meteor-ground-user.git'
});

Package.onUse(function(api, where) {
	api.use([
		'accounts-base@1.2.0',
		'ground:db@0.3.6',
		'mongo@1.1.1',
		'underscore@1.0.3'
	], 'client');

	api.addFiles('client/export.js', 'client');
	api.addFiles('client/lib.js', 'client');
	api.addFiles('server/lib.js', 'server');

	api.export('GroundUser', 'client');
});
