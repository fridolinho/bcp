function _(id) {
	return document.getElementById(id);
}
// Include a file
function includeHTML() {
	let z, i, elmnt, file, xhttp;
	/*loop through a collection of all HTML elements:*/
	z = document.getElementsByTagName('*');
	for (i = 0; i < z.length; i++) {
		elmnt = z[i];
		/*search for elements with a certain atrribute:*/
		file = elmnt.getAttribute('w3-include-html');
		if (file) {
			/*make an HTTP request using the attribute value as the file name:*/
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function () {
				if (this.readyState == 4) {
					if (this.status == 200) {
						elmnt.innerHTML = this.responseText;
					}
					if (this.status == 404) {
						elmnt.innerHTML = 'Page not found.';
					}
					/*remove the attribute, and call this function once more:*/
					elmnt.removeAttribute('w3-include-html');
					includeHTML();
				}
			};
			xhttp.open('GET', file, true);
			xhttp.send();
			/*exit the function:*/
			return;
		}
	}

	/**
	 * Here you will be setting information according to the company
	 */

	// In NavBar section add logo image
	document.logo.src = './images/logo.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'CLEAN WORLD ENTERPRISES LTD';
	document.querySelector('#company-desc').innerHTML = `
					<strong>Clean World Enterprises Ltd</strong> is a Company working over the whole country of Rwanda. The Company 
					was registered in Rwanda in 2007. The company was born out of the necessity to fill the gaps identified in the national hygiene and jobs creation. Its drive has been to favourably compete and obtain a large share of the market space. The company's overall objective is to provide unequalled cleaning and gardening services.  
				`;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `<p>
	Since its inception Clean World Enterprises Ltd has provided cleaning and gardening services to  
    different public and private organizations. The company has gained vast experience while dealing with different 
    clients and employing different categories of personnel while dealing with many clients, suppliers and handling  

					`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `<p>It offers different services in the domain of:</P>
a.    General and carpets cleaning
	b.    Gardening, landscaping and paving.
c.    Garbage collection and disposal.
	d.    Interior house designing and execution.
d.    House renovations.
	e.    Plumbing works and services.
	
	`;

	// middle section in about us
	document.aboutimg.src = './images/image4.png';
	document.querySelector(
		'#img-caption'
	).innerHTML = `One of our products and service we deliver`;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `<P>It supplies the following goods:</P>a.Cleaning and gardening products.
	b.      Office and home equipment 
	b.      Curtains and blinds.
	c.      Tiles and carpets.
	d.      Paving and block bricks.
	e.      Stationeries.
	`;

	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali-Rwanda';
	document.querySelector('#street').innerHTML = '6510';
	document.querySelector('#email').innerHTML = 'cleanworlds@yahoo.com';
	document.querySelector('#phone').innerHTML = '+250788690337';

	// Link to social media
	document.querySelector('#whatsapp').href = 'https://wa.me/+250788690337';
}

function click_hamburger() {
	document.getElementById('hamburger_btn').click();
}

function send_email() {
	function _(id) {
		return document.getElementById(id);
	}
	var status = _('response_status');
	if (
		_('email_from').value !== '' &&
		_('email_from').value.includes('@') &&
		_('contact_message').value !== ''
	) {
		status.innerHTML = 'Sending message ...';
		var formdata = new FormData();
		formdata.append('email', _('email_from').value);
		formdata.append('message', _('contact_message').value);
		var ajax = new XMLHttpRequest();
		ajax.open('POST', 'send_email.php');
		ajax.onreadystatechange = function () {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText == 'success') {
					_('email_from').value = '';
					_('contact_message').value = '';
					status.innerHTML = 'Thanks your message is sent';
					setTimeout(function () {
						status.innerHTML = '';
					}, 5000);
				} else {
					status.innerHTML = ajax.responseText;
					_('my_btn').disabled = false;
					setTimeout(function () {
						status.innerHTML = '';
					}, 5000);
				}
			}
		};
		ajax.send(formdata);
	}
}
