<? get_header(); ?>
<div class="c">
	<div id="left-box">
		<div id="post-box">
			<?
				the_post();
				
				$cat = get_the_category( get_the_ID() );
				
				$name = $cat[0]->slug;
				//加载 content-wpcj.php 模版文件，如果文件不存在，则调用content.php
				get_template_part( 'content', $name );
			?>
			<? comments_template(); ?>
		</div>
	</div>
	<? get_sidebar(); ?>
</div>
<? get_footer(); ?>