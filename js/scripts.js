var a = prompt('Podaj wartość a: '),
b = prompt('Podaj wartość b: '),
value = (a*a) + (2 * a * b) - (b*b);

console.log('Wynik: ' + value);

if (value>0){
	console.log('Wynik dodatni');
}
else if (value=0){
	console.log('Wynik zero');
}
else {
	console.log('Wynik ujemny');
}
