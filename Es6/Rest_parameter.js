//es5

// function sum( a, b, c, d, e, f ) {
//   console.log( a + b + c + d + e + f );
// }

// sum( 1, 2, 3, 4, 5, 6 );

//Rest Parameter

// function sum( ...inputs ) {
//   console.log( inputs );
//   console.log( ...inputs );
//   let total = 0;
//   for ( let i of inputs ) {
//     total += i;
//   }
//   console.log( total );
// }

// sum( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 );


//Rest with function and other arguments

function fun( a, b, ...c ) {
  console.log( `${a} ${b}` );
  console.log( c );
  console.log( c[0] );
  console.log( c.length );
  console.log( c.indexOf( 'Edan' ) )
}
fun( 'Ronldo', 'Neymar', 'Pele', 'Messi', 'Edan' );
