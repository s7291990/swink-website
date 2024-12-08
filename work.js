var work = [
    /*기타*/
    { "cate":"m01", "dep01":"기타", "dep02":"메인", "url":"html/main/index.html", "date":"2024-12-08" },

    { "cate":"m02", "dep01":"COMPANY", "dep02":"CEO 인사말", "url":"html/company/about.html", "date":"2024-12-08" },
	{ "cate":"m02", "dep01":"COMPANY", "dep02":"경영이념", "url":"html/company/mission-statements.html", "date":"2024-12-08" },
	{ "cate":"m02", "dep01":"COMPANY", "dep02":"비전과 전략", "url":"html/company/vision.html", "date":"2024-12-08" },
	{ "cate":"m02", "dep01":"COMPANY", "dep02":"주요 연혁", "url":"html/company/history.html", "date":"2024-12-08" },
	{ "cate":"m02", "dep01":"COMPANY", "dep02":"조직도", "url":"html/company/organization.html", "date":"2024-12-08" },
	{ "cate":"m02", "dep01":"COMPANY", "dep02":"CI", "url":"html/company/ci.html", "date":"2024-12-08" },
	{ "cate":"m02", "dep01":"COMPANY", "dep02":"자격면허", "url":"html/company/license.html", "date":"2024-12-08" },
	{ "cate":"m02", "dep01":"COMPANY", "dep02":"자료 다운로드", "url":"html/company/download.html", "date":"2024-12-08" },
	{ "cate":"m02", "dep01":"COMPANY", "dep02":"관계 회사", "url":"html/company/affiliated-company.html", "date":"2024-12-08" },
	{ "cate":"m02", "dep01":"COMPANY", "dep02":"파트너사", "url":"html/company/partner.html", "date":"2024-12-08" },

	{ "cate":"m03", "dep01":"BUSINESS", "dep02":"홈", "url":"html/business/business.html", "date":"2024-12-08" },
	{ "cate":"m03", "dep01":"BUSINESS", "dep02":"교육", "url":"html/business/edu.html", "date":"2024-12-08" },
	{ "cate":"m03", "dep01":"BUSINESS", "dep02":"AI 디지털교과서", "url":"html/business/textbook.html", "date":"2024-12-08" },
	{ "cate":"m03", "dep01":"BUSINESS", "dep02":"스윙크의 기술", "url":"html/business/rnd.html", "date":"2024-12-08" },
	{ "cate":"m03", "dep01":"BUSINESS", "dep02":"미래융합콘텐츠연구소", "url":"html/business/future.html", "date":"2024-12-08" },

    { "cate":"m04", "dep01":"WORKS", "dep02":"교육", "url":"html/works/edu.html", "date":"2024-12-08" },
	{ "cate":"m04", "dep01":"WORKS", "dep02":"시스템 통합 (SI)", "url":"html/works/si.html", "date":"2024-12-08" },
	{ "cate":"m04", "dep01":"WORKS", "dep02":"신사업 개발", "url":"html/works/new.html", "date":"2024-12-08" },

    { "cate":"m05", "dep01":"COMMUNICATION", "dep02":"notice", "url":"html/communication/notice-list.html", "date":"2024-12-08" },
	{ "cate":"m05", "dep01":"COMMUNICATION", "dep02":"PR", "url":"html/communication/pr.html", "date":"2024-12-08" },

    { "cate":"m06", "dep01":"RECRUIT", "dep02":"스윙크의 인재상", "url":"html/recruit/c4.html", "date":"2024-12-08" },
	{ "cate":"m06", "dep01":"RECRUIT", "dep02":"채용분야 소개", "url":"html/recruit/category.html", "date":"2024-12-08" },
	{ "cate":"m06", "dep01":"RECRUIT", "dep02":"채용절차 안내", "url":"html/recruit/procedure.html", "date":"2024-12-08" },
	{ "cate":"m06", "dep01":"RECRUIT", "dep02":"스윙크의 사람들-목록", "url":"html/recruit/people-list.html", "date":"2024-12-08" },
	{ "cate":"m06", "dep01":"RECRUIT", "dep02":"스윙크의 사람들-상세", "url":"html/recruit/people-view.html", "date":"2024-12-08" },
	{ "cate":"m06", "dep01":"RECRUIT", "dep02":"스윙크의 문화", "url":"html/recruit/culture.html", "date":"2024-12-08" },

    { "cate":"m07", "dep01":"CONTACT", "dep02":"연락처", "url":"html/contact/location.html", "date":"2024-12-08" },




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
