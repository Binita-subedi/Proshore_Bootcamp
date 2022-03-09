// function mult( a, b ) {
//   b = ( typeof b !== 'undefined' ) ? b : 2
//   console.log( a * b );
// }
// mult( 4 )

// function mult( a, b = 4 ) {
//   console.log( a * b );
// }
// mult( 4 );

//default parameter in ES6

const mult = ( a, b = 4 ) => {
  console.log( `The multiple of two no. is ${a * b}` );
}
mult( 5 );



