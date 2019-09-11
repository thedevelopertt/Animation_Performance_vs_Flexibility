<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'fintech_v_1_0_0' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>kGZy`^K?#Lv&NNirZ ]31=sm2pyX86bTP3@>1kzXO}?fN!<(1S<R.DCmTqyeg=6' );
define( 'SECURE_AUTH_KEY',  '=y=_$ =N*dHVPlbsl#F#no/hFsZs_:M5&-Y<<-Rq[1^rKNBU@68?,yIP2S~kaZ6H' );
define( 'LOGGED_IN_KEY',    '0N3-f8wqypAvJagSH*.X=7==CWL&ZF`SwNl3z.w5{x!Ju+aK@(U<n7ZuCW6]aRcn' );
define( 'NONCE_KEY',        'L!ZNE1$F[*@x2@L&s::IN]X;YD/qELI/+<:^<9wN$LrHn145%N9iEYrxui[Rl46u' );
define( 'AUTH_SALT',        'P2KCnh*7PJ2KRv&oExXJ69eG9JZg@Kkf#i/<9->gik-ED?%.`-?D.ZZtD}vT+@x=' );
define( 'SECURE_AUTH_SALT', 'MHe3BnQjc>,dXA?~{[-7Yzt_e`Em$[U`Smj9/e|u>[KblDZ(L$o#[vNZ;[3h9M}s' );
define( 'LOGGED_IN_SALT',   'Ws#:J*5bk8>K9|4>Zj8z6_F9=EeSlh ;<6}[*Zs%uP_&C,>(fZSej++~](rmy/?P' );
define( 'NONCE_SALT',       'YqDv@-.L;0.rq?n(Gc~;akZ$q8YRA(OL$r}*i`T~fsTVad!BG]g(o;obXCDN@TV:' );

/**#@-*/

/**
 * WordPress Database Table prefix.
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
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
