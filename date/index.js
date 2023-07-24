// format from M/D/YYYY to YYYYMMDD
function formatDate(userDate) {
	const dateStrings = userDate.split('/');
	let month = dateStrings[0];
	let day = dateStrings[1];
	const year = dateStrings[2];

	if (month.length === 1) {
		month = '0' + month;
	}

	if (day.length === 1) {
		day = '0' + day;
	}

	return year + month + day;
}

console.log(formatDate('12/31/2014'));
