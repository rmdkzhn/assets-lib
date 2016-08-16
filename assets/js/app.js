(function($) {
  'use strict';

  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
    });

    $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function() {
      $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
    });
  });
})(jQuery);

    function getMultiLine(f) {
      var lines =f.toString(); 
    return lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));   
    }
    var console_text = function() {  
/* 

        ╔═╗  ╔╗╔  ╔═╗  ┬    ┬ ┬  ┌┐     ┌─┐  ┌─┐  ┬  ┌─┐
        ║    ║║║  ║    │    │ │  ├┴┐    ├─┤  └─┐  │  ├─┤
        ╚═╝  ╝╚╝  ╚═╝  ┴─┘  └─┘  └─┘    ┴ ┴  └─┘  ┴  ┴ ┴
                                                   

    欢迎加入CNClub.asia团队 o(^▽^)o %c发送邮件到jobs@cnclub.asia
*/  
    }
    console.log(getMultiLine(console_text),'color:#337ab7;')