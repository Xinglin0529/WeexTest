//
//  WXImageLoaderImpl.m
//  WeexTest
//
//  Created by Dongdong on 17/2/27.
//  Copyright © 2017年 com. All rights reserved.
//

#import "WXImageLoaderImpl.h"
#import <SDWebImage/SDWebImageManager.h>

@implementation WXImageLoaderImpl

- (id<WXImageOperationProtocol>)downloadImageWithURL:(NSString *)url imageFrame:(CGRect)imageFrame userInfo:(NSDictionary *)options completed:(void (^)(UIImage *, NSError *, BOOL))completedBlock {
    if ([url hasPrefix:@"//"]) {
        url = [@"http:" stringByAppendingString:url];
    }
    return (id<WXImageOperationProtocol>)[[SDWebImageManager sharedManager] loadImageWithURL:[NSURL URLWithString:url] options:0 progress:nil completed:^(UIImage * _Nullable image, NSData * _Nullable data, NSError * _Nullable error, SDImageCacheType cacheType, BOOL finished, NSURL * _Nullable imageURL) {
        completedBlock(image, error, finished);
    }];
}

@end
