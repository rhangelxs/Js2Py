// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.5.4.20-1-6
description: String.prototype.trim works for an String
includes: [runTestCase.js]
---*/

function testcase() {
  try
  {
    if(String.prototype.trim.call(new String()) == "")
      return true;
  }
  catch(e)
  {
  }
 }
runTestCase(testcase);
