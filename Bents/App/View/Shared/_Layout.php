<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <?php self::RenderCSSBundle(); ?>
</head>
<body>

<?php self::RenderBody(); ?>
<?php self::RenderJavaScriptBundle('javascript'); ?>
</body>
</html>