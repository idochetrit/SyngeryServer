   var Exposebox=Exposebox||{};
            Exposebox.config =Exposebox.config|| {
            path : window.location.protocol+'//server.exposebox.com',
    files : 'sf.exposebox.com' 
};
    //  Prevents multiple script load
    if (!Exposebox.dmp) {
if(Exposebox.jQueryLoaded){
    Exposebox.jQueryLoaded2=Exposebox.jQueryLoaded;
    Exposebox.jQueryLoaded=function(){
        Exposebox.jQueryLoaded2();
        Exposebox.dmp.start();
    };}
else    Exposebox.jQueryLoaded=function(){
    Exposebox.dmp.start();
};

Exposebox.dmp={
    started:false,
    markProductView: function(productId) {
    },
    start:function()
    {  
        if(this.started) return;
        this.started=true;
        var $ = Exposebox.jQuery;
        $(function(){
       $('<iframe src="//server.exposebox.com/dmp/iftags?c=17&oa=Rfj" height="0" width="0" frameBorder="0" style="display: block;" ></iframe>').appendTo('body');
       });
            }
        }
        if(Exposebox.jQuery){
            Exposebox.dmp.start();
        }else { 
               var jb = document.createElement('script'); 
                jb.type = 'text/javascript'; 
                jb.async = true; 
                jb.src = window.location.protocol+'//' + Exposebox.config.files + '/widget/exposebox-jquery.js?v=1.00';  
                var s = document.getElementsByTagName('script')[0]; 
                s.parentNode.insertBefore(jb, s);
            }}