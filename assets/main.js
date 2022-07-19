function repeat_cat_tiles()
{
    const categories={
        categories:['DRAMA','ACTION','SCI-FI','FANTASY','HORROR','COMEDY','THRILLER','MYSTREY'],
        number:[1300,1400,1600,1300,1200,1200,1100]
    }    
    var left=7.89;
    var right=76.25;
    for(let i=0;i<=4;i++)
    {
        let mv_card=document.createElement("mvcard");
        document.getElementById("mvcard").style.left=left+"%";
        left+=21.17;
        document.getElementById("mvcard").style.left=right+"%";
        right-=21.17;

        var element=document.getElementById("categories")
        element.appendChild(mv_card);
    }
}

repeat_cat_tiles()

