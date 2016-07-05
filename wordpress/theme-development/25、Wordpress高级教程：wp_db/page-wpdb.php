学习如何使用wpdb<br>
	
<?
	global $wpdb;
	$wpdb->show_errors(); //在语句执行之前就要写
	
	//1、学会使用insert()方法向数据库中添加数据
	//$wpdb->insert( $wpdb->prefix . 'xs', array( 'xm' => '黄聪3', 'xb' => '男', 'xq' => 'wordpress' ) );
	
	//2、学会使用update()方法更新数据库中的数据
	//$wpdb->update( $wpdb->prefix . 'xs', array( 'xb' => '男', 'xq' => 'wordpress' ), array( 'xq' => '打豆豆' ) );
	
	//3、学会使用get_var()获取数据库中的数据
	//$xm = $wpdb->get_var( 'SELECT * FROM `' . $wpdb->prefix . 'xs`' , 3 , 2 ？？？？);
	
	//4、学会使用query()方法删除数据库中的数据
	//$wpdb->query( "DELETE FROM `" . $wpdb->prefix . "xs` WHERE `xq` = 'wordpress'" );
	
	//$row_count = $wpdb->get_var( 'SELECT ROW_COUNT()' );
	//echo $row_count; 输出
	
	$wpdb->show_errors();
	//5、学会使用get_results()获取数据库中的数据
	$rows = $wpdb->get_results( "SELECTa * FROM `" . $wpdb->prefix . "xs`" , ARRAY_A );
	
	
/*
	foreach ( $rows as $row ) {
		echo $row['xm'] . '<br />';
	}
	*/
	$wpdb->hide_errors();
	//6、学会使用get_row()获取数据库中的数据
	$row = $wpdb->get_row( "SELECTa * FROM `" . $wpdb->prefix . "xs`" , ARRAY_A , 1 );
	
	//                                            动态获取表前缀       偏移量为1，即第二行
	
	//echo $wpdb->last_error;
	
	//7、学会使用show_errors()、print_error()、hide_errors()、last_error调试SQL   
	$wpdb->print_error();//先开启显示错误
	
?>