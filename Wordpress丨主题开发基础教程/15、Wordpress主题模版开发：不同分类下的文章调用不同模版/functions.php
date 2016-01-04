<?
	add_action('after_setup_theme', 'my_theme_setup');
	function my_theme_setup(){
	    load_theme_textdomain('huangcong', get_template_directory() . '/languages');
	}
	
	//注册一个小工具
	register_sidebar(
		array(
			'name'          => '侧边栏',
			'before_widget' => '<div class="sbox">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2>',
			'after_title'   => '</h2>'
		)
	);
?>