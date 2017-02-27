//
//  WXEventModule.m
//  WeexTest
//
//  Created by Dongdong on 17/2/27.
//  Copyright © 2017年 com. All rights reserved.
//

#import "WXEventModule.h"

@implementation WXEventModule
@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(openURL:));
WX_EXPORT_METHOD(@selector(openURL:callback:));
WX_EXPORT_METHOD(@selector(showAlert:msg:));

- (void)openURL:(NSString *)url {
    [self openURL:url callback:nil];
}

- (void)openURL:(NSString *)url callback:(WXModuleCallback)callback {
    WXBaseViewController *vc = [[WXBaseViewController alloc] initWithSourceURL:[NSURL URLWithString:@""]];
    [weexInstance.viewController.navigationController pushViewController:vc animated:YES];
    if (callback) {
        callback(@{@"result": @"success"});
    }
}

- (void)showAlert:(NSString *)title msg:(NSString *)msg {
    UIAlertController *alert = [UIAlertController alertControllerWithTitle:title message:msg preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *action = [UIAlertAction actionWithTitle:@"确定" style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        NSLog(@"__________________________________");
    }];
    [alert addAction:action];
    [weexInstance.viewController presentViewController:alert animated:YES completion:nil];
}


@end
