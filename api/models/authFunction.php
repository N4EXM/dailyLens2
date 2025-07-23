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

function login($pdo, $username, $password): void {
    
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
        $username = trim($username);
        $password = trim($password);
        
        if (empty($username) || empty($password)) {
            throw new InvalidArgumentException('Username and password are required');
        }

        // Check user exists
        $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->execute([$username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$user || !password_verify($password, $user['password_hash'])) {
            throw new RuntimeException('Invalid credentials');
        }

        // Regenerate session ID to prevent session fixation
        session_regenerate_id(true);

        // Set session variables - THIS IS THE CRUCIAL PART
        $_SESSION['user_id'] = $user['id'];
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
        echo json_encode([
            'success' => true,
            'user' => [
                'id' => $user['id'],
                'username' => $user['username'],
                'role' => $user['role'],
                'email' => $user['email'],
                'first_name'=> $user['first_name'],
                'last_name'=> $user['last_name'],     
            ]
        ]);
        exit();

    } catch (Exception $e) {
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
    header('Content-Type: application/json');
    
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

        // Check if user exists
        $stmt = $pdo->prepare("SELECT user_id FROM users WHERE username = ?");
        $stmt->execute([$username]);
        $existingUser = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if ($existingUser) {
            http_response_code(409); // Conflict
            echo json_encode([
                "success" => false,
                "message" => "User already exists"
            ]);
            exit();
        }
        
        // Hash the password
        $passwordHash = password_hash($password, PASSWORD_BCRYPT);
        if ($passwordHash === false) {
            throw new Exception("Password hashing failed");
        }
        
        $stmt = $pdo->prepare("INSERT INTO users (username, first_name, last_name, email,password_hash) VALUES (?, ?, ?, ?, ?)");
        // Insert the user
        $success = $stmt->execute([$username, $first_name, $last_name, $email, $passwordHash]);

        if ($success) {
            http_response_code(201); // Created
            echo json_encode([
                "success" => true,
                "message" => "Registration successful"
            ]);
        } else {
            http_response_code(500);
            echo json_encode([
                "success" => false,
                "message" => "Registration failed"
            ]);
        }
    } 
    catch (PDOException $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Database error",
            "error" => $e->getMessage()
        ]); 
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
            'id' => $_SESSION['user_id'],
            'username' => $_SESSION['username'],
            'role' => $_SESSION['user_role']
        ]
    ];
}

?>