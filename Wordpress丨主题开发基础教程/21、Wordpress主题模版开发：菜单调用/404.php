<? get_header(); ?>
<div class="c">
	<div id="page-box">
		<div class="post-item _404">
			<div class="post-content">您当前访问的页面不存在！<font id="jump">3</font> 秒后返回首页，或<a href="<?php bloginfo('url'); ?>">直接返回</a></div>
		</div>
		<script>
			function countDown(secs){
				$("#jump").html(secs);
				if(--secs>0){ setTimeout( "countDown(" + secs + ")",1000 ); }
				else{window.location.href="<?php bloginfo('url'); ?>"; }
			}
			countDown(3);
		</script>
	</div>
</div>
<? get_footer(); ?>