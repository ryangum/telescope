Package.describe({summary: "Travelli.st static pages for Telescope"});

Package.on_use(function (api) {

  api.use(['telescope-lib', 'telescope-base'], ['client', 'server']);

  api.use([
    'jquery',
    'underscore',
    'iron-router',
    'templating'
  ], 'client');

  api.add_files([
    'lib/client/routes.js',
    'lib/client/views/aboutPage.html',
    'lib/client/views/resourcesPage.html'
    ], ['client']);

  api.export(['secondaryNav']);
});