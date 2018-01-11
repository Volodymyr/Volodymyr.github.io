<?
	$to = 'vovazaikin3188@gmail.com';
	$subject = 'ПЛАЗМЕННАЯ РЕЗКА ОБЪЕМНЫХ ДЕТАЛЕЙ';
	$message = '
		<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>Имя: '.$_POST['name'].'</p>
				<p>Телефон: '.$_POST['phone'].'</p>
			</body>
		</html>';
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: Отправитель DNT\r\n";
	mail($to, $subject, $message, $headers);
?>