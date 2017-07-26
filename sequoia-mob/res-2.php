<?
	$to = 'projectmanager4@silverduck.net';
	$subject = 'Заявка из блока услуг';
	$message = '
		<html>
			<head>
				<title>'.$subject.'</title>
			</head>
			<body>
				<p>'.$_POST['titelBlock'].'</p>
				<p>Имя: '.$_POST['name'].'</p>
				<p>Телефон: '.$_POST['usrtel'].'</p>
			</body>
		</html>';
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$headers .= "From: Отправитель <from@example.com>\r\n";
	mail($to, $subject, $message, $headers);
?>