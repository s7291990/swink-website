var work = [
    /*기타*/
    { "cate":"m01", "dep01":"기타", "dep02":"메인", "url":"html/main/index.html", "date":"2022-03-14" },

    { "cate":"m02", "dep01":"PRODUCTS", "dep02":"제품소개", "url":"html/product/about.html", "date":"2022-03-14" },
    { "cate":"m02", "dep01":"PRODUCTS", "dep02":"제품 전체목록", "url":"html/product/all-list.html", "date":"2022-03-14" },
    { "cate":"m02", "dep01":"PRODUCTS", "dep02":"제품 상세", "url":"html/product/detail.html", "date":"2022-03-25" },

    { "cate":"m03", "dep01":"REFERANCE", "dep02":"지역별 시공사례", "url":"html/referance/region.html", "date":"2022-03-14" },
    { "cate":"m03", "dep01":"REFERANCE", "dep02":"지역별 시공사례-팝업", "url":"html/referance/region-pop.html", "date":"2022-03-25" },
    { "cate":"m03", "dep01":"REFERANCE", "dep02":"지역별 시공사례-데이터없음", "url":"html/referance/region-pop-nodata.html", "date":"2022-03-25" },
    { "cate":"m03", "dep01":"REFERANCE", "dep02":"용도별 시공사례", "url":"html/referance/use.html", "date":"2022-03-14" },
    { "cate":"m03", "dep01":"REFERANCE", "dep02":"용도별 시공사례-상세", "url":"html/referance/use-view.html", "date":"2022-03-25" },

    { "cate":"m04", "dep01":"RESOURCES", "dep02":"이건창호", "url":"html/resources/windows.html", "date":"2022-03-14" },
    { "cate":"m04", "dep01":"RESOURCES", "dep02":"타입별 기술자료", "url":"html/resources/datatype.html", "date":"2022-03-14" },
    { "cate":"m04", "dep01":"RESOURCES", "dep02":"이건마루", "url":"html/resources/floor.html", "date":"2022-03-14" },
    { "cate":"m04", "dep01":"RESOURCES", "dep02":"이건라움", "url":"html/resources/raum.html", "date":"2022-03-14" },
    { "cate":"m04", "dep01":"RESOURCES", "dep02":"이건바스컬렉션", "url":"html/resources/bath.html", "date":"2022-03-14" },

    { "cate":"m05", "dep01":"CONTACT", "dep02":"설계지원 문의", "url":"html/contact/contact.html", "date":"2022-03-14" },

    { "cate":"m06", "dep01":"SERVICE", "dep02":"이건소식", "url":"html/service/news-list.html", "date":"2022-03-14" },
    { "cate":"m06", "dep01":"SERVICE", "dep02":"아카데미", "url":"html/service/academy-list.html", "date":"2022-03-25" },

    { "cate":"m07", "dep01":"EAGON BRAND", "dep02":"소개", "url":"html/brand/about.html", "date":"2022-04-21" },
    { "cate":"m07", "dep01":"EAGON BRAND", "dep02":"이건창호", "url":"html/brand/windows.html", "date":"2022-04-21" },
    { "cate":"m07", "dep01":"EAGON BRAND", "dep02":"이건마루", "url":"html/brand/floor.html", "date":"2022-04-21" },
    { "cate":"m07", "dep01":"EAGON BRAND", "dep02":"이건라움", "url":"html/brand/raum.html", "date":"2022-04-21" },




];

 
$(function(){   
	listTable(".siteNavi li", ".siteNavi li .num");
}); 
 
function listTable(cls, num){   
	var tr;
	for(i=0; i<work.length; i++){
		tr += "<tr class="+work[i].cate+">";
		tr += "<td>"+work[i].dep01+"</td>";
		tr += "<td>"+work[i].dep02+"</td>";
		tr += "<td><a href='./"+work[i].url+"' target='_blank'>"+work[i].url+"</a></td>";
		tr += "<td class='ac'>"+work[i].date+"</td>";
		tr += "</tr>"; 
	}  
	$("table tbody").append(tr);  
	
	$(num).each(function(z){
		if(z===0){
			$(num).eq(z).text("("+work.length+"p)");
		}else{
			$(num).eq(z).text("("+$('.m0'+z).length+"p)");
		} 
	}); 
	$("body").on("click",cls, function(){
		$(cls).removeClass("on"); 
		$(this).addClass("on");
		$("table tbody tr").hide();
		if($(this).index() === 0){
			$("table tbody tr").show();
		}else{
			$(".m0"+$(this).index()).show();
		} 
	});  
}  
