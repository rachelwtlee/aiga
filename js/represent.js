//Side page
function openNav() {
    document.getElementById("sidepagemain").style.left = "0%";
}

function closeNav() {
    document.getElementById("sidepagemain").style.left = "100%";
}

function about_project() {
    document.getElementById("project_link").style.transform= "rotate(-23deg)";
    document.getElementById("project_link").style.transition= "linear 0.5s all";
}

function about_project2() {
    document.getElementById("project_link").style.transform= "rotate(-13deg)";
    document.getElementById("project_link").style.transition= "linear 0.5s all";
}

function about_method() {
    document.getElementById("method_link").style.transform= "rotate(-10deg)";
    document.getElementById("method_link").style.transition= "linear 0.5s all";
}

function about_method2() {
    document.getElementById("method_link").style.transform= "rotate(6deg)";
    document.getElementById("method_link").style.transition= "linear 0.5s all";
}

function about_us() {
    document.getElementById("about_link").style.transform= "rotate(-20deg)";
    document.getElementById("about_link").style.transition= "linear 0.5s all";
}

function about_us2() {
    document.getElementById("about_link").style.transform= "rotate(-7deg)";
    document.getElementById("about_link").style.transition= "linear 0.5s all";
}

function showProject() {
    document.getElementById("project").style.display="block";
     document.getElementById("method").style.display="none";
     document.getElementById("about").style.display="none";
}

function showMethod() {
    document.getElementById("project").style.display="none";
     document.getElementById("method").style.display="block";
     document.getElementById("about").style.display="none";
}

function showAbout() {
     document.getElementById("project").style.display="none";
     document.getElementById("method").style.display="none";
     document.getElementById("about").style.display="block";
}

//Sticky Note
$(function() {
    $( ".drag" ).draggable();
});

function Hide(HideID) 
{
  HideID.style.display = "none"; 
}
//HIGHLIGHT LINKS ROTATE MENU
function select_change() {
    document.getElementById("change").style.transform= "rotate(-15deg)";
    document.getElementById("change").style.transition= "linear 0.5s all";
}

function select_change_2() {
 document.getElementById("change").style.transform= "rotate(-6deg)";
 document.getElementById("change").style.transition= "linear 0.25s all";
}

function select_social() {
    document.getElementById("social").style.transform= "rotate(22.5deg)";
    document.getElementById("social").style.transition= "linear 0.5s all";
}

function select_social_2() {
 document.getElementById("social").style.transform= "rotate(7.5deg)";
 document.getElementById("social").style.transition= "linear 0.25s all";
}

function select_learn() {
    document.getElementById("learn").style.transform= "rotate(-7.5deg)";
    document.getElementById("learn").style.transition= "linear 0.5s all";
}

function select_learn_2() {
 document.getElementById("learn").style.transform= "rotate(7.5deg)";
 document.getElementById("learn").style.transition= "linear 0.25s all";
}

function select_power() {
    document.getElementById("power").style.transform= "rotate(24deg)";
    document.getElementById("power").style.transition= "linear 0.5s all";
}

function select_power_2() {
 document.getElementById("power").style.transform= "rotate(9deg)";
 document.getElementById("power").style.transition= "linear 0.25s all";
}

function select_quality() {
    document.getElementById("quality").style.transform= "rotate(-24deg)";
    document.getElementById("quality").style.transition= "linear 0.5s all";
}

function select_quality_2() {
 document.getElementById("quality").style.transform= "rotate(-8.5deg)";
 document.getElementById("quality").style.transition= "linear 0.25s all";
}

function select_represent() {
    document.getElementById("represent").style.transform= "rotate(0deg)";
    document.getElementById("represent").style.transition= "linear 0.5s all";
}

function select_represent_2() {
 document.getElementById("represent").style.transform= "rotate(-15deg)";
 document.getElementById("represent").style.transition= "linear 0.25s all";
}

//AFFECTING MAGNIFIED QUOTES
//QUOTE 1
function showquote1() {
    document.getElementById("micro1").style.color = "#F392D8";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "block";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "36";
    document.getElementById("q_identity").innerHTML = "White Male";
    document.getElementById("q_location").innerHTML = "Brooklyn, NY";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Data Science, Illustration, Education";
    }

