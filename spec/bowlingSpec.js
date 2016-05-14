describe('Bowling', function() {
  var bowling;
  beforeEach(function() {
    bowling = new Bowling();
  });
  describe('score', function() {
    it('starts with a score of 0', function() {
      expect(bowling.score()).toEqual(0);
    });

    it('can store the score for the first ball of the first frame', function() {
      bowling.hit(5);
      bowling.hit(4);
      expect(bowling._scoreSheet.frame1).toEqual([5,4]);
    });
  });

  describe('#turn tracking', function() {
    it('can return the current frame', function() {
      expect(bowling.currentTurn()).toEqual(1);
    });

    it('can return the current ball', function() {
      expect(bowling.currentBall()).toEqual(0);
    });
  });

  describe('#ballCheck', function() {
    it('sets the ball to 0 after the 2nd non strike', function() {
      bowling.hit(5);
      bowling.hit(4);
      expect(bowling.currentBall()).toEqual(0);
    });
    it('sets the turn to 2 after the 2nd non strike', function() {
      bowling.hit(5);
      bowling.hit(4);
      expect(bowling.currentTurn()).toEqual(2);
    });
  })

  describe('#strikeCheck', function() {
    it('sets to new turn after a strike on first ball', function() {
      bowling.hit(10);
      expect(bowling.currentTurn()).toEqual(2);
    })

  })
})
