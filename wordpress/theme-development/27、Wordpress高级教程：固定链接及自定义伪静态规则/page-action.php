<?
/*
//定义了一个 shuohua 的函数
function shuohua()
{
	echo '说话<br />';
}

function zoulu()
{
	echo "走路<br />";
}

//挂载 shuohua 这个函数到 huangcong 这个动作上
add_action( 'huangcong', 'shuohua' , 2 );
add_action( 'huangcong', 'zoulu' , 1 );

//运行 huangcong 这个动作，把所有挂载在这个动作上面的函数都执行一次
do_action( 'huangcong' );
*/

function zhuijia( $text )
{
	return $text . "...";
}

function zhuijia1( $text )
{
	return $text . "!!!";
}

//挂载 zhuijia 这个函数到 shuchu 这个过滤器上
add_filter( 'shuchu', 'zhuijia' , 2 );
add_filter( 'shuchu', 'zhuijia1' , 1 );

//创建一个 shuchu 过滤器，传递要过滤的字符串 “黄聪”
echo apply_filters( 'shuchu', '黄聪' );
?>