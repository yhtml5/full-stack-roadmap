## ionic tutorial

### install Ionic

First, install Node.js. Then, install the latest Cordova and Ionic command-line tools. 
Follow the Android and iOS platform guides to install required platform dependencies.

> npm install -g cordova ionic
  
Start a project, you can also use ready-made app templates like blank,sidemenu
 
> ionic start myApp tabs 
   
   
### Run Ionic
   
Use the Ionic tool to build, test, and run your apps (or use Cordova directly). 
Make sure to substitute iOS with **Android** to build for Android.
Then, try Ionic View to share your apps with testers and clients or to easily test on new devices. 
  
> cd myApp
> ionic platform add ios
> ionic build ios
> ionic emulate ios  --开启仿真IOS

 
### Develop for platforms  

#### Android

   1. installed [java-sdk]
   2. Open Android Studio,Go to tools > android > SDK Manager
   * "SDK Platform" for android-23
   * "Android SDK Platform-tools (latest)
   * "Android SDK Build-tools" (latest)
   3. if you have some problems,please go to cordova-android for help


[java-sdk]:http://www.oracle.com/technetwork/java/javase/downloads/index.html
[cordova-android]:https://cordova.apache.org/docs/zh-cn/6.x/guide/platforms/android/index.html