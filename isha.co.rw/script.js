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
	document.logo.src = './images/isha.png';

	// In menu section, the first section below navbar
	document.querySelector('#company-title').innerHTML = 'ISHA ';
	document.querySelector('#company-desc').innerHTML = ``;

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `ISHA is a creative agency with interests in audio visual services, branding, design, event planning, product launches, corporate functions and conferences, experiential marketing and private functions. Regardless of whether it’s a diplomatic mission, blue chip company, corporate entity or private individual, we’ll put in all it takes to make your event a memorable one. <br/>
	From inspirational ideas to stunning productions, strong themes and creative programs, you can trust us at ISHA to create memorable experiences that meets our expectations and exceeds yours. Because we look at each event as a custom made project irrespective of size or budget, we believe that you will let us exhibit our passion and dedication to stage your event with a guarantee to surpass your expectations! <br/>True to the word, we are passionate about what we do, and are always growing our team and our client base. 
	If you think we might be a fit to work together in either capacity, please give us a call.`;
	
	// In contact us section
	document.querySelector('#address').innerHTML = 'Kigali/Gasabo ';
	document.querySelector('#email').innerHTML = 'info@isha.co.rw';
	document.querySelector('#phone').innerHTML = '+250788870487';

	// Link to social media

}

// images sliding
let i = 0;
let j = 0;

const images = [
	'./images/vd.jfif'
];


function changeImages() {
	function _(id) {
		return document.getElementById(id);
	}

	if (_('slider_image') !== null) {
		_('slider_image').setAttribute('src', images[i]);
		if (i < images.length - 1) {
			i++;
		} else {
			i = 0;
		}
	}

	setTimeout('changeImages()', 5000);
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
