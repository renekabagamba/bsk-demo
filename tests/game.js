var expect = require('expect.js');
var Game = require('../src/Game.js');
var Frame = require('../src/Frame.js');


suite('Game Tests', function(){
    
    test('Creating a Game', function(done){
        var game = new Game();

        expect(game).to.be.ok();

        done();

    });

/*    test('Game Score', function(done){
        var game = new Game();

        game.addFrame(new Frame(1,5));
        game.addFrame(new Frame(3,6));
        game.addFrame(new Frame(7,2));

        expect(24).to.eql(game.score());

        done();

    });
*/


})