console.log('\'Allo \'Allo!'); // eslint-disable-line no-console

var player = videojs('example_video_1', { /* Options */ }, function() {
    console.log('Good to go!');

   // this.play(); // if you don't trust autoplay for some reason

    // How about an event listener?
    this.on('ended', function() {
        console.log('awww...over so soon?');
    });
});
