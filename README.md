# SunRiseFallTime
JavaScript 基于ip地址获取的经纬度信息计算日出日落时间  
使用的获取地理信息api https://ip.seeip.org/geoip  
获取ip地址api https://ip.seeip.org  
实现原理 https://blog.csdn.net/liu877260630/article/details/80482159?spm=1001.2014.3001.5501  
存在的问题：四节气以sin函数为模型，而实现时使用直线函数，在节气中间时间段可能存在误差
          可通过提供该月份具体天数提高精度
          可通过提供具体四时令时间提高精度
          可通过提供具体最大太阳入射角提高精度
          <img width="1038" alt="Snipaste_2021-06-23_16-29-08" src="https://user-images.githubusercontent.com/64928288/123068511-8b029900-d444-11eb-94ac-e1e8f62c01c6.png">


