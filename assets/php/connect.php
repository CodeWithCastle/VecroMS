<?php

  // Database credentials are supplied through environment variables.
  // Export these in the web server / deployment environment.
  // Never commit real credentials. See .env.example for the expected names.
  // error_reporting(0);

	$server_host = getenv('VECROMS_DB_HOST') ?: 'localhost';
	$server_username = getenv('VECROMS_DB_USER') ?: 'vecroms';
	$server_password = getenv('VECROMS_DB_PASSWORD') ?: '';
	$db_name = getenv('VECROMS_DB_NAME') ?: 'garagepro';

	$connect_to_server = mysqli_connect($server_host, $server_username, $server_password, $db_name);

?>
