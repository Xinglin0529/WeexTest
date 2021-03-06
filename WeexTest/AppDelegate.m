//
//  AppDelegate.m
//  WeexTest
//
//  Created by Dongdong on 17/2/27.
//  Copyright © 2017年 com. All rights reserved.
//

#import "AppDelegate.h"
#import "ViewController.h"
#import <WeexSDK/WeexSDK.h>
#import "WXImageLoaderImpl.h"
#import "WXEventModule.h"
#import <TBWXDevTool/WXDevTool.h>

@interface AppDelegate ()

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    [self initWeexSDK];
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    NSURL *URL = [NSURL URLWithString:[NSString stringWithFormat:@"file://%@/bundlejs/main.vue",[NSBundle mainBundle].bundlePath]];
    WXBaseViewController *base = [[WXBaseViewController alloc] initWithSourceURL:URL];
    self.window.rootViewController = [[UINavigationController alloc] initWithRootViewController:base];
    [self.window makeKeyAndVisible];
    return YES;
}

- (void)initWeexSDK
{
//    [WXDevTool setDebug:YES];
//    [WXDevTool launchDevToolDebugWithUrl:@"ws://10.28.100.114:8088/debugProxy/native"];
    [WXAppConfiguration setAppGroup:@"LDApp"];
    [WXAppConfiguration setAppName:@"WeexTest"];
    [WXAppConfiguration setAppVersion:@"1.0.0"];
    [WXAppConfiguration setExternalUserAgent:@"ExternalUA"];
    [WXSDKEngine registerHandler:[WXImageLoaderImpl new] withProtocol:@protocol(WXImgLoaderProtocol)];
    [WXSDKEngine registerModule:@"event" withClass:[WXEventModule class]];
    [WXSDKEngine initSDKEnvironment];
    
#ifdef DEBUG
    [WXLog setLogLevel:WXLogLevelLog];
#endif
}

- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
