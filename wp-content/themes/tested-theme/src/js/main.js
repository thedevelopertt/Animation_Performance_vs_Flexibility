function landingPageAnimation(){
    const timeline = new TimelineMax({
        onStart : function(){
            body.css({"overflow":"hidden"})
        },
    });

    const body = $("body")
    const landingTitle = $(".landing-lead")
    const landingAction = $(".landing-action")
    const easeOut = Power2.easeOut;
    const time = 1.5;

    const loadingRotation = new TimelineMax()

    loadingRotation.to(
        ".landing-svg > svg",
        time*3,
        {
            rotation : 360,
            ease : Elastic.easeInOut,
            transformOrigin : "50% 50%"
        }
    )




    timeline.from(
        ".landing-nav",
        time/3,
        {
            height : 0,
            opacity : 0,
            ease : easeOut
        }

    )
        .from(
        ".landing-lead",
        time/3,
        {
            opacity : 0,
            bottom : -100,
            ease : easeOut
        }
    ).from(
        landingAction,
        time/3,
        {
            opacity : 0,
            bottom: -100,
            ease: easeOut
        }
    )

}

$(document).ready(landingPageAnimation)