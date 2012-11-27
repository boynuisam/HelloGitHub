//
//  HelloGitHubTests.m
//  HelloGitHubTests
//
//  Created by helios-team on 11/26/12.
//  Copyright (c) 2012 NhutTruong. All rights reserved.
//

#import "HelloGitHubTests.h"
#import <SenTestingKit/SenTestingUtilities.h>
@implementation HelloGitHubTests

- (void)setUp
{
    [super setUp];
    
    // Set-up code here.
}

- (void)tearDown
{
    // Tear-down code here.
    
    [super tearDown];
}

- (void)testExample
{
    //STFail(@"Unit tests are not implemented yet in HelloGitHubTests");
    //STFail(@"####Write wrong test");
    STAssertEquals(1, 1, @"Testing");
}

- (void)testExampleSecond
{
    //STFail(@"Unit tests are not implemented yet in HelloGitHubTests");
    STAssertEquals(2, 1, @"Testing equal TRUE");
}

- (void)testExampleThird
{
    //STFail(@"Unit tests are not implemented yet in HelloGitHubTests");
    STAssertEquals(1, 1, @"Testing equal TRUE");
}

@end
