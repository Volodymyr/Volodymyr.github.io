<?
	$to = 'vovazaikin3188@gmail.com';
	$subject = 'Заявка';
	$message = '
		<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Имя: '.$_POST['name'].'</p>
				<p>Телефон: '.$_POST['usrtel'].'</p>
			</body>
		</html>';
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: Отправитель Гидроциклы\r\n";
	mail($to, $subject, $message, $headers);
?>