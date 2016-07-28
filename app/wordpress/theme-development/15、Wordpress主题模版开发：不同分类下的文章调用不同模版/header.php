<!doctype html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=<? echo get_bloginfo('charset'); ?>" />
	<title><? bloginfo('name'); ?></title>
	<meta name="description" content="<? bloginfo('description'); ?>" />
	<link rel="stylesheet" href="<? bloginfo('stylesheet_url'); ?>" type="text/css" />

	<? wp_head(); ?>
</head>
<body>
<div class="c">
	<div id="header">
		<div id="headerimg">
			<h1><a href="<?php echo get_option('home'); ?>"><?php bloginfo('name'); ?></a></h1>
			<div class="description"><?php bloginfo('description'); ?></div>
		</div>
	</div>
</div>