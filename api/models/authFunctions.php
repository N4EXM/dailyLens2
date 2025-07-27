<?php 

// Cookie settings (shared between functions)
$cookieSettings = [
    'expires' => time() + 86400 * 30, // 30 days
    'path' => '/',
    'domain' => 'localhost', // Change for production
    'secure' => false,      // true in production
    'httponly' => true,
    'samesite' => 'Lax'
];

function login($pdo, $email, $password): void {
    
    global $cookieSettings;

    // start the session 
    if (session_status() === PHP_SESSION_NONE) {
        session_start([
            'cookie_lifetime' => 86400 * 30, // 30 days
            'cookie_secure' => false,        // true in production
            'cookie_httponly' => true,
            'cookie_samesite' => 'Lax'
        ]);
    }

    try {
        // Validate input
        $email = trim($email);
        $password = trim($password);
        
        if (empty($email) || empty($password)) {
            throw new InvalidArgumentException('email and password are required');
        }

        // Check user exists
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user || !password_verify($password, $user['password_hash'])) {
            throw new RuntimeException('user does not exist');
        }

        // Regenerate session ID to prevent session fixation
        session_regenerate_id(true);

        // Set session variables - THIS IS THE CRUCIAL PART
        $_SESSION['user_id'] = $user['user_id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['user_role'] = $user['role'];
        $_SESSION['logged_in'] = true;
        $_SESSION['last_activity'] = time();
        $_SESSION['first_name'] = $user['first_name'];
        $_SESSION['last_name'] = $user['last_name'];
        $_SESSION['email'] = $user['email'];

        // Set secure cookie
        setcookie(
            'auth_session', 
            session_id(), 
            $cookieSettings
        );

        // Return success response
        header('Content-Type: application/json');
        http_response_code(201);
        echo json_encode([
            'success' => true,
            'user' => [
                'username' => $user['username'],
                'role' => $user['role'],
                'email' => $user['email'],
                'first_name'=> $user['first_name'],
                'last_name'=> $user['last_name'],     
                "image" => $user["image"],
            ]
        ]);
        exit();

    } 
    catch (Exception $e) {
        // Clear any partial session data on failure
        session_unset();
        session_destroy();
        
        error_log("Login error: " . $e->getMessage());
        header('Content-Type: application/json');
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
        exit();
    }

}

function register($pdo, $username, $password, $email, $first_name, $last_name): void {
    // Clear any previous output
    if (ob_get_length()) ob_clean();

    $username = trim($username);
    $password = trim($password);
    $email = trim($email);
    $first_name = trim($first_name);
    $last_name = trim($last_name);

    try {
        if (empty($username) || empty($password) || empty($email) || empty($first_name) || empty($last_name)) {
            http_response_code(400);
            echo json_encode([
                "success" => false,
                "message" => "Username, first name, last name, email or password is empty."
            ]);
            exit();
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode([
                "success" => false,
                "message" => "Invalid email format."
            ]);
            exit();
        }

        // Check if user exists
        $stmt = $pdo->prepare("SELECT user_id FROM users WHERE username = ? OR email = ?");
        $stmt->execute([$username, $email]);
        $existingUser = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($existingUser) {
            http_response_code(409); // Conflict
            echo json_encode([
                "success" => false,
                "message" => "User or email already exists"
            ]);
            exit();
        }
        
        // Hash the password
        $passwordHash = password_hash($password, PASSWORD_BCRYPT);
        if ($passwordHash === false) {
            throw new Exception("Password hashing failed");
        }
        
        $stmt = $pdo->prepare("INSERT INTO users (username, first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$username, $first_name, $last_name, $email, $passwordHash]);

        if ($stmt->rowCount() > 0) {
            http_response_code(201); 
            echo json_encode([
                "success" => true,
                "message" => "Registration successful"
            ]);
            exit();
        } else {
            http_response_code(500);
            echo json_encode([
                "success" => false,
                "message" => "Registration failed"
            ]);
            exit();
        }
    } 
    catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Database error",
            "error" => $e->getMessage()
        ]); 
        exit();
    } 
    catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Registration error",
            "error" => $e->getMessage()
        ]);
        exit();
    }
}

function auth_check(): array {
    // Session should already be started by the API script
    if (!isset($_SESSION['user_id'], $_COOKIE['auth_session'])) {
        return ['authenticated' => false];
    }

    if ($_COOKIE['auth_session'] !== session_id()) {
        return ['authenticated' => false];
    }

    return [
        'authenticated' => true,
        'user' => [
            'id' => $_SESSION['id'],
            'username' => $_SESSION['username'],
            'role' => $_SESSION['role'],
            'email' => $_SESSION['email'],
            'first_name'=> $_SESSION['first_name'],
            'last_name'=> $_SESSION['last_name'],     
            "image" => $_SESSION["image"],
        ]
    ];
}

// function logout(): array {

//     // Start session if not already started
//     if (session_status() === PHP_SESSION_NONE) {
//         session_start();
//     }

//     // Initialize response
//     $response = ['success' => false, 'message' => 'Logout failed'];

//     // Unset all session variables
//     $_SESSION = [];

//     // Delete session cookie
//     if (ini_get("session.use_cookies")) {
//         $params = session_get_cookie_params();
//         setcookie(
//             session_name(),
//             '',
//             time() - 42000,
//             $params["path"],
//             $params["domain"],
//             $params["secure"],
//             $params["httponly"]
//         );
//     }

//     // Destroy the session
//     if (session_destroy()) {
//         $response = ['success' => true, 'message' => 'Logout successful'];
//         return $response;
//     }

//     // Also delete the auth_session cookie
//     setcookie('auth_session', '', [
//         'expires' => time() - 3600,
//         'path' => '/',
//         'domain' => 'localhost',
//         'secure' => false,
//         'httponly' => true,
//         'samesite' => 'Lax'
//     ]);

//     return $response;
// }

function logout(): array {
    // Start session if not already started
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    // Store response before destroying session
    $response = ['success' => true, 'message' => 'Logout successful'];

    // Delete the auth_session cookie first
    setcookie('auth_session', '', [
        'expires' => time() - 3600,
        'path' => '/',
        'domain' => 'localhost',
        'secure' => false,
        'httponly' => true,
        'samesite' => 'Lax'
    ]);

    // Clear session data
    $_SESSION = [];

    // Delete session cookie
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(
            session_name(),
            '',
            time() - 42000,
            $params["path"],
            $params["domain"],
            $params["secure"],
            $params["httponly"]
        );
    }

    // Destroy the session
    session_destroy();

    return $response;
}

function confirmUser($pdo, $email, $password): void {

    try {

        $email = trim($email);
        $password = trim($password);

        if (empty($email) || empty($password)) {
            throw new InvalidArgumentException('email and password are required');        
        }

        // Check user exists
        $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user || !password_verify($password, $user['password_hash'])) {
            throw new RuntimeException('user does not exist');
        }

        echo json_encode([
            "success" => true,
            "password"  => $password,
        ]);
        exit();

    }
    
    catch (Exception $e) {
        
        error_log("Login error: " . $e->getMessage());
        header('Content-Type: application/json');
        http_response_code(401);
        echo json_encode([
            'success' => false,
            'message' => $e->getMessage()
        ]);
        exit();

    }

}

?>