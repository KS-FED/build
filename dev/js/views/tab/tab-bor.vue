<!-- tab导航——边框 -->
<template>
	<ul class="tab-bor">
	    <li><a>会员规则</a></li>
	    <li class="active"><a>功能主页</a></li>
	    <li><a>会员管理</a></li>
	</ul>
	<div>
        <pre>
        <code class="html">
            <ul class="tab-bor">
			    <li><a>会员规则</a></li>
			    <li class="active"><a>功能主页</a></li>
			    <li><a>会员管理</a></li>
			</ul>
        </code>
        </pre>
        <pre>
	        <code class="sass">
				.tab-bor{
					border-bottom: 1px solid #E9E9E9;
					margin-left: -1px;
					li{
					    margin-bottom: -2px;
					    display: inline-block;
					    padding: 12px 44px;
					    a{
					    	font-size:1.38em;
					    	color: #444;
					    }
					}
					.active{
						border-top: 3px solid #2196F3;
					    border-right: 1px solid #E9E9E9;
					    border-left: 1px solid #E9E9E9;
					    background-color: #fff;
					    font-weight: bold;
					}
				} 
	        </code>
        </pre>

          <pre>
        <code class="javascript">
            var a = 'sss';
            console.log(a)
        </code>
        </pre>
    </div>

</template>