//QUOTE 2
function showquote2() {
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "#F392D8";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "block";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "27";
    document.getElementById("q_identity").innerHTML = "White Female";
    document.getElementById("q_location").innerHTML = "Erie, PA";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Illustration, UI Design, UX Design";
}

//QUOTE 3
function showquote3() { 
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "#F392D8";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "block";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "46";
    document.getElementById("q_identity").innerHTML = "White Female";
    document.getElementById("q_location").innerHTML = "Portland, OR";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Interaction Design, Strategy";
}

//QUOTE 4
function showquote4() {  
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "#F392D8";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "block";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "59";
    document.getElementById("q_identity").innerHTML = "White Female";
    document.getElementById("q_location").innerHTML = "Queens, NY";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Illustration, Education, Experience Design, Strategy";

}

//QUOTE 5
function showquote5() {  
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "#F392D8";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "block";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "64";
    document.getElementById("q_identity").innerHTML = "White Female";
    document.getElementById("q_location").innerHTML = "Los Angeles, CA";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Experience Design, Illustration";
}

//QUOTE 6
function showquote6() {
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "#F392D8";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "block";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "54";
    document.getElementById("q_identity").innerHTML = "Bi / Multi-racial Female";
    document.getElementById("q_location").innerHTML = "Arlington, VA";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Research, Service Design, Strategy< UX Design";
}

//QUOTE 7
function showquote7() {    
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "#F392D8";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "block";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "25";
    document.getElementById("q_identity").innerHTML = "Latina / Hispanic Male";
    document.getElementById("q_location").innerHTML = "Corona, NY";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Education";
}

//QUOTE 8
function showquote8() { 
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "#F392D8";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = ""; 
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "block";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "27";
    document.getElementById("q_identity").innerHTML = "White Male";
    document.getElementById("q_location").innerHTML = "Brooklyn, NY";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Motion Graphics";
}

//QUOTE 9
function showquote9() {  
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "#F392D8";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "block";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "30";
    document.getElementById("q_identity").innerHTML = "Latina / Hispanic Female";
    document.getElementById("q_location").innerHTML = "Los Angeles, CA";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Education, UI Design, UX Design";
}

//QUOTE 10
function showquote10() { 
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "#F392D8";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = ""; 
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "block";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "31";
    document.getElementById("q_identity").innerHTML = "Bi / Multi-racial Female";
    document.getElementById("q_location").innerHTML = "Brooklyn, NY";
    document.getElementById("q_industry").innerHTML = "Animation, Communication / Graphic Design, Experience Design, Illustration, Strategy";
}

//QUOTE 11
function showquote11() {   
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "#F392D8";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "block";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "35";
    document.getElementById("q_identity").innerHTML = "White Female";
    document.getElementById("q_location").innerHTML = "Philadelphia, PA";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Experience Design, Interaction Design, Service Design, Strategy";
}

//QUOTE 12
function showquote12() {  
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "#F392D8";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "block";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "26";
    document.getElementById("q_identity").innerHTML = "Black Female";
    document.getElementById("q_location").innerHTML = "Brooklyn, NY";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Illustration";
}

//QUOTE 13
function showquote13() { 
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "#F392D8";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "block";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "27";
    document.getElementById("q_identity").innerHTML = "White Female";
    document.getElementById("q_location").innerHTML = "Nashville, TN";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Illustration, Packaging Design, Strategy";
}

//QUOTE 14
function showquote14() { 
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "#F392D8";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "block";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "34";
    document.getElementById("q_identity").innerHTML = "Latina / Hispanic Male";
    document.getElementById("q_location").innerHTML = "Colombia, NC";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Education, Service Design, UI Design, UX Design";
}

//QUOTE 15
function showquote15() {
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "#F392D8";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "block";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "22";
    document.getElementById("q_identity").innerHTML = "Latina / Hispanic Female";
    document.getElementById("q_location").innerHTML = "Austin, TX";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Illustration, Research, Strategy, Other";
}

//QUOTE 16
function showquote16() { 
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "#F392D8";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "block";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "26";
    document.getElementById("q_identity").innerHTML = "White Male";
    document.getElementById("q_location").innerHTML = "Chicago, IL";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Packaging Design, Social Impact Design, Service Design, Strategy";
}

