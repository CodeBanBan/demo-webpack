import moment from 'moment';

function greet() {
	var day = moment().format('dddd');
	console.log('Have a great day ' + day + '!');
}

export default greet;
