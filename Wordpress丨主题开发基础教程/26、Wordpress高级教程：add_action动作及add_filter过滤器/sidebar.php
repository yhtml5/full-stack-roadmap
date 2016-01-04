<div id="right-box">
	<? if( is_dynamic_sidebar() ){ dynamic_sidebar(); }else{ ?>
	<div class="sbox">
		<h2>分类</h2>
		<ul>
		<? wp_list_cats(); ?>
		</ul>
	</div>
	<div class="sbox">
		<h2>页面列表</h2>
		<ul>
		<? wp_list_pages(); ?>
		</ul>
	</div>
	<div class="sbox">
		<h2>友情链接</h2>
		<ul>
		<? get_links(); ?>
		</ul>
	</div>
	<div class="sbox">
		<h2>功能</h2>
		<ul>
		<? wp_register(); ?>
		<? wp_loginout(); ?>
		</ul>
	</div>
	<? } ?>
	<div class="sbox">
		<h2>随机文章</h2>
		<?
			$args = array(
				'numberposts' => 3,
				'category' => '1',
				'orderby' => 'rand'
			);
			$rand_posts = get_posts( $args );
		?>
		<ul>
		<? foreach ( $rand_posts as $post ) {
		    setup_postdata( $post ); ?>
		        <li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<? } wp_reset_postdata(); ?>
		</ul>
	</div>
</div>