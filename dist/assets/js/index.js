$(function(){function a(a,e){localStorage.setItem(a,e)}function e(a){return localStorage.getItem(a)}$(".hira_sei").val(e("hira_sei")),$(".hira_mei").val(e("hira_mei")),$(".kan_sei").val(e("kan_sei")),$(".kan_mei").val(e("kan_mei")),$(".year").val(e("year")),$(".month").val(e("month")),$(".day").val(e("day")),$("#formId").on("keyup, change",function(){a("hira_sei",$(".hira_sei").val()),a("hira_mei",$(".hira_mei").val()),a("kan_sei",$(".kan_sei").val()),a("kan_mei",$(".kan_mei").val()),a("year",$(".year").val()),a("month",$(".month").val()),a("day",$(".day").val())})});