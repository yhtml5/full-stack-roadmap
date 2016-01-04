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
	
	function wz()
	{
		if( !is_home() ){ ?>
		<div class="wz">
			<a href="<? bloginfo('url'); ?>">首页</a> > 
			<?
			  if( is_category() ) { single_cat_title(); }
			  elseif ( is_search() ) {  echo $s; }
			  elseif ( is_single() ) { 
			  	  $cat = get_the_category();
			  	  $cat = $cat[0];
			  	  echo '<a href="' . get_category_link( $cat ) . '">' . $cat->name . '</a> > 文章内容';
			  }
			  elseif ( is_page() ) { the_title(); }
			  elseif ( is_404() ) { echo '404 错误页面'; }
			?>
		</div>
		<? }
	}
	
	
	add_filter( 'rewrite_rules_array','my_insert_rewrite_rules' );
	add_filter( 'query_vars','my_insert_query_vars' );
	add_action( 'wp_loaded','my_flush_rules' );

	// 如果伪静态规则里面没有我们的规则，则进行重置
	function my_flush_rules(){
		$rules = get_option( 'rewrite_rules' );
		
		if ( ! isset( $rules['url-(.*).html$'] ) ) {
			global $wp_rewrite;
			$wp_rewrite->flush_rules();
		}
	}

	//添加一个新的伪静态规则
	function my_insert_rewrite_rules( $rules )
	{
		$newrules = array();
		$newrules['url-(.*).html$'] = 'index.php?pagename=url&v=$matches[1]';
		return $newrules + $rules;
	}
	
	//添加一个变量名称
	function my_insert_query_vars( $vars )
	{
		array_push( $vars, 'v' );
		return $vars;
	}
?>