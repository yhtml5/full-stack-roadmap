<? get_header(); ?>
<div class="c">
	<div id="page-box">
		<?
			the_post();
		?>
		<div class="post-item">
			<div class="post-title"><h2><a href="<? the_permalink(); ?>"><? the_title(); ?></a><h2></div>
			<div class="post-meta">
				<? _e( 'author', 'huangcong' ); ?>：<? the_author(); ?><span>|</span>
				<? echo __( 'time', 'huangcong' ); ?>：<? the_time( 'Y-m-d' ); ?>
				<? edit_post_link( __( 'Edit','huangcong' ), ' <span>|</span> ', '' ); ?>
			</div>
			<div class="post-content"><? the_content(); ?></div>
		</div>
		<? comments_template(); ?>
	</div>
</div>
<? get_footer(); ?>