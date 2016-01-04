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
</div>