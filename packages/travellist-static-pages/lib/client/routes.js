secondaryNav.splice(0,0,{
  route: 'aboutPage',
  label: 'About'
});
secondaryNav.splice(0,0,{
  route: 'resourcesPage',
  label: 'resources'
});

secondaryNav.splice(0,0,'aboutMenuItem');
secondaryNav.splice(0,0,'resourcesMenuItem');

Meteor.startup(function () {

  Router.map(function() {

    // About

    this.route('aboutPage', {
      path: '/about',
      fastRender: true
    });

    this.route('resourcesPage', {
      path: '/resources',
      fastRender: true
    });
  });

});