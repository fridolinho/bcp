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
	document.querySelector('#company-title').innerHTML = 'PRAYER WARRIORS NETWORK INTERNATIONAL MINISTRY (PWNIM)';

	// In who we are section
	document.querySelector(
		'#status'
	).innerHTML = `<p>"
	1. PRAYER
	We are a Christian ministry. We pray for people physically or online. Many people are missing people to pray for them and sadly people are so many. This ministry is dedicated to praying for people, we receive their requests and we pray for them and we see God miracles. We pray for people, we teach and encourage them to pray and teach them the word of God. (Mt.11.28).
	
	2. COUNSELLING
	We have found that many people have a lot of different and heavy problems and have even lost their listeners or their listeners to relax that heavy burden on their hearts. People have a lot of problems because of the lack of a mentor and they decide to commit suicide. PWNIM We advise people and pray for them, and we give people deliverance service.
	Do not let sorrow and grief weigh on you that Jesus is ready to relieve you of the burdens you carry.
	
	3. ORDINATION
	We ordain pastors, evangelists, prophets, teachers of the word of God, apostles, worshipers and praisers.  
	We offer wedding services (wedding blessing ceremony including instructions which prepare couples to wedding), baptize, funeral services.
	
	4. TRAINING
	We provide training at all levels of the church: we train pastors, evangelists, apostles, prophets, teachers, singers, deacons, protocols ... we teach the bible, we give many different teachings about the work of God, in terms of church growth. We train and teach all levels of the church to stand up for their responsibilities."


				`;

	// Abous us section
	// left section in about us
	document.querySelector(
		'#mission'
	).innerHTML = `
	All Christians have a Christian life and values.
	
	To free the servants of God from the ignorance of the word of God.
	
	To train the servants of God to fulfill their responsibilities.
	
 `;

	// middle section in about us
	document.aboutimg.src = './images/unnamed (3).jpg';
	document.querySelector(
		'#img-caption'
	).innerHTML = ``;

	// right section in about us
	document.querySelector(
		'#visions'
	).innerHTML = `All Christians worship, pray God and come out of the bondage of Satan `;

	// In team section
	document.firstimg.src = './images/avatar.jpg';
	document.querySelector('#first-name').innerHTML = 'Rev. RUZIMA JOSEPH';
	document.querySelector('#first-position').innerHTML = 'FOUNDER, PRESIDENT, TRAINER';

	document.secondimg.src = './images/avatar.jpg';
	document.querySelector('#second-name').innerHTML = 'Rev. BARAWIGIRIRA AIME FULGENCE';
	document.querySelector('#second-position').innerHTML = 'COUNSELLOR';

	document.thirdimg.src = './images/avatar.jpg';
	document.querySelector('#third-name').innerHTML = 'NABANYERE R. MARIE';
	document.querySelector('#third-position').innerHTML = 'INTERCESSOR';

	document.fouthimg.src = './images/avatar.jpg';
   document.querySelector('#fouth-name').innerHTML = 'MUGWANEZA K. ALEXIS';
	document.querySelector('#fouth-position').innerHTML = 'ADMIN & INTERCESSOR';

	document.fifthimg.src = './images/avatar.jpg';
   document.querySelector('#fifth-name').innerHTML = 'MUNYAKAZI ALEXANDER';
	document.querySelector('#fifth-position').innerHTML = 'PRAISE & WORSHIP LEADER, INTERCESSOR';

	// In contact us section
	
    document.querySelector('#address').innerHTML = 'Kigali city, Gasabo,kinyinya,Gacuriro, Kabuhunde II';
	document.querySelector('#email').innerHTML = 'prayerwnimin@gmail.com';
	document.querySelector('#phone').innerHTML = '+250789179092';

	// Link to social media
	 document.querySelector('#whatsapp').href = 'https://wa.me/+250789179092';
	 document.querySelector('#facebook').href = 'https://www.facebook.com/groups/678559666280670/'
	
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
