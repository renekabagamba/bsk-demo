var expect = require('expect.js');
var Frame = require('../src/Frame.js');


suite('Bowling Score Tests', function(){
    
    test('Creating a Frame', function(done){
        var frame = new Frame(2,4);

        expect(2).to.eql(frame.firstThrow());
        expect(4).to.eql(frame.secondThrow());

        done();

    });


    test('Frame score', function(done){
        var frame  = new Frame(3,5);

        expect(8).to.eql(frame.sum());
        done();
    });


    //test('Identify a Spare Frame')


/*    test('Identify a Strike but not a Spare', function(done){
        var frame  = new Frame(10,0);

        expect(frame.isStrike()).to.be.ok();
        expect(frame.isSpare()).not.to.be.ok();

        done();
    });
*/


})