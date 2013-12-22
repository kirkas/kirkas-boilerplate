require.config({
  paths: {
    jquery: '../components/jquery/jquery'
  },
  
  shim: {
    jquery: {
      exports: 'jQuery'
    },
  }
});

require(['app'], function(App) {
    App();
});