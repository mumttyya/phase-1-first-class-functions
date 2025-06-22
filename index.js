function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction() {
  return function mySpecificNamedFunction() {
  };
}
function returnsAnAnonymousFunction() {
  return function() {
  };
}