<html>
<head>
    <title>Our Pixel Quest</title>
    <link rel="stylesheet" href="style.css">
    <script src="scripts/script.js" type="text/javascript"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap" rel="stylesheet">
</head>
<body>
<!--<div id="helper"></div>-->
<!--<div id="objectB" style="position: absolute; width: 50px; height: 50px; background-color: blue; right: 0; bottom: 0;"></div>-->
    <div class="wrapper">
        <div id="left-control-panel">
            <div id="lc-1" class="visit"></div>
            <div id="lc-2"></div>
            <div id="lc-3"></div>
        </div>
        <div class="container" id="main">
            <div id="stage-1"><?php require_once "stages/stage-1.php" ?></div>
            <div id="stage-2"><?php require_once "stages/stage-2.php" ?></div>
            <div id="stage-3"><?php require_once "stages/stage-3.php" ?></div>
        </div>
    </div>
</body>
</html>