---
layout: post
title: ""
description: ""
category: "Debug"
comments: true
tags: [SDL GL]
---
#配置SDL过程中遇到的问题及解决方案

##第一个问题

显示调用的SDL函数找不到，显然是SDL的库没有装上，从官网上下载的SDL2.0编译安装也不好用，最后解决方案：

    $brew install sdl

用homebrew装上1.5.4版本解决问题。

##第二个问题

libpng中出现前向声明问题

    Log: [ 13%] Building CXX object rtengine/CMakeFiles/rtengine.dir/imageio.cc.o                                                                                     
    /home/pinipini/rt-hg/rtengine/imageio.cc: In function ‘void png_read_data(png_struct*, png_byte*, png_size_t)’:                                              
    /home/pinipini/rt-hg/rtengine/imageio.cc:870:74: error: invalid use of incomplete type ‘struct png_struct’
    /usr/include/libpng15/png.h:827:16: error: forward declaration of ‘struct png_struct’
    /home/pinipini/rt-hg/rtengine/imageio.cc: In function ‘void png_write_data(png_struct*, png_byte*, png_size_t)’:
    /home/pinipini/rt-hg/rtengine/imageio.cc:881:52: error: invalid use of incomplete type ‘struct png_struct’
    /usr/include/libpng15/png.h:827:16: error: forward declaration of ‘struct png_struct’
    /home/pinipini/rt-hg/rtengine/imageio.cc: In function ‘void png_flush(png_struct*)’:
    /home/pinipini/rt-hg/rtengine/imageio.cc:890:37: error: invalid use of incomplete type ‘struct png_struct’
    /usr/include/libpng15/png.h:827:16: error: forward declaration of ‘struct png_struct’
    /home/pinipini/rt-hg/rtengine/imageio.cc:890:46: error: ‘CVT_PTR’ was not declared in this scope
    make[2]: *** [rtengine/CMakeFiles/rtengine.dir/imageio.cc.o] Error 1
    make[1]: *** [rtengine/CMakeFiles/rtengine.dir/all] Error 2
    make: *** [all] Error 2

  原因是struct png_struct在比较新的版本中已经不再使用。解决方法：降级。
    
    brew remove libpng

   然后从官网上下载比较旧的版本
    
    $./configure
    $make
    $make install

##第三个问题

    g++ -Wall -ansi -pedantic -I"/Users/xiafei/p5out/include" -I"/Users/xiafei/p5out/src" -g -O0 -o bin/debug/physics.exe bin/debug/application/application.o bin/debug/application/imageio.o bin/debug/application/camera_roam.o bin/debug/application/scene_loader.o bin/debug/math/math.o bin/debug/math/color.o bin/debug/math/vector.o bin/debug/math/quaternion.o bin/debug/math/matrix.o bin/debug/math/camera.o bin/debug/scene/scene.o bin/debug/scene/geometry.o bin/debug/scene/material.o bin/debug/scene/mesh.o bin/debug/scene/model.o bin/debug/scene/triangle.o bin/debug/scene/sphere.o bin/debug/tinyxml/tinyxml.o bin/debug/tinyxml/tinyxmlerror.o bin/debug/tinyxml/tinyxmlparser.o bin/debug/physics/spherebody.o bin/debug/physics/trianglebody.o bin/debug/physics/planebody.o bin/debug/physics/spring.o bin/debug/physics/physics.o bin/debug/physics/collisions.o bin/debug/physics/main.o -L"/Users/xiafei/p5out/lib" -lGL -lGLU -lSDLmain -lSDL -lpng -lGLEW
    ld: library not found for -lGL
    collect2: ld returned 1 exit status
    make: *** [bin/debug/physics.exe] Error 1

脑测是GL的库没安装上
进入
     
     /Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.8.sdk/System/Library/Frameworks

   把需要的.dylib文件拷出来，然后放到项目的lib文件夹里，问题解决

##第四个问题

    ld: warning: ignoring file /Users/xiafei/p5out/lib/libGLEW.a, file was built for archive which is not the architecture being linked (x86_64): /Users/xiafei/p5out/lib/libGLEW.a
    Undefined symbols for architecture x86_64:
    "_glewInit", referenced from:
      _462::initialize_window(int, int, char const*)in application.o
    ld: symbol(s) not found for architecture x86_64
    collect2: ld returned 1 exit status
    make: *** [bin/debug/physics.exe] Error 1
    
似乎是一个比较常见的问题，正在解决当中。
直接下载了GLEW的源代码，重新编译安装了一遍，问题解决。