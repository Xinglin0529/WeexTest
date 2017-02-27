//
//  ViewController.m
//  WeexTest
//
//  Created by Dongdong on 17/2/27.
//  Copyright © 2017年 com. All rights reserved.
//

#import "ViewController.h"
#import <WeexSDK/WeexSDK.h>

@interface ViewController ()

@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    if (!_instance) {
        _instance = [[WXSDKInstance alloc] init];
        _instance.viewController = self;
        _instance.frame = self.view.bounds;
    }
    
    __weak typeof(self) weakself = self;
    _instance.onCreate = ^(UIView *view) {
        [weakself.weexView removeFromSuperview];
        weakself.weexView = view;
        [weakself.view addSubview:weakself.weexView];
    };
    
    _instance.onFailed = ^(NSError *error) {
        
    };
    
    NSURL *URL = [NSURL URLWithString:[NSString stringWithFormat:@"file://%@/bundlejs/main.js",[NSBundle mainBundle].bundlePath]];
    NSString *randomURL = [NSString stringWithFormat:@"%@%@random=%d",URL.absoluteString,URL.query?@"&":@"?",arc4random()];
    [_instance renderWithURL:[NSURL URLWithString:randomURL] options:@{@"bundleUrl":URL.absoluteString} data:nil];
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
