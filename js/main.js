// 제이쿼리
// gnb에서 서브 메뉴 슬라이드

$('.btn_sub').click(function(){
    $(this).find('span').toggleClass('on');
    $(this).siblings('.list_sub_wrap').slideToggle();
});
    /* <해석> 
    $(this).find('span').toggleClass('on');
    find : 자식, 자손 모두 해당하여 찾는다
    addClass : 매소드 자체가 class 라고 지정되어 있어서 . 생략 가능
    .addClass()로 선택한 요소에 클래스 값을 추가할 수 있습니다.
    toggleClass : addClass 와 removeClass 가 반복
    */

    /* <해석> 
    $('.character_wrap').toggle();
    toggle : show 와 hide 가 반복 (보였다 안 보였다)
    slideToggle(); 슬라이드로 show 와 hide 반복 
    */

    /*
    <문제>
    $(this).find('span').toggleClass('on');
    $('.list_sub_wrap').slideToggle();
    이렇게 하면 하나의 버튼을 눌러도 모든 list_sub_wrap 이 모두 열림  

    <해결>     
    $(this).sblings('.list_sub_wrap').slideToggle();
    sblings : 형제 관계 
    list_sub_wrap 형제 관계 중 내가 누르는 것을 slideToggle 적용
    */

// gnb가 왼쪽에서 나타남

$('.top_left').click(function(){
    $('#gnb').animate({left:0},300,'swing'); // swing 속도감이 높아짐 
    $('.dark').css({'display':'block'});
});

/*
.animate({left:0},300); 
{} 안에 left 는 '' 생략 가능 / 뒤에는 시간(초)

.css('display','block'); == .css({'display':'block'});
*/

// gnb 사라짐
$('.dark').click(function(){
    $(this).css({'display':'none'});
    $('#gnb').animate({left:-304},300); // px 생략 가능
    $('.login_popup').hide();
});

// 로그인 팝업
$('.login_require').click(function(){
    $('.login_popup').show();
    $('#gnb').animate({left:-304},300);
});

// 로그인 팝업 닫기 버튼
$('.btn_close').click(function(){
    $('.login_popup').hide();
    $('.dark').css({'display':'none'});
});