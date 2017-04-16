const chai = require('chai');
const assert = chai.assert;

suite('Converter', function(){
  
  suite('Numeric input validation', () => {
    test('Whole number input', (done) => {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '2.3mi';
      assert.equal(convertHandler.getNum(input),2.3);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '4/2lbs';
      assert.equal(convertHandler.getNum(input),2);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '3.5/.5km';
      assert.equal(convertHandler.getNum(input),7);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '2.3/6/2mi';
      assert.equal(convertHandler.getNum(input),'invalid number');
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'kg';
      assert.equal(convertHandler.getNum(input),1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit('5'+ele), ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = '50grams';
      assert.equal(convertHandler.getUnit(input), 'invalid unit');
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      assert.approximately(convertHandler.convert(input[0],input[1]),18.9271,0.1);
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [18.9271, 'L'];
      assert.approximately(convertHandler.convert(input[0],input[1]),5,0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [3.1, 'mi'];
      assert.approximately(convertHandler.convert(input[0],input[1]),5,0.1);
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [5, 'km'];
      assert.approximately(convertHandler.convert(input[0],input[1]),3.1,0.1);
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [20, 'lbs'];
      assert.approximately(convertHandler.convert(input[0],input[1]),9.07185,0.1);
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [9.07185, 'kg'];
      assert.approximately(convertHandler.convert(input[0],input[1]),20,0.1);
      done();
    });
    
  });

});