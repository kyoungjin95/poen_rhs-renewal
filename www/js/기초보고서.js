async function 기초보고서_save() {
      	html2canvas(document.getElementById('_기초보고서'), { width : 1920, height : 1080 }).then(canvas => {
		html_string = '<html><head></head><body><img src=' + canvas.toDataURL('image/png') + '\'></body></html>';
		make_기초보고서(html_string);
	});
}
