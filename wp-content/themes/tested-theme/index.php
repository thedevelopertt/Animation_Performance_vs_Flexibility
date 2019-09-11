<!DOCTYPE>
<html>
<head>
    <meta name="viewport" content="initial-scale=1.0">
    <link rel="stylesheet" href="<?php use App\BlogInformation;

    echo esc_url(get_template_directory_uri())?>/dist/css/style.css">
    <?php wp_head(); ?>
</head>
<body>

<nav class="landing-nav">
    <div class="container-fluid">
        <div class="nav-row">
            <div class="landing-logo">
                <img src="<?php echo BlogInformation::getSvgPath(); ?>logo.svg" alt="">
            </div>
        </div>
    </div>
</nav>

<section class="landing-section">
    <div class="container-fluid">
        <div class="landing-row">
            <div class="landing-svg">
                <svg viewBox="0 0 100 100">
                    <path fill="#00C198" stroke-width="0" d="M12 50c0-21 17-38 38-38s38 17 38 38-17 38-38 38" style="stroke-dasharray: 179.113px; stroke-width: 24px; transform-origin: 50% 50%; stroke-dashoffset: 0px; transform: translate(0px, 0px) rotate(0deg) skew(0deg, 0deg) scale(1, 1);"></path>
                </svg>
            </div>

            <div class="landing-lead">
                <h1>France-based interactive design & creative web studio</h1>
            </div>

            <div class="landing-action">
                <a href="#"><span class="arrow-left"></span><span class="arrow-text">Discover the studio</span></a>
            </div>
        </div>
    </div>
</section>

</body>
</html>

