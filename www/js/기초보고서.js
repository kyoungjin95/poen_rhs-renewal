async function 기초보고서_save() {
	var _date = new Date();
	var file_name = '기초보고서' + _date + '.pdf';

	html2canvas(document.getElementById('_기초보고서'), { width : 1920, height : 1080 }).then(canvas => {
			var data = canvas.toDataURL();
			document.getElementById('_canvas').src = data;
			var docDefinition = {
				content: [{
					image: data,
					width: 1920,
					height: 1080	
				}],
				pageSize: 'A4',
				pageOrientation: 'landscape'
			};
			pdfMake.createPdf(docDefinition).download(file_name);
	});
	console.log('file name:', file_name);
}
