async function 기초보고서_save() {
	var _date = new Date();
	var file_name = '기초보고서' + _date + '.pdf';

	html2canvas(document.getElementById('_기초보고서'), { width : 3000, height : 2000 }).then(canvas => {
			var data = canvas.toDataURL();
			var canvas = document.getElementById('_canvas');
			var ctx = canvas.getContext('2d');
			var img = new Image;
  			img.src = data;
  			img.onload = function() {
    				ctx.drawImage(img, 1920, 1080);
  			};

			canvas.width = 300;
			canvas.width = 200;

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
