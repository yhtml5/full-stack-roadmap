<!doctype html>
<head>
	<meta http-equiv="Content-Type" content="text/html; 
	charset=<? echo get_bloginfo('charset'); ?>" />
	<title><? bloginfo('name'); ?></title>
	<meta name="description" content="<? bloginfo('description'); ?>" />
	<link rel="stylesheet" href="<? bloginfo('stylesheet_url'); ?>" 
		type="text/css" />
	<script type="text/javascript" src="<?php bloginfo('template_directory');?>
		/js/jquery-1.8.3.min.js"></script>
	
	<? wp_head(); ?>
</head>
<body>
<div class="c">
	<div id="header">
		<div id="headerimg">
			<h1><a href="<?php echo get_option('home'); ?>">
			<?php bloginfo('name'); ?></a></h1>
			<div class="description"><?php bloginfo('description'); ?></div>
		</div>
	</div>
</div>

<div class="c">
	<div class="nav">
		<ul>
			<? wp_nav_menu() ?>
		</ul>
	</div>
</div>

