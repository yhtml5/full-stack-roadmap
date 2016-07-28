<div class="post-item">
	<div class="post-title"><h2><a href="<? the_permalink(); ?>"><? the_title(); ?></a><h2></div>
	<div class="post-meta">
		<? _e( 'category', 'huangcong' ); ?>：<? the_category(','); ?><span>|</span>
		<? _e( 'author', 'huangcong' ); ?>：<? the_author(); ?><span>|</span>
		点赞：<? echo get_post_meta( $post->ID, '_zan', true ); ?><span>|</span>
		<? echo __( 'time', 'huangcong' ); ?>：<? the_time( 'Y-m-d' ); ?>
		<? edit_post_link( __( 'Edit','huangcong' ), ' <span>|</span> ', '' ); ?>
	</div>
	<div class="post-content"><? the_content(); ?></div>
	
	<?
		$downloads = get_post_meta( $post->ID, 'download' , false );
		if( !$downloads )
		{
			add_post_meta( $post->ID, 'download', 'http://hcsem.com/000.rar' );
		}
	?>
	
	
	<div class="post-download">
	文件下载：<br />
	<?
		foreach( $downloads as $download ){
			echo $download . "<br />";
		}
	?>
	</div>
	<div class="post-nav">
		<? previous_post_link('上一篇：%link'); ?><br />
		<? next_post_link('下一篇：%link'); ?>
	</div>
</div>