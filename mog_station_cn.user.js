// ==UserScript==
// @name         莫古station汉化
// @namespace    http://touhou.diemoe.net/
// @version      0.2
// @description  莫古station界面的简单中文化
// @author       呆萌
// @match        *://secure.square-enix.com/account/app/svc/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    menu2cn("menu_contract_button","服务合同程序");
    menu2cn("menu_option_button","大国防联军后勤补给站(?)");
    menu2cn("menu_shop_button","道具商城")
    menu2cn("menu_history_button","氪金记录")
    menu2cn("menu_support_button","用户支持")
    id2cn("to_service_contract_button2","'最终幻想XIV'的服务合同程序，续约、注销、购入。");
    id2cn("service_contract_button","'使用信用卡或水晶点购入月卡。");
    id2cn("charge_button","使用卡密兑换。");
    id2cn("code_input_button","兑换代码")

    href2cn("/account/app/svc/member","账户信息");
    href2cn("/account/app/svc/mbrInfoList","账户资料修改");
    href2cn("/account/app/svc/charge","水晶点充值");
    href2cn("/account/app/svc/crystahist","水晶点消费记录");
    href2cn("/account/app/svc/authori","支付卡管理");
    href2cn("/account/app/svc/accsettle","自动续费管理");
    href2cn("/account/app/svc/otpTop","一次性密码");

    menu2cn("to_option_service","可选服务")
    menu2cn("to_option_item","道具商城")
    menu2cn("menu_account_button","账户管理")
    text2cn("さん モグステーションへようこそ！","欢迎来到莫古Station！")
    text2cn("お客様の契約状況","用户合同情况")
    text2cn("利用期間の追加、支払い方法の変更","增加月卡时间、修改支付方法")
    text2cn("各種コード入力","只要是代码在这里兑换就对了。")
    text2cn("プレイするプラットフォームの追加","在其他平台上游玩需要先在这里进行购买。")
    text2cn("「ファイナルファンタジーXIV」のサービス契約手続きを行います。","办理“最终幻想XIV”的服务合同手续。");
    text2cn("複数のサービスアカウントをお持ちの方は、まずお手続きしたいサービスアカウントを下記のタブメニューより選択してください。","有多个服务账号的人，请先从下面的标签菜单中选择想要办理的服务账号。");
    text2cn("サービスアカウントの選択","服务账户的选择")
    text2cn("アカウント種別","账户类型")
    text2cn("コンパニオンアプリ","助手APP")
    text2cn("アプリを利用すると「お気に入りエーテライト」の登録可能数が増えます。詳しくは","使用应用程序的话，可以登录“收藏的王牌”的数量会增加。详细情况")
    text2cn("バージョン","资料片")
    text2cn("プレイ権があるプラットフォームに”○”が表示されます。","使用‘○’表示已获得游玩权限的平台")
    text2cn("サービス契約状態","月卡状态")
    text2cn("契約なし","过期啦 >_<")
    text2cn("自動継続手続き","自动续约管理")
    text2cn("契約日数を追加する","现在充值月卡")
    text2cn("キャラクターリスト","角色列表")
    text2cn("デジタルアップグレードサービス","升级为典藏版 / 获取数字特典")
    text2cn("ホームワールド変更サービス","角色数据转移服务")
    text2cn("キャラクター名変更サービス","角色名称修改服务")
    text2cn("ベテランリワード","陆行鸟礼物站(x)")

    text2cn("このアカウントは招待コード入力が完了しています","此帐号已输入被招待码")
    text2cn("このサービスアカウントの友達招待から","此帐号已招待好友")
    text2cn("人が新しくプレイを開始しました。","人。")
    text2cn("新生エオルゼア","重生之境")
    text2cn("蒼天のイシュガルド","苍穹之禁城")
    text2cn("紅蓮のリベレーター","红莲之狂潮")
    text2cn("漆黒のヴィランズ","暗影之逆焰")
    text2cn("サービスコース","服务套餐")
    text2cn("累積利用日数","累计使用天数")
    text2cn("お支払い方法","支付方式")
    text2cn("自動支払いがありません","未自动续约")
    text2cn("自動お支払い手続きは","自动续约手续请点")
    text2cn("追加有料オプション","追加收费选项")
    text2cn("契約なし","无")
    text2cn("キャラクター名","角色名称")
    text2cn("ホームワールド名","服务器名称")
    text2cn("リワードランク","WordRank")
    text2cn("まで獲得済","已获得")
    text2cn("ベテランリワード一覧は","奖励列表请点")
    text2cn("コレクターズ","典藏包")
    text2cn("エディション","")

    text2cn("ファイナルファンタジーXIV","最终幻想XIV");

    function text2cn(text,cn){
        var html= $("#base_body").html();
        $("#base_body").html(html.replace(text,cn));
    }
    function id2cn(id,cn){
        $("#"+id).html(cn);
        $("#"+id).attr("id","");
    }
    function menu2cn(id,cn){
        $("#"+id).html("<br>"+cn);
    }
    function class2cn(sel,cn){
        $("."+sel).html(cn);
        $("."+sel).removeClass(sel);
    }
    function href2cn(href,cn){
        $("[href='"+href+"']").html(cn);
    }
})();
