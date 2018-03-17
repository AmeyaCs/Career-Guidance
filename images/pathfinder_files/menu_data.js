fixMozillaZIndex=true; //Fixes Z-Index problem  with Mozilla browsers but causes odd scrolling problem, toggle to see if it helps
_menuCloseDelay=500;
_menuOpenDelay=150;
_subOffsetTop=2;
_subOffsetLeft=-2;

with(menuStyle=new mm_style())
{
	bordercolor="#000000";
	borderstyle="solid";
	borderwidth=1;
	fontfamily="Verdana";
	fontweight=" bolder";
	fontsize="60%";
	fontstyle="normal";
	
	headerbgcolor="#000000";
	headercolor="#000000";
	offbgcolor="#17375e";
	offcolor="#ffffff";
	onbgcolor="#82B6D7";
	oncolor="#ffffff";
	outfilter="randomdissolve(duration=0.3)";
	overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color=#777777', Direction=135, Strength=5)";
	padding=5;
	pagebgcolor="#82B6D7";
	pagecolor="black";
	separatorcolor="#000000";
	separatorsize=1;
	subimage="inc/arrow.gif";
	subimagepadding=2;
}
with(menuStyle1=new mm_style())
{
	bordercolor="#000000";
	borderstyle="solid";
	borderwidth=1;
	fontfamily="Verdana";
	fontweight=" bolder";
	fontsize="70%";
	fontstyle="normal";
	
	headerbgcolor="#17375e";
	offbgcolor="#17375e";
	offcolor="#ffffff";
	onbgcolor="#82B6D7";
	oncolor="#ffffff";
	outfilter="randomdissolve(duration=0.3)";
	overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color=#777777', Direction=135, Strength=5)";
	padding=4;
	pagebgcolor="#82B6D7";
	pagecolor="black";
	separatorcolor="#ffffff";
	separatorsize=1;
	//subimage="inc/arrow.gif";
	subimagepadding=2;
}

with(edumenu=new menuname("Main Menu"))
{
	alwaysvisible=1;
	orientation="horizontal";
	style=menuStyle1;
	//aI("text=f;");
	aI("text=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HOME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=default.aspx;");
	aI("showmenu=ABOUT US;text=&nbsp;&nbsp;ABOUT US&nbsp;&nbsp;;url=aboutus.aspx");
	aI("showmenu=BUSINESS SERVICES;text=&nbsp;BUSINESS SERVICES&nbsp;");
	aI("showmenu=INSTITUTIONAL SERVICES;text=&nbsp;INSTITUTIONAL SERVICES&nbsp;");
	aI("showmenu=STUDENT SERVICES;text=&nbsp;STUDENT SERVICES&nbsp;");
	aI("showmenu=WORK WITH US;text=&nbsp;WORK WITH US&nbsp;;url=careers.aspx");
	aI("showmenu=CONTACT US;text=&nbsp;CONTACT US&nbsp;;url=contactus.aspx");
	
	
}


with(edumenu=new menuname("BUSINESS SERVICES"))
{
	orientation="vertical";
	style=menuStyle;
	aI("align=left;text=360 Degree Feedback;url=360degreefeedback.aspx;");
	aI("align=left;text=Employee Opinion Survey;url=employeesurvey.aspx;");
	aI("align=left;text=Competency Based Assessments;url=competency.aspx;");
	aI("align=left;text=Assessment Center Activity;url=centeractivity.aspx;");
	aI("align=left;text=Prehire Process Management;url=prehire.aspx;");
	aI("align=left;text=Case Studies;url=casestudies.aspx;");
	
}

with(edumenu=new menuname("INSTITUTIONAL SERVICES"))
{
	orientation="Vertical";
	style=menuStyle;
	aI("align=left;text=Online Entrance Examinations;url=onlineexams.aspx;");
	aI("align=left;text=Automated Internal Assessments;url=internalexams.aspx;");
	aI("align=left;text=Behavioral Assessments;url=behavioralassessments.aspx;");
	aI("align=left;text=CaseStudies;url=casestudies1.aspx;");
	
}


with(edumenu=new menuname("STUDENT SERVICES"))
{
	orientation="Vertical";
	style=menuStyle;
	aI("align=left;text=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PathFinder&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=pathfinder.aspx;");
	aI("align=left;text=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ExamPrep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=examprep.aspx;");
	aI("align=left;text=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Careers&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;url=careernew.aspx;");
	
}


drawMenus();