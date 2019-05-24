$(function(){
  "use strict";

  var $ = require("jQuery");
  
  // ローカルストレージへの書き込み関数
    function setLocalStorage(key,value){
        localStorage.setItem(key,value);
    }

    // ローカルストレージからの読み込み関数
    function getLocalStorage(key){
        return localStorage.getItem(key);
    }

    // 初期表示時に前回保存された値を読み込んでセット
    $(".hira_sei").val(getLocalStorage("hira_sei"));
    $(".hira_mei").val(getLocalStorage("hira_mei"));
    $(".kan_sei").val(getLocalStorage("kan_sei"));
    $(".kan_mei").val(getLocalStorage("kan_mei"));
    $(".year").val(getLocalStorage("year"));
    $(".month").val(getLocalStorage("month"));
    $(".day").val(getLocalStorage("day"));

    // 結果ボタンクリック時の処理
    $("#formId").keyup(function(){
        setLocalStorage("hira_sei",$(".hira_sei").val());
        setLocalStorage("hira_mei",$(".hira_mei").val());
        setLocalStorage("kan_sei",$(".kan_sei").val());
        setLocalStorage("kan_mei",$(".kan_mei").val());
        setLocalStorage("year",$(".year").val());
        setLocalStorage("month",$(".month").val());
        setLocalStorage("day",$(".day").val());
    });
});