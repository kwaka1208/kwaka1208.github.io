function post( uri )
{
	var form = document.createElement( ‘form’ );
	document.body.appendChild( form );
	var input = document.createElement( ‘input’ );
	input.setAttribute( ‘type’ , ‘hidden’ );
	input.setAttribute( ‘name’ , ‘name’ );
	input.setAttribute( ‘value’ , value );
	form.appendChild( input );
	form.setAttribute( ‘action’ , uri );
	form.setAttribute( ‘method’ , ‘post’ );
	form.submit();
}
