<!doctype html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=<? echo get_bloginfo('charset'); ?>" />
	
	<?
		if( is_home() ){ $title = get_bloginfo('name'); }
		else{ $title = wp_title( '', false ) . "_黄聪的博客"; }
		
		if( $paged > 0 ){ $title .= "-第" . $paged . "页"; }
	?>
	<title><? echo $title; ?></title>
	
	<? if( is_home() ){ ?>
	<meta name="description" content="<? bloginfo('description'); ?>" />
	<? } ?>
	<link rel="stylesheet" href="<? bloginfo('stylesheet_url'); ?>" type="text/css" />
	<script type="text/javascript" src="<? bloginfo('template_directory');?>/js/jquery-1.8.3.min.js"></script>
	
	<? if( is_category() ){ ?><link rel="stylesheet" href="<? bloginfo('template_directory');?>/style-cat.css" type="text/css" /><? } ?>
	<? if( is_search() ){ ?><link rel="stylesheet" href="<? bloginfo('template_directory');?>/style-search.css" type="text/css" /><? } ?>
	<? if( is_404() ){ ?><link rel="stylesheet" href="<? bloginfo('template_directory');?>/style-404.css" type="text/css" /><? } ?>
	<? if( is_single() ){ ?><link rel="stylesheet" href="<? bloginfo('template_directory');?>/style-single.css" type="text/css" /><? } ?>
	<? if( is_page() ){ ?><link rel="stylesheet" href="<? bloginfo('template_directory');?>/style-page.css" type="text/css" /><? } ?>
	
	<? wp_head(); ?>
</head>
<body>
<div class="c">
	<div id="header">
		<div id="headerimg">
			<h1><a href="<? echo get_option('home'); ?>"><? bloginfo('name'); ?></a></h1>
			<div class="description"><? bloginfo('description'); ?></div>
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

<div class="c">
	<? wz(); ?>
</div>