//QUOTE 17
function showquote17() { 
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "#F392D8";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "block";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "26";
    document.getElementById("q_identity").innerHTML = "Latina / Hispanic Female";
    document.getElementById("q_location").innerHTML = "Brookyln, NY";
    document.getElementById("q_industry").innerHTML = "Other";
}

//QUOTE 18
function showquote18() {  
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "#F392D8";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "block";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "28";
    document.getElementById("q_identity").innerHTML = "White Female";
    document.getElementById("q_location").innerHTML = "Derwood, MD";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Social Impact Design";
}

//QUOTE 19
function showquote19() {  
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "#F392D8";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "block";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "26";
    document.getElementById("q_identity").innerHTML = "White Female";
    document.getElementById("q_location").innerHTML = "Chicago, IL";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Illustration, Packaging Design, UI Design, UX Design";
}

//QUOTE 20
function showquote20() {  
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "#F392D8";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "block";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "60";
    document.getElementById("q_identity").innerHTML = "White Female";
    document.getElementById("q_location").innerHTML = "Champaign, IL";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Education, Environmental Design, Research, Service Design";
}

//QUOTE 21
function showquote21() {  
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "#F392D8"; 
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "block";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "30";
    document.getElementById("q_identity").innerHTML = "Asian Female";
    document.getElementById("q_location").innerHTML = "Chicago, IL";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Environmental Design, Illustration";
}

//QUOTE 22
function showquote22() {  
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "#F392D8";
    document.getElementById("micro23").style.color = "";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "block";
    document.getElementById("quote23").style.display = "none";
    
    document.getElementById("q_age").innerHTML = "44";
    document.getElementById("q_identity").innerHTML = "WHite Female";
    document.getElementById("q_location").innerHTML = "Santa Monica, CA";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Illustration";
}

//QUOTE 23
function showquote23() {  
    document.getElementById("micro1").style.color = "";
    document.getElementById("micro2").style.color = "";
    document.getElementById("micro3").style.color = "";
    document.getElementById("micro4").style.color = "";
    document.getElementById("micro5").style.color = "";
    document.getElementById("micro6").style.color = "";
    document.getElementById("micro7").style.color = "";
    document.getElementById("micro8").style.color = "";
    document.getElementById("micro9").style.color = "";
    document.getElementById("micro10").style.color = "";
    document.getElementById("micro11").style.color = "";
    document.getElementById("micro12").style.color = "";
    document.getElementById("micro13").style.color = "";
    document.getElementById("micro14").style.color = "";
    document.getElementById("micro15").style.color = "";
    document.getElementById("micro16").style.color = "";
    document.getElementById("micro17").style.color = "";
    document.getElementById("micro18").style.color = "";
    document.getElementById("micro19").style.color = "";
    document.getElementById("micro20").style.color = "";
    document.getElementById("micro21").style.color = "";
    document.getElementById("micro22").style.color = "";
    document.getElementById("micro23").style.color = "#F392D8";
    
    document.getElementById("quote1").style.display = "none";
    document.getElementById("quote2").style.display = "none";
    document.getElementById("quote3").style.display = "none";
    document.getElementById("quote4").style.display = "none";
    document.getElementById("quote5").style.display = "none";
    document.getElementById("quote6").style.display = "none";
    document.getElementById("quote7").style.display = "none";
    document.getElementById("quote8").style.display = "none";
    document.getElementById("quote9").style.display = "none";
    document.getElementById("quote10").style.display = "none";
    document.getElementById("quote11").style.display = "none";
    document.getElementById("quote12").style.display = "none";
    document.getElementById("quote13").style.display = "none";
    document.getElementById("quote14").style.display = "none";
    document.getElementById("quote15").style.display = "none";
    document.getElementById("quote16").style.display = "none";
    document.getElementById("quote17").style.display = "none";
    document.getElementById("quote18").style.display = "none";
    document.getElementById("quote19").style.display = "none";
    document.getElementById("quote20").style.display = "none";
    document.getElementById("quote21").style.display = "none";
    document.getElementById("quote22").style.display = "none";
    document.getElementById("quote23").style.display = "block";
    
    document.getElementById("q_age").innerHTML = "26";
    document.getElementById("q_identity").innerHTML = "White Female";
    document.getElementById("q_location").innerHTML = "Chicago, IL";
    document.getElementById("q_industry").innerHTML = "Communication / Graphic Design, Illustration, Packaging Design, UI Design, UX Design";
}
