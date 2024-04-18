//tehdään muuttuja doCoolStuff, jota käytetään html:ssä funktiona
var doCoolStuff = function (){
//määritetään muuttuja tämänhetkinen luokan nimi ja haetaan sille html-elementistä class-name arvo
    var currentClassName = document.getElementById('cool').className;
// jos äsken hakemamme arvo on 'cool', vaihdetaan se 'cool red' .arvoon

    if (currentClassName == 'cool'){
        document.getElementById('cool').className= 'cool red';
    }
//jos äsken hakemamme arvo ei ole 'cool', päivitetään se arvoon 'cool'
    else{
        document.getElementById('cool').className = 'cool';
    }
    /*changing class name
    document.getElementById('cool').className = 'cool red';
    */
}

var car = {
	make: 'VW',
	type: 'Polo',
	color: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat 1',
		'seat 2',
		'seat 3',
		'seat 4'
	],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function () {
		alert('fly');
	},
	switchCar: function (isOn) {
		console.log('turn car '+isOn);
		if (isOn == true) {
			this.isTurnedOn = true;
		} else {
			this.isTurnedOn = false;
		}
	}
};

console.log('hello there friends!');