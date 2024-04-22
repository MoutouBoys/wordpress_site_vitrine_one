<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_one' );

/** Database username */
define( 'DB_USER', 'admin' );

/** Database password */
define( 'DB_PASSWORD', 'admin' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'O8}z:O0FQz7lmN0-qJob0Ep$TF;LR~rB1fI;M<&IHmv8kNl?LN(tf|(/,)m@u}[W' );
define( 'SECURE_AUTH_KEY',  'lRB8}qO1z%yPJTM7B;)*T-`B@ovTm?Rbw:%6<SuQoMG*EAjY@J<C9?>Y&d:^|kNr' );
define( 'LOGGED_IN_KEY',    'Vw`T-k$_?.U>ti/#.zvex*Y-ZKhgACH1.VVn Do%[EX9b}no<9w3!ZWF^W[tiU^2' );
define( 'NONCE_KEY',        '}rMr5VI+X{K8#x}*Sf)Vs0+a]:+mn;x(^HvE+#y,M}2=TOhG(5p[(,dsfJmU!I& ' );
define( 'AUTH_SALT',        '4GJ-|>Y6jIWHmzXUay7iys Sh[S_qO7m9@rgt W!P&cL(BX]l?T7OfcqXL0;Ln#8' );
define( 'SECURE_AUTH_SALT', 'e!i>#{A;S 2iSi5C7/]#2buq*e#P&<6A +ZSmZ<{}apZQyBEIk:^(XMt8)|rt?ef' );
define( 'LOGGED_IN_SALT',   ';q(t`}.*7D~`w(|KsSdtr04w3DS!(X_a%rMAIbG!%ozn Ckv$?s5iqU=due_yWl&' );
define( 'NONCE_SALT',       '^N=q)x^f3lcY4wy n/K#P<~qSfmq;Qchx[]Q]-uaA.w9Ap3uD:fhOL3.-unws$8z' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
