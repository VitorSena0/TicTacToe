function showForm(option){
	let form1 = document.getElementById('f1')
	let form2 = document.getElementById('f2')

	f1Act = false
	f2Act = false

	switch(option){
		case 1:
			if(form1.style.display == 'none'){
				form1.style.display = "block"
			} else {
				form1.style.display = "none"
			}
			break;
		case 2:
			if(form2.style.display == 'none'){
				form2.style.display = "block"
			} else {
				form2.style.display = "none"
			}
			break;
	}
}

