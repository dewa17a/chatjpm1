<!DOCTYPE html>
<html>
<head>
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<title>Chat</title>
	<link rel="stylesheet" type="text/css" href="css/app.css">
</head>
<body>

	<div id="app">
		<h1>Chat Room</h1>
		<!-- <pesan></pesan> -->
		<log :messages="messages"></log>
		<ketik v-on:pesankirim="tambahpesan"></ketik>
	</div>
	<script src="js/app.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>