<!doctype html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=<? echo get_bloginfo('charset'); ?>" />
	<title><? bloginfo('name'); ?></title>
	<meta name="description" content="<? bloginfo('description'); ?>" />
	<link rel="stylesheet" href="<? bloginfo('stylesheet_url'); ?>" type="text/css" />

	<? wp_head(); ?>
</head>
<body>
	<div id="header">
		<div id="headerimg">
			<h1><a href="<?php echo get_option('home'); ?>"><?php bloginfo('name'); ?></a></h1>
			<div class="description"><?php bloginfo('description'); ?></div>
		</div>
	</div>
	
	<div id="home-loop">
		<?
			if( have_posts() ){
				while( have_posts() ){
					
					//获取下一篇文章的信息，并且将信息存入全局变量 $post 中
					the_post();
					?>
					<div class="post-item">
						<div class="post-title"><h2><a href="<? the_permalink(); ?>"><? the_title(); ?></a><h2></div>
						<div class="post-content"><? the_content(); ?></div>
					</div>
					<?
				}
			}else{
				echo '没有日志可以显示';
			}
		?>
	</div>
	<? wp_footer(); ?>
</body>
</html>