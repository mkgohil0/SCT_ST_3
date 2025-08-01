/* * -------------------
 * General Body Styles
 * -------------------
 */
body {
    margin: 0;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    /* Creates a dark background with a subtle radial gradient for depth */
    background-color: #0d1120;
    background-image: radial-gradient(circle at 10% 10%, rgba(100, 120, 255, 0.1) 0%, transparent 30%),
                      radial-gradient(circle at 90% 80%, rgba(100, 120, 255, 0.1) 0%, transparent 30%);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 1rem;
    box-sizing: border-box;
}

/* * -------------------
 * The Main "Glass" Card
 * -------------------
 */
.checker-card {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    /* Semi-transparent background for the glass effect */
    background: rgba(30, 38, 70, 0.4); 
    border-radius: 24px;
    /* A subtle border enhances the glassy edge */
    border: 1px solid rgba(255, 255, 255, 0.15);
    /* Shadow for a floating effect */
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    /* The key property for the frosted glass look! */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px); /* For Safari compatibility */
    transition: all 0.3s ease;
}

/* * -------------------
 * Card Header
 * -------------------
 */
.card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.card-header .fa-lock {
    font-size: 2rem;
    color: #5c87ff; /* A vibrant blue for the lock icon */
}

.card-header h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
}

/* * -------------------
 * Password Input Group
 * -------------------
 */
.input-group {
    position: relative;
    margin-bottom: 1rem; /* Adjusted margin */
}

#passwordInput {
    width: 100%;
    padding: 14px 45px 14px 15px; /* Right padding to avoid text overlapping icon */
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: 1rem;
    box-sizing: border-box; /* Ensures padding doesn't affect width */
    transition: background-color 0.3s, border-color 0.3s;
}

#passwordInput::placeholder {
    color: #a0a0a0;
}

#passwordInput:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.3);
    border-color: rgba(92, 135, 255, 0.5);
}

#togglePassword {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    cursor: pointer;
    color: #a0a0a0;
    transition: color 0.3s;
}

#togglePassword:hover {
    color: #fff;
}

/* * -------------------
 * Strength Meter
 * -------------------
 */
.strength-meter {
    height: 8px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-bottom: 0.5rem;
}

.strength-meter-fill {
    height: 100%;
    width: 0%; /* Start at 0 */
    background-color: transparent;
    border-radius: 8px;
    transition: width 0.4s ease, background-color 0.4s ease;
}

.strength-text {
    text-align: right;
    font-size: 0.85rem;
    font-weight: 500;
    color: #a0a0a0;
    height: 1.2em; /* Prevents layout shift when text appears/disappears */
    margin-bottom: 1.5rem;
    transition: color 0.4s ease;
}

/* * -------------------
 * Strength Criteria List
 * -------------------
 */
.strength-criteria ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
}

.strength-criteria li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    /* Default to red/invalid color */
    color: #ff8080;
    font-size: 0.95rem;
    transition: color 0.3s ease;
}

/* The 'valid' class we will add with JavaScript */
.strength-criteria li.valid {
    color: #50fa7b; /* Bright green for valid criteria */
}

.strength-criteria li i {
    font-size: 1.25rem;
    width: 20px; /* Ensures alignment */
    text-align: center;
}
