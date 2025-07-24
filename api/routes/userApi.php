<?php

header('Content-Type: application/json');

// Cookie settings (shared between functions)
$cookieSettings = [
    'expires' => time() + 86400 * 30, // 30 days
    'path' => '/',
    'domain' => 'localhost', // Change for production
    'secure' => false,      // true in production
    'httponly' => true,
    'samesite' => 'Lax'
];

// function to register a user to the app
function register($pdo, $username, $firstName, $lastName, $email, $password):void {


}

?>