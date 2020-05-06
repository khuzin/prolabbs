<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Калькулятор пакетов</title>
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap" rel="stylesheet">
	<meta name="viewport" content="width=1366, initial-scale=1">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.3/jspdf.min.js"></script>
  <script src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>
</head>

<body class="" style="width:1325px;">

<section class="canvas_div_pdf"  id="content">
	<div class="ovl_pos" style="position:absolute;width: 100%;height:100%;">
		<span class="count_monitors"><?=$_GET['monitors'];?></span>
		<span class="count_howmany"><?=$_GET['howmany'];?></span>
		<span class="period"><?=$_GET['period'];?></span>
		<span class="transplation"><?=$_GET['transplation'];?></span>


		<span class="economy"><?=$_GET['economy'];?></span>
		<span class="price_contact"><?=$_GET['price_contact'];?></span>
		<span class="title_c"><?=$_GET['title'];?></span>

		<span class="st_rdiscount"><?=$_GET['st_rdiscount'];?> руб.</span>
    <span class="st_r"><?=$_GET['st_r'];?></span>


		<span class="mediam_1_1"><?=$_GET['mediam_1_1'];?></span>
		<span class="mediam_1_1_d"><?=$_GET['mediam_1_1'];?></span>

		<span class="mediam_2_1"><?=$_GET['mediam_2_1'];?></span>
		<span class="mediam_2_2"><?=$_GET['mediam_2_2'];?></span>
		<span class="mediam_2_3"><?=$_GET['mediam_2_3'];?></span>
		<span class="mediam_2_4"><?=$_GET['mediam_2_4'];?></span>

		<span class="mediam_3_1"><?=$_GET['mediam_3_1'];?></span>
		<span class="mediam_3_2"><?=$_GET['mediam_3_2'];?></span>
		<span class="mediam_3_3"><?=$_GET['mediam_3_3'];?></span>
		<span class="mediam_3_4"><?=$_GET['mediam_3_4'];?></span>

		<span class="mediam_4_1"><?=$_GET['mediam_4_1'];?></span>
		<span class="mediam_4_2"><?=$_GET['mediam_4_2'];?></span>
		<span class="mediam_4_3"><?=$_GET['mediam_4_3'];?></span>
		<span class="mediam_4_4"><?=$_GET['mediam_4_4'];?></span>

	</div>


<img src="/new/build/img/layout_o.png" alt="" width="1405">

</section>
<style type="text/css">
.mediam_2_1{
	font-family: 'Roboto', sans-serif;
    color: #ffed20;
    font-size: 20px;
    position: absolute;
    top: 1205px;
    left: 469px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}
.mediam_2_2{
	font-family: 'Roboto', sans-serif;
    color: #ffed20;
    font-size: 20px;
    position: absolute;
    top: 1205px;
    left: 663px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}
.mediam_2_3{
	font-family: 'Roboto', sans-serif;
    color: #ffed20;
    font-size: 20px;
    position: absolute;
    top: 1205px;
    left: 832px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}
.mediam_2_4{
	font-family: 'Roboto', sans-serif;
    color: #ffed20;
    font-size: 20px;
    position: absolute;
    top: 1205px;
    left: 1028px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}



.mediam_3_1{
	font-family: 'Roboto', sans-serif;
    color: #ffed20;
    font-size: 20px;
    position: absolute;
    top: 1244px;
    left: 469px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}
.mediam_3_2{
	font-family: 'Roboto', sans-serif;
    color: #ffed20;
    font-size: 20px;
    position: absolute;
    top: 1244px;
    left: 663px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}
.mediam_3_3{
	font-family: 'Roboto', sans-serif;
    color: #ffed20;
    font-size: 20px;
    position: absolute;
    top: 1244px;
    left: 832px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}
.mediam_3_4{
	font-family: 'Roboto', sans-serif;
    color: #ffed20;
    font-size: 20px;
    position: absolute;
    top: 1244px;
    left: 1028px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}





.mediam_4_1{
	font-family: 'Roboto', sans-serif;
    color: #ffed20;
    font-size: 20px;
    position: absolute;
    top: 1285px;
    left: 469px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}
