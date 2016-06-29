(function(){

  function init(){
    var speed = 250;
    var easing = mina.easeinout;

    [].slice.call(document.querySelectorAll('#grid > a')).forEach(
      function(el){
        var s = Snap(el.querySelector('svg'));
        var path = s.select('path');
        var pathConfig = {
          from: path.attr('d'),
          to: el.getAttribute('data-path-hover')
        };

        // 每个a添加点击事件
        el.addEventListener('mouseenter', function(e){
          path.animate({'path': pathConfig.to}, speed, easing)
        });
        el.addEventListener('mouseleave', function(e){
          path.animate({'path': pathConfig.from}, speed, easing)
        });
      }
    );
  }
  init();
})()
