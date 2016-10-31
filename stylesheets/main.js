    var year,month,day;
    var movie;
    var giftu,giftme;
    var loveme;
    //创建移动数组后 启动引擎
    var objArray=new Array();

    // $ (window).scroll (function ()
    //     {
    //         $ (this).scrollTop (0)
    //     });

    // $ (function ()
    // {
    //     $ (":button").click (function ()
    //     {
    //         $ (window).unbind ('scroll');
    //     })
    // });

    function confirm0(){
        year = $("#year").val();
        month = $("#month").val();
        day = $("#day").val();
        if(year=="2014"&&month=="12"&&day=="26"){
            $("#question").text("我们看的第一部电影是什么？");
            $("#answer").empty();
            var tr ="<input type='text' id='movie' class='dateInput' style='width:16rem'>";
            $("#answer").append(tr);
            $("#confirmBtn").empty();
            var trr = "<span id='confirm1' onclick='confirm1()'>我确定</span>";
            $("#confirmBtn").append(trr);
            $("#me").attr("src","imgs/u0.png");
            $("#you").attr("src","imgs/me0.jpg");
        }else{
            $("#year").val("");
            $("#month").val("");
            $("#day").val("");
            $("#me").attr("src","imgs/u00.jpg");
            $("#you").attr("src","imgs/me00.jpg");
	    $("#confirm0").html("我真的确定！");
        }
    }

    function confirm1(){
        movie = $("#movie").val();
        if(movie=="匆匆那年"){
            $("#question").text("你送给我的第一份礼物是什么");
            $("#answer").empty();
            $("#answer").css("text-align","left");
            $("#answer").css("margin-left","3rem");
            var tr ="<input type='radio' name='gift0' value='0' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>星巴克的杯子<br>" +
                    "<input type='radio' name='gift0' value='1' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>饮料<br>" +
                    "<input type='radio' name='gift0' value='2' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>你迷人的微笑<br>" +
                    "<input type='radio' name='gift0' value='3' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>你的微信号<br>";
            $("#answer").append(tr);
            $("#answer").css("height","7rem");
            $("#confirmBtn").empty();
            var trr ="<span id='confirm2' onclick='confirm2()'>我确定</span>";
            $("#confirmBtn").append(trr);
            $("#me").attr("src","imgs/u0.png");
            $("#you").attr("src","imgs/me0.jpg");
        }else{
            $("#movie").val("");
            $("#me").attr("src","imgs/u00.jpg");
            $("#you").attr("src","imgs/me00.jpg");
	    $("#confirm1").html("我真的确定！");
        }
    }

    function confirm2(){
        giftu = $("input[name='gift0']:checked").val();
        if(giftu == 3){
            $("#question").text("我送你的第一份礼物是什么");
            $("#answer").empty();
            var tr ="<input type='radio' name='gift1' value='0' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>衣服<br>" +
                    "<input type='radio' name='gift1' value='1' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>四驱车模型<br>" +
                    "<input type='radio' name='gift1' value='2' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>我迷人的微笑<br>" +
                    "<input type='radio' name='gift1' value='3' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>我的微信号<br>";
            $("#answer").append(tr);
            $("#confirmBtn").empty();
            var trr ="<span id='confirm3' onclick='confirm3()'>我确定</span>";
            $("#confirmBtn").append(trr);
            $("#me").attr("src","imgs/u0.png");
            $("#you").attr("src","imgs/me0.jpg");
        }else{
            // $("input[name='gift0']:checked").attr("chechked",false);
            $("#me").attr("src","imgs/u00.jpg");
            $("#you").attr("src","imgs/me00.jpg");
	    $("#confirm2").html("我真的确定！");
        }

    }

    function confirm3(){
        giftme = $("input[name='gift1']:checked").val();
        if(giftme == 3){
            $("#question").text("爱我嘛？");
            $("#answer").empty();
            var tr ="<input type='radio' name='gift2' value='0' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>爱<br>" +
                    "<input type='radio' name='gift2' value='1' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>超级爱<br>" +
                    "<input type='radio' name='gift2' value='2' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>超级无敌爱<br>" +
                    "<input type='radio' name='gift2' value='3' style='font-size:1.3rem;width:0.5rem;height:0.5rem'>超级无敌变态爱<br>";
            $("#answer").append(tr);
            $("#confirmBtn").empty();
            var trr ="<span id='confirm4' onclick='confirm4()'>我确定</span>";
            $("#confirmBtn").append(trr);
            $("#me").attr("src","imgs/u0.png");
            $("#you").attr("src","imgs/me0.jpg");
        }else{
            $("#me").attr("src","imgs/u00.jpg");
            $("#you").attr("src","imgs/me00.jpg");
	    $("#confirm3").html("我真的确定！");
        }

    }

    function confirm4(){
        loveme = $("input[name='gift2']:checked").val();
        if(loveme == 3){
	    $("#me").attr("src","imgs/u0.png");
            $("#you").attr("src","imgs/me0.jpg");
            $("#question").hide(1500);
            $("#answer").hide(1500);
            $("#confirm4").hide();
            $("#me").animate({left:"8.8rem",top:"20rem"},2000);
            $("#you").animate({right:"7.5rem",top:"20rem"},2000);
            $("#love0").show(3000);
            $("#love1").show(4000);
            $("#love2").show(5000);
            $("#love3").show(6000);
            $("#next").show(6000);
        }else{
            $("#me").attr("src","imgs/u00.jpg");
            $("#you").attr("src","imgs/me00.jpg");
	    $("#confirm4").html("我真的确定！");
        }
    }

    function nextScreen(){
        console.log("nextScreen");
        $("#screen0").hide();
        $("#screen1").show();
        $('#born').animateNumber(
                {
                    number: 22,

                    numberStep: function (now, tween) {

                        var floored_number = Math.floor(now) / 22,
                                target = $(tween.elem);
                        floored_number = (floored_number * 22).toFixed(0);

                        target.text(floored_number);
                    }
                },
                11000
        );
        $('#together').animateNumber(
                {
                    number: 695,

                    numberStep: function (now, tween) {

                        var floored_number = Math.floor(now) / 695,
                                target = $(tween.elem);
                        floored_number = (floored_number * 695).toFixed(0);

                        target.text(floored_number);
                    }
                },
                11000
        );
        $('#forever').animateNumber(
                {
                    number: 6000000,

                    numberStep: function (now, tween) {

                        var floored_number = Math.floor(now) / 6000000,
                                target = $(tween.elem);
                        floored_number = (floored_number * 6000000).toFixed(0);

                        target.text(floored_number);
                    }
                },
                15000
        );
        $("#container1").animate({height:"26.52rem"},12000,function(){
            $("#container1").animate({height:"6rem"},3000,function(){
                $("#container1").hide();
                $("#container2").show(1000,function(){
                    $("#pic0").show(1000,function(){
                        $("#pic1").show(1000,function(){
                            $("#pic2").show(1000,function(){
                                $("#pic3").show(1000,function(){
                                    $("#pic4").show(1000,function(){
                                        $("#pic5").show(1000,function(){
                                            $("#pic6").show(1000,function(){
                                                $("#pic7").show(1000,function(){
                                                    $("#pic8").show(1000,function(){
                                                        $("#pic9").show(1000,function(){
                                                            $("#next1").show();
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            });
        });

    }
    function nextScreen1(){
        console.log("nextScreen1");
        // var top = document.body.clientHeight * 2;
        // console.log(top);
        // $("body").scrollTop(top);
        $("#screen1").hide();
        $("#screen2").show(1000,function(){
            $("#pic10").show(1000,function(){
                $("#pic11").show(1000,function(){
                    $("#pic12").show(1000,function(){
                        $("#pic13").show(1000,function(){
                            $("#pic14").show(1000,function(){
                                $("#pic15").show(1000,function(){
                                    $("#pic16").show(1000,function(){
                                        $("#pic17").show(1000,function(){
                                            $("#pic18").show(1000,function(){
                                                $("#pic19").show(1000,function(){
                                                    $("#next2").show();
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })

    }
    function nextScreen2(){
        console.log("nextScreen2");
        // var top = document.body.clientHeight * 3;
        // console.log(top);
        // $("body").scrollTop(top);
        $("#screen2").hide();
        $("#screen3").show();
        initPlaces();

    }
    function initPlaces() {
        var s = '我们一起走过很多路，去过很多地方';
        var ss = '爬山 下海 听演唱会 搜寻好吃的小馆子';
        var sss = '希望我们还会一起去更多的地方，看更多的风景，发生更多的故事...'
        var index = 0;
        var index2 = 0;
        var index3 = 0;
        var length = s.length;
        var length2 = ss.length;
        var length3 = sss.length;
        var tId = null;

        function start(){
            $('#firstWord').text('');
            $('#secondWord').text('');
            $('#thirdWord').text('');

            tId=setInterval(function(){
                $('#firstWord').append(s.charAt(index));
                if(index++ === length){
                    // clearInterval(tId);
                    // index = 0;
                    // start()
                    $('#secondWord').append(ss.charAt(index2));
                    if(index2++ === length2){
                        $('#thirdWord').append(sss.charAt(index3));
                        if(index3++ === length3){
                            $("#tickets").show(1000);
                            initImgs();
                            $("#next3").show(1000);
                            clearInterval(tId);
                        }
                        index2--;}
                    index--;}
            },200);
        }

        start();
    }
    function initImgs(){
        var cc5 = $('.card-container-5');
        cc5.click(function(){
            var firstCard = cc5.children('.card').first(),
                    cssRoll = {
                        transform: 'rotate(-45deg)',
                        opacity:0
                    };
            firstCard.css(cssRoll);
            setTimeout(function(){
                cc5.append(firstCard);
                firstCard.attr('style','');
            },300);
        });
    }

    function nextScreen3(){
        console.log("nextScreen3");
        $("#screen3").hide();
        $("#screen4").show(1000,function(){
            $("#picFrameDiv").show(1000,function(){
                initImgs1();
            });
        });

    }

    function initImgs1() {
        //启动引擎  FPS 刷新率  刷新率越高一般看起来越流畅 但是也要看电脑的性能！一般游戏是60FPS 射击类游戏 120FPS以上
        move(10,'move()')//5=200FPS 6=166FPS 7=142FPS 8=125FPS 9=111FPS 10=100FPS
        addObj($(".picFrame>.picItem").eq(0),830,0,2000,'complete(0)')// JQ对象 ,X位置,Y位置,用时
    }

    function complete(i){
        if(i==0){
            addObj($(".picFrame>.picItem").eq(1),0,1250,2000,'complete(1)')
        }else if(i==1){
            addObj($(".picFrame>.picItem").eq(2),830,0,2000,'complete(2)')
        }else if(i==2){
            addObj($(".picFrame>.picItem").eq(3),830,-1250,2000,'complete(3)')
        }else if(i==3){
            addObj($(".picFrame>.picItem").eq(4),-830,1250,2000,'complete(4)')
        }else if(i==4){
            addObj($(".picFrame>.picItem").eq(5),830,1250,2000,'complete(5)')
        }else if(i==5){
            addObj($(".picFrame>.picItem").eq(6),-830,-1250,2000,'complete(6)')
        }else if(i==6){
            addObj($(".picFrame>.picItem").eq(7),830,1250,2000,'complete(7)')
        }else if(i==7){
            addObj($(".picFrame>.picItem").eq(7),0,0,1000,'complete(8)')
        }else if(i==8){
            addObj($(".picFrame>.picItem").eq(0),0,0,1000,'complete(9)')
        }else if(i==9){
            $("#next4").show();
        }

    }

    function addObj(obj,X,Y,time,func){//JQ对象,移动到的位置X,移动到的位置Y,完成动画的总时间,完成后执行的函数
        var picItem={
            "obj":obj,/*JQ选择的对象 必须*/
            "X":X,/*移动到的位置X 必须*/
            "Y":Y,/*移动到的位置Y 必须*/
            "X1":parseInt($(obj).css("left"),10),/*对象的起初位置X 自取*/
            "Y1":parseInt($(obj).css("top"),10),/*对象的起初位置Y  自取*/
            "progress":0,/*相对时间内的进度  引擎自己计算*/
            "time":time,/*用多久时间去完成 的总时间 必须*/
            "wholeProgress":0,/*计算时间 的总进度 引擎自己计算 */
            "complete":func/*完成后 执行的函数  可以有*/
        };
        var exists=false;
        for (var i=0; i<objArray.length;i++){
            if(picItem.obj.selector==objArray[i].obj.selector){exists=true;}
            // JQ 1.7.2 存在这个属性 $('body div').selector 大概等于 'body div' 使用要注意了
        }
        if(exists==false){//不存在加入对象
            objArray[objArray.length]=picItem;
        }
    }

    function move(time2){   //用时钟自启动的引擎  引擎就是无限循环  提供动力的那总
        for(var i=0;i<objArray.length;i++){//循环开始
            if(objArray[i].wholeProgress==0){//用时间计算出总的进度  进度与时间相关
                objArray[i].wholeProgress=Math.ceil(objArray[i].time/time2);
            }
            if(objArray[i].progress==objArray[i].wholeProgress){
                objArray[i].obj.css("left", objArray[i].X);//位置最后调整
                objArray[i].obj.css("top", objArray[i].Y);//位置最后调整
                var str=objArray[i].complete;
                objArray.splice(i,1)//删除对象
                eval(str)//执行回调函数
            }else{
                progress=objArray[i].progress/objArray[i].wholeProgress*90;
                if(objArray[i].X>objArray[i].X1){//横向 向右移动
                    if(objArray[i].X1<=0){
                        moveWidth=objArray[i].X+Math.abs(objArray[i].X1);//真实移动宽度
                    }
                    else{
                        moveWidth=Math.abs(Math.abs(objArray[i].X1)-objArray[i].X);//真实移动宽度
                    }
                    //计算出移动宽度
                    position=Math.sin(progress*(2*Math.PI/360))*(moveWidth)
                    objArray[i].obj.css("left",position+objArray[i].X1);
                }
                else{//横向 向左移动
                    moveWidth=Math.abs(objArray[i].X-Math.abs(objArray[i].X1));//计算出移动距离
                    position=Math.sin(progress*(2*Math.PI/360))*(moveWidth)
                    objArray[i].obj.css("left",objArray[i].X1-position);
                }
                if(objArray[i].Y>objArray[i].Y1){//纵向 向下移动
                    if(objArray[i].Y1<=0){
                        moveWidth=objArray[i].Y+Math.abs(objArray[i].Y1);//真实移动宽度
                    }
                    else{
                        moveWidth=Math.abs(Math.abs(objArray[i].Y1)-objArray[i].Y);//真实移动宽度
                    }
                    //计算出移动宽度
                    position=Math.sin(progress*(2*Math.PI/360))*(moveWidth)
                    objArray[i].obj.css("top",position+objArray[i].Y1);
                }
                else{//横向 向左移动
                    moveWidth=Math.abs(objArray[i].Y-Math.abs(objArray[i].Y1));//计算出移动距离
                    position=Math.sin(progress*(2*Math.PI/360))*(moveWidth)
                    objArray[i].obj.css("top",objArray[i].Y1-position);
                }
                objArray[i].progress=objArray[i].progress+1;
            }
        }//循环结束
        setTimeout('move('+time2+')',time2)//自己启动自己//最后执行
    }
    function nextScreen4(){
        console.log("nextScreen4");
        $("#screen4").hide();
        $("#screen5").show();
	$("#word0").show(1000,function(){
	   $("#word1").show(1000,function(){
		$("#word2").show(1000,function(){
		    $("#word3").show(1000,function(){
			 $("#word4").show(1000,function(){
		initBall0();
	      setTimeout("initBall1()",3500);
	      setTimeout("initBall2()",7000);
	      setTimeout("initBall3()",10500);
			})
		    })
	       })
	   })
	})
    }
   function initBall0(){
         var world = anima.world(),
      item0 = world.add(document.querySelector('#ball0'));
	     $("#ball0").show();

   item0
      .animate([
        {
          translate: [0, 350, 0], //基调下落高度是 300 - 0
          ease: 'ease-in-quad'
        },{
          translate: [10, 0, 0] //基调X Y坐标
        }
      ], 500)
      .animate({
        scale: [.1, -.2, 0]  //落地时 发生变形 以模拟落地形态
      }, 50)
      .animate({
        scale: [-.1, .2, 0]  //弹起时 发生变形 以模拟弹起形态
      }, 50)
      .animate([
        {
          translate: [0, -80, 0],
          ease: 'ease-out-quad'
        },{
          translate: [100, 0, 0]
        }
      ], 450)
      .animate([
        {
          translate: [0, 450, 0],
          ease: 'ease-in-quad'
        },{
          translate: [100, 0, 0]
        }
      ], 400)
      .animate({
        scale: [.05, -.15, 0]
      }, 40)
      .animate({
        scale: [-.05, .15, 0]
      }, 40)
    }
	
    function initBall1(){
         var world = anima.world(),
      item1 = world.add(document.querySelector('#ball1'));
	       $("#ball1").show();
      item1
      .animate([
        {
          translate: [0, 480, 0], //基调下落高度是 300 - 0
          ease: 'ease-in-quad'
        },{
          translate: [80, 0, 0] //基调X Y坐标
        }
      ], 500)
      .animate({
        scale: [.1, -.2, 0]  //落地时 发生变形 以模拟落地形态
      }, 50)
      .animate({
        scale: [-.1, .2, 0]  //弹起时 发生变形 以模拟弹起形态
      }, 50)
      .animate([
        {
          translate: [0, -140, 0],
          ease: 'ease-out-quad'
        },{
          translate: [180, 0, 0]
        }
      ], 450)
      .animate([
        {
          translate: [0, 280, 0],
          ease: 'ease-in-quad'
        },{
          translate: [150, 0, 0]
        }
      ], 400)
      .animate({
        scale: [.05, -.15, 0]
      }, 40)
      .animate({
        scale: [-.05, .15, 0]
      }, 40)
      .animate([
        {
          translate: [0, -150, 0],
          ease: 'ease-out-quad'
        },{
          translate: [100, 0, 0]
        }
      ], 350)
      .animate([
        {
          translate: [0, 430, 0],
          ease: 'ease-in-quad'
        },{
          translate: [80, 0, 0]
        }
      ], 300)
      .animate({
        scale: [.02, -.1, 0]
      }, 25)
      .animate({
        scale: [-.02, .1, 0]
      }, 25)

    }
	 function initBall2(){
         var world = anima.world(),
      item2 = world.add(document.querySelector('#ball2'));
	       $("#ball2").show();
      item2
      .animate([
        {
          translate: [0, 500, 0], //基调下落高度是 300 - 0
          ease: 'ease-in-quad'
        },{
          translate: [50, 0, 0] //基调X Y坐标
        }
      ], 500)
      .animate({
        scale: [.1, -.2, 0]  //落地时 发生变形 以模拟落地形态
      }, 50)
      .animate({
        scale: [-.1, .2, 0]  //弹起时 发生变形 以模拟弹起形态
      }, 50)
      .animate([
        {
          translate: [0, -150, 0],
          ease: 'ease-out-quad'
        },{
          translate: [80, 0, 0]
        }
      ], 450)
      .animate([
        {
          translate: [0, 500, 0],
          ease: 'ease-in-quad'
        },{
          translate: [80, 0, 0]
        }
      ], 400)
      .animate({
        scale: [.05, -.15, 0]
      }, 40)
      .animate({
        scale: [-.05, .15, 0]
      }, 40)
      .animate([
        {
          translate: [0, -200, 0],
          ease: 'ease-out-quad'
        },{
          translate: [80, 0, 0]
        }
      ], 350)
      .animate([
        {
          translate: [0, 450, 0],
          ease: 'ease-in-quad'
        },{
          translate: [80, 0, 0]
        }
      ], 300)
      .animate({
        scale: [.02, -.1, 0]
      }, 25)
      .animate({
        scale: [-.02, .1, 0]
      }, 25)

    }
	function initBall3(){
         var world = anima.world(),
      item3 = world.add(document.querySelector('#ball3'));
	       $("#ball3").show();
      item3
      .animate([
        {
          translate: [0, 750, 0], //基调下落高度是 300 - 0
          ease: 'ease-in-quad'
        },{
          translate: [180, 0, 0] //基调X Y坐标
        }
      ], 500)
      .animate({
        scale: [.1, -.2, 0]  //落地时 发生变形 以模拟落地形态
      }, 50)
      .animate({
        scale: [-.1, .2, 0]  //弹起时 发生变形 以模拟弹起形态
      }, 50)
      .animate([
        {
          translate: [0, -240, 0],
          ease: 'ease-out-quad'
        },{
          translate: [190, 0, 0]
        }
      ], 450)
      .animate([
        {
          translate: [0, 480, 0],
          ease: 'ease-in-quad'
        },{
          translate: [70, 0, 0]
        }
      ], 400)
      .animate({
        scale: [.05, -.15, 0]
      }, 40)
      .animate({
        scale: [-.05, .15, 0]
      }, 40)
      .animate([
        {
          translate: [0, -200, 0],
          ease: 'ease-out-quad'
        },{
          translate: [170, 0, 0]
        }
      ], 350)
      .animate([
        {
          translate: [0, 480, 0],
          ease: 'ease-in-quad'
        },{
          translate: [100, 0, 0]
        }
      ], 300)
      .animate({
        scale: [.02, -.1, 0]
      }, 25)
      .animate({
        scale: [-.02, .1, 0]
      }, 25)

    }