.mediam_4_2{
	font-family: 'Roboto', sans-serif;
    color: #ffed20;
    font-size: 20px;
    position: absolute;
    top: 1285px;
    left: 663px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}
.mediam_4_3{
	font-family: 'Roboto', sans-serif;
    color: #ffed20;
    font-size: 20px;
    position: absolute;
    top: 1285px;
    left: 832px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}
.mediam_4_4{
	font-family: 'Roboto', sans-serif;
    color: #0d092d;
    font-size: 20px;
    position: absolute;
    top: 1285px;
    left: 1028px;
    width: 178px;
    text-align: right;
    font-weight: 700;
}


.mediam_1_1{
	font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 20px;
    position: absolute;
    top: 1168px;
    left: 663px;
    width: 178px;
    text-align: right;
}
.mediam_1_1_d{
	font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 20px;
    position: absolute;
    top: 1168px;
    left: 1028px;
    width: 178px;
    text-align: right;
}
  .canvas_div_pdf{
  	position: relative;
  }

	body{
		margin: 0px;
	}
	.count_monitors{
		font-family: 'Roboto', sans-serif;
	 color: #0d092d;
	 font-size: 56px;
	 font-weight: 700;
	 position: absolute;
	 top: 611px;
	 left: 289px;
	 font-variant: normal;
	}
	.period{
	    font-family: 'Roboto', sans-serif;
		color: #0d092d;
font-size: 56px;
font-weight: 700;
position: absolute;
top: 730px;
left: 288px;font-variant: normal
	}
	.transplation{
	    font-family: 'Roboto', sans-serif;
		color: #0d092d;
font-size: 56px;
font-weight: 700;
position: absolute;
top: 730px;
left: 821px;
font-variant: normal
	}
	.count_howmany{
	    font-family: 'Roboto', sans-serif;
		color: #0d092d;
font-size: 56px;
font-weight: 700;
position: absolute;
top: 611px;
left: 821px;font-variant: normal
	}
	.canvas_div_pdf {
  font-variant: normal;
}
.price_contact{
	font-family: 'Roboto', sans-serif;
	    color: #0d092d;
	    font-size: 34px;
	    font-weight: 700;
	    position: absolute;
	    bottom: 277px;
	    left: 934px;
	    width: 302px;
	    text-align: right;
}

.economy{
	font-family: 'Roboto', sans-serif;
	    color: #0d092d;
	    font-size: 34px;
	    font-weight: 700;
	    position: absolute;
	    bottom: 336px;
	    left: 934px;
	    width: 302px;
	    text-align: right;
}
.title_c{
	font-family: 'Roboto', sans-serif;
	    color: #0d092d;
	    font-size: 34px;
	    font-weight: 700;
	    position: absolute;
			top: 486px;
     left: 740px;
			text-transform: uppercase;
}

.st_rdiscount{
	font-family: 'Roboto', sans-serif;
    color: #858496;
    font-size: 35px;
    font-weight: 700;
    position: absolute;
    bottom: 330px;
    left: 174px;
}
.st_r{
	font-family: 'Roboto', sans-serif;
	color: #0d092d;
	font-size: 50px;
	font-weight: 700;
	position: absolute;
	bottom: 263px;
	left: 174px;
}

</style>


<script type="text/javascript">

  function getPDF(){

  		var HTML_Width = $(".canvas_div_pdf").width();
  		var HTML_Height = $(".canvas_div_pdf").height();
  		var top_left_margin = 0;
  		var PDF_Width = HTML_Width+(top_left_margin*2);
  		var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
  		var canvas_image_width = HTML_Width;
  		var canvas_image_height = HTML_Height;

  		var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;

			var el = $(".canvas_div_pdf")[0];
		//	el.style.fontFeatureSettings = '"liga" 0';
  		html2canvas(el,{
				allowTaint : false,
				useCORS: true
			}).then(function(canvas) {
  			canvas.getContext('2d');


  			var imgData = canvas.toDataURL("image/jpeg", 1.0);
  			var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
  		    pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);


  			for (var i = 1; i <= 1; i++) {
  				pdf.addPage(PDF_Width, PDF_Height);
  				pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
  			}

  		    pdf.save("PRO DIGITAL.pdf");
          });
  	};
getPDF();

</script>

</body>
</html>
