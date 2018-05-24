var calculadora = ( function(){
    function sum(a, b) {
        return parseInt(a + b);
    }
    
    function rest(a, b) {
        return parseInt(a - b);
    }

    function multiplicar(a, b){
        return parseInt(a * b);
    }

    function dividir (a, b){
        return parseInt(a / b);
    }

    return{
        sum,
        rest,
        multiplicar, 
        dividir
    };

})();


  /*--------*/
if (typeof(module) != 'undefined'){
    module.exports = calculadora;
}