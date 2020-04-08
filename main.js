!function ($) {

    $(".shuffle-me").shuffleImages({
        trigger: "imageMouseMove",
        triggerTarget: false,
        mouseMoveTrigger: 50,
        hoverTrigger: 200,
        scrollTrigger: 100,
        target: "> img"
    });
}