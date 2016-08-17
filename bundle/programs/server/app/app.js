var require = meteorInstall({"lib":{"model":{"account.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/account.js                                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
VaildCodes = new Meteor.Collection("vaildCodes");                                                                 // 1
Tracks = new Meteor.Collection("tracks");                                                                         // 2
Applys = new Meteor.Collection("applys");                                                                         // 3
Recharge = new Meteor.Collection("recharge");                                                                     // 4
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bank.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/bank.js                                                                                              //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Bankcards = new Meteor.Collection("bankcards");                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"banner.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/banner.js                                                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Banners = new Meteor.Collection("banners");                                                                       // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"cases.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/cases.js                                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Cases = new Meteor.Collection("cases");                                                                           // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"discuz.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/discuz.js                                                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Discuzs = new Meteor.Collection("discuzs");                                                                       // 1
DiscuzMessages = new Meteor.Collection("discuzmessages");                                                         // 2
DiscuzApplys = new Meteor.Collection("discuzApplys");                                                             // 3
Recommands = new Meteor.Collection("recommands");                                                                 // 4
DiscuzFovar = new Meteor.Collection("discuzFovar");                                                               // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"doctor.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/doctor.js                                                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Doctors = new Meteor.Collection("doctors");                                                                       // 1
Pays = new Meteor.Collection("pays");                                                                             // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"feild.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/feild.js                                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Feilds = new Meteor.Collection("feilds");                                                                         // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"jpush.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/jpush.js                                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
UsersPushInfo = new Meteor.Collection("usersPushInfo");                                                           // 1
UserPushs = new Meteor.Collection("userPushs");                                                                   // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"message.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/message.js                                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Messages = new Meteor.Collection("messages");                                                                     // 1
Suggests = new Meteor.Collection("suggests");                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"new.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/new.js                                                                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
News = new Meteor.Collection("news");                                                                             // 1
NewsComment = new Meteor.Collection("newsComment");                                                               // 2
NewsFovar = new Meteor.Collection("NewsFovar");                                                                   // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"person.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/person.js                                                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Persons = new Meteor.Collection("persons");                                                                       // 1
// PersonDepartmentPay = new Meteor.Collection("persondepartmentpay");                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"referral.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/referral.js                                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Referrals = new Meteor.Collection("referrals");                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"region.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/region.js                                                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Regions = new Meteor.Collection("regions");                                                                       // 1
Hospitals = new Meteor.Collection("hospitals");                                                                   // 2
Departments = new Meteor.Collection("departments");                                                               // 3
Badges = new Meteor.Collection("badges");                                                                         // 4
UserBadges = new Meteor.Collection("userBadges");                                                                 // 5
UserBadgesTrack = new Meteor.Collection("userBadgesTrack");                                                       // 6
PointTrack = new Meteor.Collection("pointTrack");                                                                 // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"share.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/share.js                                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
wxaccesstoken = new Meteor.Collection("wxaccesstoken");                                                           // 1
wxticket = new Meteor.Collection("wxticket");                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"table.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/table.js                                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Tables = new Meteor.Collection("tables");                                                                         // 1
                                                                                                                  //
// Persons = new Meteor.Collection("persons");                                                                    //
// PersonDepartmentPay = new Meteor.Collection("persondepartmentpay");                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"visit.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/model/visit.js                                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Visits = new Meteor.Collection("visits");                                                                         // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"routers":{"account.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/account.js                                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/login', {                                                                                      // 1
  name: "login",                                                                                                  // 2
  action: function action(params, queryParams) {                                                                  // 3
    FlowLayout.render("login");                                                                                   // 4
  }                                                                                                               // 5
});                                                                                                               // 1
                                                                                                                  //
FlowRouter.route('/register', {                                                                                   // 11
  name: "login",                                                                                                  // 12
  action: function action(params, queryParams) {                                                                  // 13
    FlowLayout.render("register");                                                                                // 14
  }                                                                                                               // 15
});                                                                                                               // 11
FlowRouter.route('/register/code', {                                                                              // 17
  action: function action(params, queryParams) {                                                                  // 18
    FlowLayout.render("registerCode");                                                                            // 19
  }                                                                                                               // 20
});                                                                                                               // 17
                                                                                                                  //
FlowRouter.route('/forget', {                                                                                     // 23
  action: function action(params, queryParams) {                                                                  // 24
    FlowLayout.render("forget");                                                                                  // 25
  }                                                                                                               // 26
});                                                                                                               // 23
FlowRouter.route('/forget/code', {                                                                                // 28
  action: function action(params, queryParams) {                                                                  // 29
    FlowLayout.render("forgetCode");                                                                              // 30
  }                                                                                                               // 31
});                                                                                                               // 28
FlowRouter.route('/logout', {                                                                                     // 33
  action: function action(params, queryParams) {                                                                  // 34
    facc.logout();                                                                                                // 35
                                                                                                                  //
    FlowRouter.go("/");                                                                                           // 37
  }                                                                                                               // 38
});                                                                                                               // 33
FlowRouter.route('/loginAgreement', {                                                                             // 40
  action: function action(params, queryParams) {                                                                  // 41
    FlowLayout.render("loginAgreement");                                                                          // 42
  }                                                                                                               // 43
});                                                                                                               // 40
FlowRouter.route('/loginAgreement/pryvacy', {                                                                     // 45
  action: function action(params, queryParams) {                                                                  // 46
    FlowLayout.render("loginprivacy");                                                                            // 47
  }                                                                                                               // 48
});                                                                                                               // 45
FlowRouter.route('/loginAgreement/serviceagreement', {                                                            // 50
  action: function action(params, queryParams) {                                                                  // 51
    FlowLayout.render("loginservice");                                                                            // 52
  }                                                                                                               // 53
});                                                                                                               // 50
FlowRouter.route('/loginAgreement/app', {                                                                         // 55
  action: function action(params, queryParams) {                                                                  // 56
    FlowLayout.render("appservice");                                                                              // 57
  }                                                                                                               // 58
});                                                                                                               // 55
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"banner.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/banner.js                                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/banner', {                                                                                     // 1
  action: function action(params, queryParams) {                                                                  // 2
    FlowLayout.render("bannerDetail");                                                                            // 3
  }                                                                                                               // 4
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"discuz.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/discuz.js                                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/discuz', {                                                                                     // 1
  action: function action(params, queryParams) {                                                                  // 2
    FlowLayout.render("discuz");                                                                                  // 3
  }                                                                                                               // 4
});                                                                                                               // 1
                                                                                                                  //
FlowRouter.route('/discuz/list', {                                                                                // 7
  action: function action(params, queryParams) {                                                                  // 8
    FlowLayout.render("discuzList");                                                                              // 9
  }                                                                                                               // 10
});                                                                                                               // 7
FlowRouter.route('/discuz/users', {                                                                               // 12
  action: function action(params, queryParams) {                                                                  // 13
    FlowLayout.render("discuzUsers");                                                                             // 14
  }                                                                                                               // 15
});                                                                                                               // 12
FlowRouter.route('/discuz/create', {                                                                              // 17
  action: function action(params, queryParams) {                                                                  // 18
    FlowLayout.render("discuzCreate");                                                                            // 19
  }                                                                                                               // 20
});                                                                                                               // 17
FlowRouter.route('/discuz/host', {                                                                                // 22
  action: function action(params, queryParams) {                                                                  // 23
    FlowLayout.render("discuzHost");                                                                              // 24
  }                                                                                                               // 25
});                                                                                                               // 22
FlowRouter.route('/discuz/box', {                                                                                 // 27
  action: function action(params, queryParams) {                                                                  // 28
    FlowLayout.render("discuzBox");                                                                               // 29
  }                                                                                                               // 30
});                                                                                                               // 27
FlowRouter.route('/discuz/edit', {                                                                                // 32
  action: function action(params, queryParams) {                                                                  // 33
    FlowLayout.render("discuzEdit");                                                                              // 34
  }                                                                                                               // 35
});                                                                                                               // 32
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"feilds.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/feilds.js                                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/feild', {                                                                                      // 1
  action: function action(params, queryParams) {                                                                  // 2
    FlowLayout.render("feild");                                                                                   // 3
  }                                                                                                               // 4
});                                                                                                               // 1
FlowRouter.route('/feild/create', {                                                                               // 6
  action: function action(params, queryParams) {                                                                  // 7
    FlowLayout.render("feildCreate");                                                                             // 8
  }                                                                                                               // 9
});                                                                                                               // 6
FlowRouter.route('/feild/detail', {                                                                               // 11
  action: function action(params, queryParams) {                                                                  // 12
    FlowLayout.render("feildDetail");                                                                             // 13
  }                                                                                                               // 14
});                                                                                                               // 11
FlowRouter.route('/feild/test', {                                                                                 // 16
  action: function action(params, queryParams) {                                                                  // 17
    FlowLayout.render("feildTest");                                                                               // 18
  }                                                                                                               // 19
});                                                                                                               // 16
FlowRouter.route('/feild/project', {                                                                              // 21
  action: function action(params, queryParams) {                                                                  // 22
    FlowLayout.render("feildPoject");                                                                             // 23
  }                                                                                                               // 24
});                                                                                                               // 21
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/home.js                                                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var homeRoutes = FlowRouter.group({                                                                               // 1
    prefix: "/home"                                                                                               // 2
});                                                                                                               // 1
homeRoutes.route('/', {                                                                                           // 4
    action: function action(params, queryParams) {                                                                // 5
        FlowLayout.render("home");                                                                                // 6
    },                                                                                                            // 7
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 8
        if (facc.isGuest()) {                                                                                     // 9
            FlowRouter.go("/login");                                                                              // 10
        }                                                                                                         // 11
    }                                                                                                             // 12
});                                                                                                               // 4
homeRoutes.route('/actives', {                                                                                    // 14
    action: function action(params, queryParams) {                                                                // 15
        FlowLayout.render("actives");                                                                             // 16
    },                                                                                                            // 17
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 18
        if (facc.isGuest()) {                                                                                     // 19
            FlowRouter.go("/login");                                                                              // 20
        }                                                                                                         // 21
    }                                                                                                             // 22
});                                                                                                               // 14
homeRoutes.route('/info', {                                                                                       // 24
    action: function action(params, queryParams) {                                                                // 25
        FlowLayout.render("homeInfo");                                                                            // 26
    },                                                                                                            // 27
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 28
        if (facc.isGuest()) {                                                                                     // 29
            FlowRouter.go("/login");                                                                              // 30
        }                                                                                                         // 31
    }                                                                                                             // 32
});                                                                                                               // 24
                                                                                                                  //
homeRoutes.route('/nickname', {                                                                                   // 35
    action: function action(params, queryParams) {                                                                // 36
        FlowLayout.render("homeNickname");                                                                        // 37
    },                                                                                                            // 38
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 39
        if (facc.isGuest()) {                                                                                     // 40
            FlowRouter.go("/login");                                                                              // 41
        }                                                                                                         // 42
    }                                                                                                             // 43
});                                                                                                               // 35
homeRoutes.route('/certification', {                                                                              // 45
    action: function action(params, queryParams) {                                                                // 46
        FlowLayout.render("homeCertification");                                                                   // 47
    },                                                                                                            // 48
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 49
        if (facc.isGuest()) {                                                                                     // 50
            FlowRouter.go("/login");                                                                              // 51
        }                                                                                                         // 52
    }                                                                                                             // 53
});                                                                                                               // 45
homeRoutes.route('/set', {                                                                                        // 55
    action: function action(params, queryParams) {                                                                // 56
        FlowLayout.render("homeSet");                                                                             // 57
    },                                                                                                            // 58
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 59
        if (facc.isGuest()) {                                                                                     // 60
            FlowRouter.go("/login");                                                                              // 61
        }                                                                                                         // 62
    }                                                                                                             // 63
});                                                                                                               // 55
                                                                                                                  //
homeRoutes.route('/password', {                                                                                   // 66
    action: function action(params, queryParams) {                                                                // 67
        FlowLayout.render("homePassword");                                                                        // 68
    },                                                                                                            // 69
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 70
        if (facc.isGuest()) {                                                                                     // 71
            FlowRouter.go("/login");                                                                              // 72
        }                                                                                                         // 73
    }                                                                                                             // 74
});                                                                                                               // 66
homeRoutes.route('/messages', {                                                                                   // 76
    action: function action(params, queryParams) {                                                                // 77
        FlowLayout.render("homeMessages");                                                                        // 78
    },                                                                                                            // 79
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 80
        if (facc.isGuest()) {                                                                                     // 81
            FlowRouter.go("/login");                                                                              // 82
        }                                                                                                         // 83
    }                                                                                                             // 84
});                                                                                                               // 76
homeRoutes.route('/suggest', {                                                                                    // 86
    action: function action(params, queryParams) {                                                                // 87
        FlowLayout.render("homeSuggest");                                                                         // 88
    },                                                                                                            // 89
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 90
        if (facc.isGuest()) {                                                                                     // 91
            FlowRouter.go("/login");                                                                              // 92
        }                                                                                                         // 93
    }                                                                                                             // 94
});                                                                                                               // 86
                                                                                                                  //
homeRoutes.route('/point', {                                                                                      // 97
    action: function action(params, queryParams) {                                                                // 98
        FlowLayout.render("homePoint");                                                                           // 99
    }                                                                                                             // 100
                                                                                                                  //
});                                                                                                               // 97
homeRoutes.route('/track', {                                                                                      // 103
    action: function action(params, queryParams) {                                                                // 104
        FlowLayout.render("homeTrack");                                                                           // 105
    }                                                                                                             // 106
                                                                                                                  //
});                                                                                                               // 103
homeRoutes.route('/bank', {                                                                                       // 109
    action: function action(params, queryParams) {                                                                // 110
        FlowLayout.render("homeBank");                                                                            // 111
    }                                                                                                             // 112
                                                                                                                  //
});                                                                                                               // 109
homeRoutes.route('/addbank', {                                                                                    // 115
    action: function action(params, queryParams) {                                                                // 116
        FlowLayout.render("homeAddBank");                                                                         // 117
    }                                                                                                             // 118
                                                                                                                  //
});                                                                                                               // 115
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"new.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/new.js                                                                                             //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/news/item', {                                                                                  // 1
    action: function action(params, queryParams) {                                                                // 2
        FlowLayout.render("newsItem");                                                                            // 3
    }                                                                                                             // 4
});                                                                                                               // 1
FlowRouter.route('/news/comment', {                                                                               // 6
    action: function action(params, queryParams) {                                                                // 7
        FlowLayout.render("newsComment");                                                                         // 8
    }                                                                                                             // 9
});                                                                                                               // 6
                                                                                                                  //
FlowRouter.route('/my/news', {                                                                                    // 12
    action: function action(params, queryParams) {                                                                // 13
        FlowLayout.render("myNews");                                                                              // 14
    },                                                                                                            // 15
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 16
        if (facc.isGuest()) {                                                                                     // 17
            FlowRouter.go("/login");                                                                              // 18
        }                                                                                                         // 19
    }                                                                                                             // 20
});                                                                                                               // 12
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"persons.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/persons.js                                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/person/add', {                                                                                 // 1
    action: function action(params, queryParams) {                                                                // 2
        FlowLayout.render("personAdd");                                                                           // 3
    },                                                                                                            // 4
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 5
        if (facc.isGuest()) {                                                                                     // 6
            FlowRouter.go("/login");                                                                              // 7
        }                                                                                                         // 8
    }                                                                                                             // 9
});                                                                                                               // 1
FlowRouter.route('/myPerson/add', {                                                                               // 11
    action: function action(params, queryParams) {                                                                // 12
        FlowLayout.render("myPersonAdd");                                                                         // 13
    },                                                                                                            // 14
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 15
        if (facc.isGuest()) {                                                                                     // 16
            FlowRouter.go("/login");                                                                              // 17
        }                                                                                                         // 18
    }                                                                                                             // 19
});                                                                                                               // 11
FlowRouter.route('/person', {                                                                                     // 21
    action: function action(params, queryParams) {                                                                // 22
        FlowLayout.render("person");                                                                              // 23
    },                                                                                                            // 24
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 25
        if (facc.isGuest()) {                                                                                     // 26
            FlowRouter.go("/login");                                                                              // 27
        }                                                                                                         // 28
    }                                                                                                             // 29
});                                                                                                               // 21
FlowRouter.route('/myPerson', {                                                                                   // 31
    action: function action(params, queryParams) {                                                                // 32
        FlowLayout.render("myPerson");                                                                            // 33
    },                                                                                                            // 34
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 35
        if (facc.isGuest()) {                                                                                     // 36
            FlowRouter.go("/login");                                                                              // 37
        }                                                                                                         // 38
    }                                                                                                             // 39
});                                                                                                               // 31
FlowRouter.route('/person/detail', {                                                                              // 41
    action: function action(params, queryParams) {                                                                // 42
        FlowLayout.render("personDetail");                                                                        // 43
    },                                                                                                            // 44
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 45
        if (facc.isGuest()) {                                                                                     // 46
            FlowRouter.go("/login");                                                                              // 47
        }                                                                                                         // 48
    }                                                                                                             // 49
});                                                                                                               // 41
                                                                                                                  //
FlowRouter.route('/myPerson/detail', {                                                                            // 52
    action: function action(params, queryParams) {                                                                // 53
        FlowLayout.render("myPersonDetail");                                                                      // 54
    },                                                                                                            // 55
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 56
        if (facc.isGuest()) {                                                                                     // 57
            FlowRouter.go("/login");                                                                              // 58
        }                                                                                                         // 59
    }                                                                                                             // 60
});                                                                                                               // 52
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"recive.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/recive.js                                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/recive', {                                                                                     // 1
    action: function action(params, queryParams) {                                                                // 2
        FlowLayout.render("recive");                                                                              // 3
    },                                                                                                            // 4
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 5
        if (facc.isGuest()) {                                                                                     // 6
            FlowRouter.go("/login");                                                                              // 7
        }                                                                                                         // 8
    }                                                                                                             // 9
});                                                                                                               // 1
                                                                                                                  //
FlowRouter.route('/recive/confirm', {                                                                             // 12
    action: function action(params, queryParams) {                                                                // 13
        FlowLayout.render("reciveConfirm");                                                                       // 14
    },                                                                                                            // 15
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 16
        if (facc.isGuest()) {                                                                                     // 17
            FlowRouter.go("/login");                                                                              // 18
        }                                                                                                         // 19
    }                                                                                                             // 20
});                                                                                                               // 12
                                                                                                                  //
FlowRouter.route('/recive/confirm/agree', {                                                                       // 23
    action: function action(params, queryParams) {                                                                // 24
        FlowLayout.render("reciveConfirmAgree");                                                                  // 25
    },                                                                                                            // 26
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 27
        if (facc.isGuest()) {                                                                                     // 28
            FlowRouter.go("/login");                                                                              // 29
        }                                                                                                         // 30
    }                                                                                                             // 31
});                                                                                                               // 23
                                                                                                                  //
FlowRouter.route('/recive/confirm/disagree', {                                                                    // 34
    action: function action(params, queryParams) {                                                                // 35
        FlowLayout.render("reciveConfirmDisagree");                                                               // 36
    },                                                                                                            // 37
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 38
        if (facc.isGuest()) {                                                                                     // 39
            FlowRouter.go("/login");                                                                              // 40
        }                                                                                                         // 41
    }                                                                                                             // 42
});                                                                                                               // 34
FlowRouter.route('/recive/step', {                                                                                // 44
    action: function action(params, queryParams) {                                                                // 45
        FlowLayout.render("reciveStep");                                                                          // 46
    },                                                                                                            // 47
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 48
        if (facc.isGuest()) {                                                                                     // 49
            FlowRouter.go("/login");                                                                              // 50
        }                                                                                                         // 51
    }                                                                                                             // 52
});                                                                                                               // 44
FlowRouter.route('/recive/detail', {                                                                              // 54
    action: function action(params, queryParams) {                                                                // 55
        FlowLayout.render("reciveDetail");                                                                        // 56
    },                                                                                                            // 57
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 58
        if (facc.isGuest()) {                                                                                     // 59
            FlowRouter.go("/login");                                                                              // 60
        }                                                                                                         // 61
    }                                                                                                             // 62
});                                                                                                               // 54
                                                                                                                  //
FlowRouter.route('/recive/time', {                                                                                // 65
    action: function action(params, queryParams) {                                                                // 66
        FlowLayout.render("reciveTime");                                                                          // 67
    },                                                                                                            // 68
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 69
        if (facc.isGuest()) {                                                                                     // 70
            FlowRouter.go("/login");                                                                              // 71
        }                                                                                                         // 72
    }                                                                                                             // 73
});                                                                                                               // 65
FlowRouter.route('/recive/create', {                                                                              // 75
    action: function action(params, queryParams) {                                                                // 76
        FlowLayout.render("reciveCreate");                                                                        // 77
    },                                                                                                            // 78
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 79
        if (facc.isGuest()) {                                                                                     // 80
            FlowRouter.go("/login");                                                                              // 81
        }                                                                                                         // 82
    }                                                                                                             // 83
});                                                                                                               // 75
                                                                                                                  //
FlowRouter.route('/myRecive', {                                                                                   // 86
    action: function action(params, queryParams) {                                                                // 87
        FlowLayout.render("myRecive");                                                                            // 88
    },                                                                                                            // 89
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 90
        if (facc.isGuest()) {                                                                                     // 91
            FlowRouter.go("/login");                                                                              // 92
        }                                                                                                         // 93
    }                                                                                                             // 94
});                                                                                                               // 86
                                                                                                                  //
FlowRouter.route('/myRecive/confirm', {                                                                           // 97
    action: function action(params, queryParams) {                                                                // 98
        FlowLayout.render("myReciveConfirm");                                                                     // 99
    },                                                                                                            // 100
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 101
        if (facc.isGuest()) {                                                                                     // 102
            FlowRouter.go("/login");                                                                              // 103
        }                                                                                                         // 104
    }                                                                                                             // 105
});                                                                                                               // 97
                                                                                                                  //
FlowRouter.route('/myRecive/confirm/agree', {                                                                     // 108
    action: function action(params, queryParams) {                                                                // 109
        FlowLayout.render("myReciveConfirmAgree");                                                                // 110
    },                                                                                                            // 111
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 112
        if (facc.isGuest()) {                                                                                     // 113
            FlowRouter.go("/login");                                                                              // 114
        }                                                                                                         // 115
    }                                                                                                             // 116
});                                                                                                               // 108
                                                                                                                  //
FlowRouter.route('/myRecive/confirm/disagree', {                                                                  // 119
    action: function action(params, queryParams) {                                                                // 120
        FlowLayout.render("myReciveConfirmDisagree");                                                             // 121
    },                                                                                                            // 122
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 123
        if (facc.isGuest()) {                                                                                     // 124
            FlowRouter.go("/login");                                                                              // 125
        }                                                                                                         // 126
    }                                                                                                             // 127
});                                                                                                               // 119
FlowRouter.route('/myRecive/step', {                                                                              // 129
    action: function action(params, queryParams) {                                                                // 130
        FlowLayout.render("myReciveStep");                                                                        // 131
    },                                                                                                            // 132
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 133
        if (facc.isGuest()) {                                                                                     // 134
            FlowRouter.go("/login");                                                                              // 135
        }                                                                                                         // 136
    }                                                                                                             // 137
});                                                                                                               // 129
FlowRouter.route('/myRecive/detail', {                                                                            // 139
    action: function action(params, queryParams) {                                                                // 140
        FlowLayout.render("myReciveDetail");                                                                      // 141
    },                                                                                                            // 142
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 143
        if (facc.isGuest()) {                                                                                     // 144
            FlowRouter.go("/login");                                                                              // 145
        }                                                                                                         // 146
    }                                                                                                             // 147
});                                                                                                               // 139
                                                                                                                  //
FlowRouter.route('/myRecive/time', {                                                                              // 150
    action: function action(params, queryParams) {                                                                // 151
        FlowLayout.render("myReciveTime");                                                                        // 152
    },                                                                                                            // 153
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 154
        if (facc.isGuest()) {                                                                                     // 155
            FlowRouter.go("/login");                                                                              // 156
        }                                                                                                         // 157
    }                                                                                                             // 158
});                                                                                                               // 150
FlowRouter.route('/myRecive/create', {                                                                            // 160
    action: function action(params, queryParams) {                                                                // 161
        FlowLayout.render("myReciveCreate");                                                                      // 162
    },                                                                                                            // 163
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 164
        if (facc.isGuest()) {                                                                                     // 165
            FlowRouter.go("/login");                                                                              // 166
        }                                                                                                         // 167
    }                                                                                                             // 168
});                                                                                                               // 160
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"referral.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/referral.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/referral', {                                                                                   // 1
  action: function action(params, queryParams) {                                                                  // 2
    FlowLayout.render("referralIndex");                                                                           // 3
  },                                                                                                              // 4
  triggersEnter: function triggersEnter(context, redirect) {                                                      // 5
    if (facc.isGuest()) {                                                                                         // 6
      FlowRouter.go("/login");                                                                                    // 7
    }                                                                                                             // 8
  }                                                                                                               // 9
});                                                                                                               // 1
FlowRouter.route('/referral/fqa', {                                                                               // 11
  action: function action(params, queryParams) {                                                                  // 12
    FlowLayout.render("referralFqa");                                                                             // 13
  },                                                                                                              // 14
  triggersEnter: function triggersEnter(context, redirect) {                                                      // 15
    if (facc.isGuest()) {                                                                                         // 16
      FlowRouter.go("/login");                                                                                    // 17
    }                                                                                                             // 18
  }                                                                                                               // 19
});                                                                                                               // 11
FlowRouter.route('/referral/create', {                                                                            // 21
  action: function action(params, queryParams) {                                                                  // 22
    FlowLayout.render("referralCreate");                                                                          // 23
  },                                                                                                              // 24
  triggersEnter: function triggersEnter(context, redirect) {                                                      // 25
    if (facc.isGuest()) {                                                                                         // 26
      FlowRouter.go("/login");                                                                                    // 27
    }                                                                                                             // 28
  }                                                                                                               // 29
});                                                                                                               // 21
FlowRouter.route('/referral/upload/create', {                                                                     // 31
  action: function action(params, queryParams) {                                                                  // 32
    FlowLayout.render("referralUploadCreate");                                                                    // 33
  },                                                                                                              // 34
  triggersEnter: function triggersEnter(context, redirect) {                                                      // 35
    if (facc.isGuest()) {                                                                                         // 36
      FlowRouter.go("/login");                                                                                    // 37
    }                                                                                                             // 38
  }                                                                                                               // 39
});                                                                                                               // 31
                                                                                                                  //
FlowRouter.route('/referral/qrcode', {                                                                            // 42
  action: function action(params, queryParams) {                                                                  // 43
    FlowLayout.render("referralQrcode");                                                                          // 44
  },                                                                                                              // 45
  triggersEnter: function triggersEnter(context, redirect) {                                                      // 46
    if (facc.isGuest()) {                                                                                         // 47
      FlowRouter.go("/login");                                                                                    // 48
    }                                                                                                             // 49
  }                                                                                                               // 50
});                                                                                                               // 42
FlowRouter.route('/referral/submit', {                                                                            // 52
  action: function action(params, queryParams) {                                                                  // 53
    FlowLayout.render("referralSubmit");                                                                          // 54
  }                                                                                                               // 55
                                                                                                                  //
});                                                                                                               // 52
FlowRouter.route('/referral/pay', {                                                                               // 58
  action: function action(params, queryParams) {                                                                  // 59
    FlowLayout.render("referralPay");                                                                             // 60
  }                                                                                                               // 61
});                                                                                                               // 58
FlowRouter.route('/referral/agreenment', {                                                                        // 63
  action: function action(params, queryParams) {                                                                  // 64
    FlowLayout.render("agreenment-user");                                                                         // 65
  }                                                                                                               // 66
});                                                                                                               // 63
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"rotation.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/rotation.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/rotation/person', {                                                                            // 1
    action: function action(params, queryParams) {                                                                // 2
        FlowLayout.render("rotationPerson");                                                                      // 3
    },                                                                                                            // 4
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 5
        if (facc.isGuest()) {                                                                                     // 6
            FlowRouter.go("/login");                                                                              // 7
        }                                                                                                         // 8
    }                                                                                                             // 9
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"site.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/site.js                                                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/', {                                                                                           // 1
  name: "site",                                                                                                   // 2
  action: function action(params, queryParams) {                                                                  // 3
    FlowLayout.render("site");                                                                                    // 4
  }                                                                                                               // 5
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"table.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/table.js                                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/table/add', {                                                                                  // 1
    action: function action(params, queryParams) {                                                                // 2
        FlowLayout.render("feildPoject");                                                                         // 3
    },                                                                                                            // 4
    triggersEnter: function triggersEnter(context, redirect) {                                                    // 5
        if (facc.isGuest()) {                                                                                     // 6
            FlowRouter.go("/login");                                                                              // 7
        }                                                                                                         // 8
    }                                                                                                             // 9
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"task.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/task.js                                                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/task', {                                                                                       // 1
  action: function action(params, queryParams) {                                                                  // 2
    FlowLayout.render("taskCreate");                                                                              // 3
  }                                                                                                               // 4
});                                                                                                               // 1
                                                                                                                  //
FlowRouter.route('/pubtask', {                                                                                    // 7
  action: function action(params, queryParams) {                                                                  // 8
    FlowLayout.render("pubCreate");                                                                               // 9
  }                                                                                                               // 10
});                                                                                                               // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"visit.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/routers/visit.js                                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
FlowRouter.route('/visit', {                                                                                      // 1
  action: function action(params, queryParams) {                                                                  // 2
    FlowLayout.render("visit");                                                                                   // 3
  }                                                                                                               // 4
});                                                                                                               // 1
FlowRouter.route('/visit/detail', {                                                                               // 6
  action: function action(params, queryParams) {                                                                  // 7
    FlowLayout.render("visitDetail");                                                                             // 8
  }                                                                                                               // 9
});                                                                                                               // 6
FlowRouter.route('/visit/view', {                                                                                 // 11
  action: function action(params, queryParams) {                                                                  // 12
    FlowLayout.render("visitView");                                                                               // 13
  }                                                                                                               // 14
});                                                                                                               // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"facc.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// lib/facc.js                                                                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
facc = {                                                                                                          // 1
    _id: "FAMILYOFDEVELOPOER",                                                                                    // 2
    user: function user() {                                                                                       // 3
        return {                                                                                                  // 4
            "_id": localStorage.getItem(facc._id + "_UID"),                                                       // 5
            "nickname": localStorage.getItem(facc._id + "_NICK"),                                                 // 6
            "avatar": localStorage.getItem(facc._id + "_AVATAR"),                                                 // 7
            "photo": localStorage.getItem(facc._id + "_PHOTO")                                                    // 8
        };                                                                                                        // 4
    },                                                                                                            // 10
    set: function set(user) {                                                                                     // 11
        Meteor.connection.setUserId(user._id);                                                                    // 12
        localStorage.setItem(facc._id + "_UID", user._id);                                                        // 13
        localStorage.setItem(facc._id + "_NICK", user.nickname);                                                  // 14
        localStorage.setItem(facc._id + "_AVATAR", user.avatar);                                                  // 15
        localStorage.setItem(facc._id + "_PHOTO", user.photo);                                                    // 16
        Session.set("USERLOGIN", user);                                                                           // 17
    },                                                                                                            // 19
    setState: function setState(key, value) {                                                                     // 20
        var userid = localStorage.getItem(facc._id + "_UID");                                                     // 21
        localStorage.setItem(facc._id + "_" + key.toUpperCase(), value);                                          // 22
        var likid = localStorage.getItem(likid);                                                                  // 23
        localStorage.setItem(likid, value);                                                                       // 24
        var reaid = localStorage.getItem(reaid);                                                                  // 25
        localStorage.setItem(reaid, value);                                                                       // 26
        var colid = localStorage.getItem(colid);                                                                  // 27
        localStorage.setItem(colid, value);                                                                       // 28
    },                                                                                                            // 29
    get: function get(key) {                                                                                      // 30
        var userid = localStorage.getItem(facc._id + "_UID");                                                     // 31
        return localStorage.getItem(facc._id + "_" + key.toUpperCase());                                          // 32
    },                                                                                                            // 33
    logout: function logout() {                                                                                   // 34
        localStorage.removeItem(facc._id + "_UID");                                                               // 35
        localStorage.removeItem(facc._id + "_NICK");                                                              // 36
        localStorage.removeItem(facc._id + "_AVATAR");                                                            // 37
        localStorage.removeItem(facc._id + "_PHOTO");                                                             // 38
        Meteor.logout();                                                                                          // 39
        Session.set("USERLOGIN", null);                                                                           // 40
    },                                                                                                            // 41
    isGuest: function isGuest() {                                                                                 // 42
        return localStorage.getItem(facc._id + "_UID") ? false : true;                                            // 43
    },                                                                                                            // 44
    checkUsername: function checkUsername(str) {                                                                  // 45
        return true;                                                                                              // 46
    },                                                                                                            // 47
    checkTel: function checkTel(str) {                                                                            // 48
        return str.match(/^0?1[3|4|5|7|8][0-9]\d{8}$/);                                                           // 49
    },                                                                                                            // 50
    backto: function backto() {                                                                                   // 51
        FlowRouter.go("/");                                                                                       // 52
    },                                                                                                            // 53
    checkID: function checkID(str) {                                                                              // 54
        return str.match(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9|X|x])$/);
    },                                                                                                            // 56
    checkBirday: function checkBirday(str) {                                                                      // 57
        return str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);                                                // 58
    },                                                                                                            // 59
                                                                                                                  //
    needAdmin: 0                                                                                                  // 61
};                                                                                                                // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"account":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/account/method.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
    accountRegisterGetCode: function accountRegisterGetCode(args) {                                               // 2
        if (args.tel == "" || !facc.checkTel(args.tel)) {                                                         // 3
            return "ERROR_UNKONE";                                                                                // 4
        }                                                                                                         // 5
                                                                                                                  //
        var user = Meteor.users.findOne({                                                                         // 7
            tel: args.tel                                                                                         // 8
        });                                                                                                       // 7
                                                                                                                  //
        if (user) {                                                                                               // 11
            return "ERROR_REPEAT_TEL";                                                                            // 12
        }                                                                                                         // 13
                                                                                                                  //
        user = Meteor.users.findOne({                                                                             // 15
            username: args.username                                                                               // 16
        });                                                                                                       // 15
                                                                                                                  //
        if (user) {                                                                                               // 19
            return "ERROR_REPEAT_NICK";                                                                           // 20
        }                                                                                                         // 21
                                                                                                                  //
        this.unblock();                                                                                           // 23
                                                                                                                  //
        var code = parseInt(Math.random() * 1000000);                                                             // 25
                                                                                                                  //
        VaildCodes.insert({                                                                                       // 27
            "account": args.tel,                                                                                  // 28
            "username": args.username,                                                                            // 29
            "password": args.password,                                                                            // 30
            "code": code + "",                                                                                    // 31
            "invite": args.inviteFrom                                                                             // 32
        });                                                                                                       // 27
                                                                                                                  //
        sms.send(args.tel, args.username + ",您好:\n您的验证码是：" + code + ".请尽快登录，勿将此信息透露给他人。");                        // 36
                                                                                                                  //
        return "SUCCESS";                                                                                         // 38
    },                                                                                                            // 39
    accountRegisterWithCode: function accountRegisterWithCode(args) {                                             // 40
        if (args.code == "") {                                                                                    // 41
            return "ERROR_UNKONE";                                                                                // 42
        }                                                                                                         // 43
        var vc = VaildCodes.findOne({                                                                             // 44
            "code": args.code + ""                                                                                // 45
        });                                                                                                       // 44
        if (!vc) {                                                                                                // 47
            return "ERROR_NONE";                                                                                  // 48
        }                                                                                                         // 49
                                                                                                                  //
        var user = Meteor.users.findOne({                                                                         // 51
            tel: vc.account                                                                                       // 52
        });                                                                                                       // 51
                                                                                                                  //
        if (user) {                                                                                               // 55
            return "ERROR_REPEAT_TEL";                                                                            // 56
        }                                                                                                         // 57
                                                                                                                  //
        user = Meteor.users.findOne({                                                                             // 59
            username: vc.username                                                                                 // 60
        });                                                                                                       // 59
                                                                                                                  //
        if (user) {                                                                                               // 63
            return "ERROR_REPEAT_NICK";                                                                           // 64
        }                                                                                                         // 65
                                                                                                                  //
        salt = parseInt(Math.random() * 1000000) + "";                                                            // 67
        salt = CryptoJS.MD5(salt).toString();                                                                     // 68
        var md5 = CryptoJS.MD5(vc.password + salt).toString();                                                    // 69
                                                                                                                  //
        //处理邀请人                                                                                                   //
        var invite = "";                                                                                          // 73
        var inviteName = "";                                                                                      // 74
        if (vc.invite) {                                                                                          // 75
            var invuser = Meteor.users.findOne({ tel: vc.invite });                                               // 76
            if (invuser) {                                                                                        // 77
                invite = invuser._id;                                                                             // 78
                inviteName = invuser.nickname;                                                                    // 79
            }                                                                                                     // 80
        }                                                                                                         // 81
                                                                                                                  //
        user = {                                                                                                  // 83
            "nickname": vc.username,                                                                              // 84
            "username": vc.username,                                                                              // 85
            "password": md5,                                                                                      // 86
            "salt": salt,                                                                                         // 87
            "email": "",                                                                                          // 88
            "vaildEmail": false,                                                                                  // 89
            "tel": vc.account,                                                                                    // 90
            "avatar": "/avatar.png",                                                                              // 91
            "point": 0,                                                                                           // 92
            "balance": 0,                                                                                         // 93
            "isadmin": 0,                                                                                         // 94
            "createAt": new Date(),                                                                               // 95
            "role": "member",                                                                                     // 96
            "vaild": 0,                                                                                           // 97
            "master": 0,                                                                                          // 98
            income: 0,                                                                                            // 99
            "invite": invite,                                                                                     // 100
            "inviteName": inviteName                                                                              // 101
        };                                                                                                        // 83
                                                                                                                  //
        var uid = Meteor.users.insert(user, facc.insert);                                                         // 104
                                                                                                                  //
        if (facc.needAdmin == 1) {                                                                                // 106
            return "ERROR_RIGHT";                                                                                 // 107
        }                                                                                                         // 108
                                                                                                                  //
        this.setUserId(uid);                                                                                      // 110
                                                                                                                  //
        VaildCodes.remove(vc._id);                                                                                // 112
                                                                                                                  //
        return {                                                                                                  // 114
            "_id": uid,                                                                                           // 115
            "nickname": user.nickname,                                                                            // 116
            "avatar": user.avatar                                                                                 // 117
        };                                                                                                        // 114
    },                                                                                                            // 119
    accountLoginWithTel: function accountLoginWithTel(args) {                                                     // 120
        console.log(args);                                                                                        // 121
        if (args.tel == "" || !facc.checkTel(args.tel)) {                                                         // 122
            return "ERROR_UNKONE";                                                                                // 123
        }                                                                                                         // 124
                                                                                                                  //
        var user = Meteor.users.findOne({                                                                         // 126
            tel: args.tel                                                                                         // 127
        });                                                                                                       // 126
                                                                                                                  //
        if (!user) {                                                                                              // 130
            return "ERROR_NONE";                                                                                  // 131
        }                                                                                                         // 132
                                                                                                                  //
        if (facc.needAdmin == 1 && user.isadmin != 1) {                                                           // 134
            return "ERROR_RIGHT";                                                                                 // 135
        }                                                                                                         // 136
                                                                                                                  //
        salt = user.salt;                                                                                         // 138
                                                                                                                  //
        var md5 = CryptoJS.MD5(args.password + salt).toString();                                                  // 140
                                                                                                                  //
        if (md5 != user.password) {                                                                               // 142
            return "ERROR_PWD";                                                                                   // 143
        }                                                                                                         // 144
                                                                                                                  //
        this.setUserId(user._id);                                                                                 // 146
                                                                                                                  //
        return {                                                                                                  // 148
            "_id": user._id,                                                                                      // 149
            "nickname": user.nickname,                                                                            // 150
            "avatar": user.avatar                                                                                 // 151
        };                                                                                                        // 148
    },                                                                                                            // 153
    accountForget: function accountForget(args) {                                                                 // 154
                                                                                                                  //
        if (args.tel == "" || !facc.checkTel(args.tel)) {                                                         // 156
            return "ERROR_UNKONE";                                                                                // 157
        }                                                                                                         // 158
                                                                                                                  //
        var user = Meteor.users.findOne({                                                                         // 160
            tel: args.tel                                                                                         // 161
        });                                                                                                       // 160
                                                                                                                  //
        if (!user) {                                                                                              // 164
            return "ERROR_NONE";                                                                                  // 165
        }                                                                                                         // 166
                                                                                                                  //
        this.unblock();                                                                                           // 168
                                                                                                                  //
        var code = parseInt(Math.random() * 1000000);                                                             // 170
                                                                                                                  //
        VaildCodes.insert({                                                                                       // 172
            "account": args.tel,                                                                                  // 173
            "code": code + ""                                                                                     // 174
        });                                                                                                       // 172
                                                                                                                  //
        sms.send(args.tel, user.nickname + ",您好:\n您的验证码是：" + code + ".请尽快登录，勿将此信息透露给他人。");                        // 178
                                                                                                                  //
        return "SUCCESS";                                                                                         // 180
    },                                                                                                            // 181
    accountLoginWithCode: function accountLoginWithCode(args) {                                                   // 182
                                                                                                                  //
        if (args.code == "") {                                                                                    // 184
            return "ERROR_UNKONE";                                                                                // 185
        }                                                                                                         // 186
        var vc = VaildCodes.findOne({                                                                             // 187
            "code": args.code + ""                                                                                // 188
        });                                                                                                       // 187
                                                                                                                  //
        if (!vc) {                                                                                                // 191
            return "ERROR_NONE";                                                                                  // 192
        }                                                                                                         // 193
                                                                                                                  //
        var user = Meteor.users.findOne({                                                                         // 195
            tel: vc.account                                                                                       // 196
        });                                                                                                       // 195
                                                                                                                  //
        if (!user) {                                                                                              // 200
            return "ERROR_NONE";                                                                                  // 201
        }                                                                                                         // 202
                                                                                                                  //
        if (facc.needAdmin == 1 && user.isadmin != 1) {                                                           // 204
            return "ERROR_RIGHT";                                                                                 // 205
        }                                                                                                         // 206
                                                                                                                  //
        this.setUserId(user._id);                                                                                 // 208
                                                                                                                  //
        VaildCodes.remove(vc._id);                                                                                // 210
                                                                                                                  //
        return {                                                                                                  // 212
            "_id": user._id,                                                                                      // 213
            "nickname": user.nickname,                                                                            // 214
            "avatar": user.avatar                                                                                 // 215
        };                                                                                                        // 212
    },                                                                                                            // 217
    test: function test() {                                                                                       // 218
        var s = "sfd" * 1;                                                                                        // 219
        console.log(isNaN(s));                                                                                    // 220
    }                                                                                                             // 221
                                                                                                                  //
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/account/publish.js                                                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("role", function (userid) {                                                                        // 1
    return Meteor.users.find({ _id: userid }, {                                                                   // 2
        fields: {                                                                                                 // 3
            vaild: 1,                                                                                             // 4
            master: 1,                                                                                            // 5
            role: 1                                                                                               // 6
        }                                                                                                         // 3
    });                                                                                                           // 2
});                                                                                                               // 9
                                                                                                                  //
Meteor.publish("userdetail", function (rid) {                                                                     // 11
    var ref = Referrals.findOne({ _id: rid });                                                                    // 12
    return Persons.find({ _id: ref.person._id });                                                                 // 13
});                                                                                                               // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"server.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/account/server.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.startup(function () {});                                                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"bank":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/bank/method.js                                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
                                                                                                                  //
    saveCard: function saveCard(args) {                                                                           // 3
        var obj = Bankcards.findOne({ userid: args.userid });                                                     // 4
        if (obj) {                                                                                                // 5
            Bankcards.update({                                                                                    // 6
                _id: obj._id                                                                                      // 7
            }, {                                                                                                  // 6
                $set: {                                                                                           // 9
                    "num": args.num,                                                                              // 10
                    "bank": args.bank,                                                                            // 11
                    "type": args.type,                                                                            // 12
                    createAt: new Date()                                                                          // 13
                }                                                                                                 // 9
            });                                                                                                   // 8
        } else {                                                                                                  // 16
            Bankcards.insert({                                                                                    // 17
                "num": args.num,                                                                                  // 18
                "bank": args.bank,                                                                                // 19
                "type": args.type,                                                                                // 20
                userid: args.userid,                                                                              // 21
                createAt: new Date()                                                                              // 22
            });                                                                                                   // 17
        }                                                                                                         // 24
    }                                                                                                             // 27
                                                                                                                  //
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/bank/publish.js                                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("bank", function (uid) {                                                                           // 1
                                                                                                                  //
    if (uid) {                                                                                                    // 3
                                                                                                                  //
        return Bankcards.find({                                                                                   // 5
            userid: uid                                                                                           // 6
        });                                                                                                       // 5
    }                                                                                                             // 8
});                                                                                                               // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"banner":{"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/banner/publish.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("banners", function (group) {                                                                      // 1
    return Banners.find({                                                                                         // 2
        status: 1,                                                                                                // 3
        "group": group                                                                                            // 4
    });                                                                                                           // 2
});                                                                                                               // 6
Meteor.publish("bannersDetail", function (id) {                                                                   // 7
    return Banners.find({                                                                                         // 8
        _id: id                                                                                                   // 9
    });                                                                                                           // 8
});                                                                                                               // 11
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"cases":{"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/cases/publish.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("cases", function () {                                                                             // 1
    return Cases.find({});                                                                                        // 2
});                                                                                                               // 3
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"components":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/components/method.js                                                                                    //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
                                                                                                                  //
    queryRegions: function queryRegions(args) {                                                                   // 3
        console.log(Regions.find({ parent: args.parent }).fetch());                                               // 4
        return Regions.find({ parent: args.parent }).fetch();                                                     // 5
    },                                                                                                            // 6
    queryZones: function queryZones(args) {                                                                       // 7
        return Regions.find({ parent: args.region }).fetch();                                                     // 8
    },                                                                                                            // 9
    queryHospitals: function queryHospitals(args) {                                                               // 10
        return Hospitals.find({ region: args.region }).fetch();                                                   // 11
    },                                                                                                            // 12
    queryDepartments: function queryDepartments(args) {                                                           // 13
        return Departments.find({ hospital: args.hospital }).fetch();                                             // 14
    },                                                                                                            // 15
    querySDepartments: function querySDepartments(args) {                                                         // 16
        return Departments.find({ parent: args.parent }).fetch();                                                 // 17
    }                                                                                                             // 18
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/components/publish.js                                                                                   //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("myperson", function (userid) {                                                                    // 1
    return Persons.find({                                                                                         // 2
        "users": { $in: [userid] },                                                                               // 3
        status: 1                                                                                                 // 4
    });;                                                                                                          // 2
});                                                                                                               // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"departments":{"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/departments/publish.js                                                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("departments", function (id) {                                                                     // 1
    return Departments.find({                                                                                     // 2
        _id: id                                                                                                   // 3
    });;                                                                                                          // 2
});                                                                                                               // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"discuz":{"methods.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/discuz/methods.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
    updateDiscuzImg: function updateDiscuzImg(args) {                                                             // 2
        console.log(args);                                                                                        // 3
        var obj = DiscuzMessages.findOne({                                                                        // 4
            _id: args.dmid                                                                                        // 5
        });                                                                                                       // 4
        upload(obj.pic, function (data) {                                                                         // 7
            DiscuzMessages.update({                                                                               // 8
                _id: args.dmid                                                                                    // 9
            }, {                                                                                                  // 8
                $set: {                                                                                           // 11
                    "pic": data                                                                                   // 12
                }                                                                                                 // 11
            });                                                                                                   // 10
        }, function (e) {                                                                                         // 15
            throw e;                                                                                              // 16
        });                                                                                                       // 17
    },                                                                                                            // 18
    updateUserDiscuz: function updateUserDiscuz(args) {                                                           // 19
        var d = Discuzs.findOne({ _id: args.did });                                                               // 20
        if (args.type == "create") {                                                                              // 21
            Meteor.users.update({ _id: d.userid }, { $inc: { createDiscuz: 1 } });                                // 22
        } else if (args.type == "view") {                                                                         // 23
            Meteor.users.update({ _id: d.userid }, { $inc: { viewDiscuz: 1 } });                                  // 24
        } else if (args.type == "agree") {                                                                        // 25
            Meteor.users.update({ _id: d.userid }, { $inc: { agreeDiscuz: 1 } });                                 // 26
        } else if (args.type == "comment") {                                                                      // 27
            Meteor.users.update({ _id: d.userid }, { $inc: { commentDiscuz: 1 } });                               // 28
        }                                                                                                         // 29
    }                                                                                                             // 30
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/discuz/publish.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("discuz", function (id, userid) {                                                                  // 1
    if (userid) return [Discuzs.find({                                                                            // 2
        _id: id                                                                                                   // 4
    }), DiscuzMessages.find({                                                                                     // 3
        discuz: id                                                                                                // 6
    }), DiscuzFovar.find({                                                                                        // 5
        discuz: id,                                                                                               // 8
        "userid": userid                                                                                          // 9
    })];else return [Discuzs.find({                                                                               // 7
        _id: id                                                                                                   // 13
    }), DiscuzMessages.find({                                                                                     // 12
        discuz: id                                                                                                // 15
    })];                                                                                                          // 14
});                                                                                                               // 18
                                                                                                                  //
Meteor.publish("discuzUsers", function (id) {                                                                     // 20
                                                                                                                  //
    var ds = Discuzs.findOne({                                                                                    // 22
        _id: id                                                                                                   // 23
    });                                                                                                           // 22
    return Meteor.users.find({                                                                                    // 25
        _id: {                                                                                                    // 26
            $in: ds.users                                                                                         // 27
        }                                                                                                         // 26
    });                                                                                                           // 25
});                                                                                                               // 30
Meteor.publish("discuzList", function (uid) {                                                                     // 31
    return Discuzs.find({ status: 1 });                                                                           // 32
});                                                                                                               // 33
Meteor.publish("discuzPublic", function (uid) {                                                                   // 34
    return Discuzs.find({ status: 1, type: "PUBLIC" });                                                           // 35
});                                                                                                               // 36
                                                                                                                  //
Meteor.publish("discuzMyList", function () {                                                                      // 38
    return Discuzs.find({                                                                                         // 39
        send: 1,                                                                                                  // 40
        status: 1                                                                                                 // 41
    }, { sort: { createAt: -1 }, limit: 20 });                                                                    // 39
});                                                                                                               // 43
Meteor.publish("discuzMyBox", function (uid) {                                                                    // 44
    return Discuzs.find({                                                                                         // 45
        send: 0,                                                                                                  // 46
        status: 1,                                                                                                // 47
        userid: uid                                                                                               // 48
    });                                                                                                           // 45
});                                                                                                               // 50
Meteor.publish("discuzDetail", function (uid) {                                                                   // 51
                                                                                                                  //
    return [Meteor.users.find({ _id: uid }), Discuzs.find({ userid: uid })];                                      // 53
});                                                                                                               // 57
Meteor.publish("recommands", function (uid) {                                                                     // 58
                                                                                                                  //
    return [Recommands.find()];                                                                                   // 60
});                                                                                                               // 63
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"doctor":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/doctor/method.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
				uploadDoctorsPictures: function uploadDoctorsPictures(args) {                                                 // 2
								var obj = Doctors.findOne({                                                                               // 3
												_id: args._id                                                                                         // 4
								});                                                                                                       // 3
								if (obj.avatar.indexOf("base64")) {                                                                       // 6
												upload(obj.avatar, function (data) {                                                                  // 7
																Doctors.update({ _id: args._id                                                                    // 8
																}, {                                                                                              // 8
																				$set: {                                                                                       // 10
																								"avatar": data                                                                            // 11
																				}                                                                                             // 10
																});                                                                                               // 9
												}, function (e) {                                                                                     // 14
																throw e;                                                                                          // 15
												});                                                                                                   // 16
								}                                                                                                         // 17
                                                                                                                  //
								if (obj.cert.indexOf("base64")) {                                                                         // 19
												upload(obj.cert, function (data) {                                                                    // 20
																Doctors.update({ _id: args._id                                                                    // 21
																}, {                                                                                              // 21
																				$set: {                                                                                       // 23
																								"avatar": data                                                                            // 24
																				}                                                                                             // 23
																});                                                                                               // 22
												}, function (e) {                                                                                     // 27
																throw e;                                                                                          // 28
												});                                                                                                   // 29
								}                                                                                                         // 30
				}                                                                                                             // 32
                                                                                                                  //
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/doctor/publish.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("doctor", function (uid) {                                                                         // 1
                                                                                                                  //
    return [Doctors.find({                                                                                        // 3
        userid: uid                                                                                               // 5
    })];                                                                                                          // 4
});                                                                                                               // 8
Meteor.publish("doctorReferrals", function (uid) {                                                                // 9
    return Referrals.find({ "master.userid": uid, status: 1 });                                                   // 10
});                                                                                                               // 11
Meteor.publish("mydocInfo", function (uid) {                                                                      // 12
    console.log(uid);                                                                                             // 13
    return Doctors.find({                                                                                         // 14
        userid: uid                                                                                               // 15
    });                                                                                                           // 14
});                                                                                                               // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"feild":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/feild/method.js                                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/feild/publish.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("myFeilds", function (uid) {                                                                       // 1
                                                                                                                  //
    return Feilds.find({                                                                                          // 3
        $or: [{ users: { $in: [uid] } }, { share: 1 }],                                                           // 4
        status: 1                                                                                                 // 8
    });                                                                                                           // 3
});                                                                                                               // 10
                                                                                                                  //
Meteor.publish("feildDetail", function (id) {                                                                     // 12
    return Feilds.find({                                                                                          // 13
        _id: id                                                                                                   // 14
    });                                                                                                           // 13
});                                                                                                               // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"home":{"methods.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/home/methods.js                                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
                                                                                                                  //
    homeUpdateUserNickname: function homeUpdateUserNickname(args) {                                               // 3
        Meteor.users.update({                                                                                     // 4
            _id: args.uid                                                                                         // 5
        }, {                                                                                                      // 4
            $set: {                                                                                               // 7
                nickname: args.value                                                                              // 8
            }                                                                                                     // 7
        });                                                                                                       // 6
    },                                                                                                            // 11
                                                                                                                  //
    homeUpdateAvatar: function homeUpdateAvatar(args) {                                                           // 13
        upload(args.avatar, function (data) {                                                                     // 14
            Meteor.users.update({                                                                                 // 15
                _id: args.uid                                                                                     // 16
            }, {                                                                                                  // 15
                $set: {                                                                                           // 18
                    "avatar": data                                                                                // 19
                }                                                                                                 // 18
            });                                                                                                   // 17
                                                                                                                  //
            Dentists.update({                                                                                     // 23
                userid: args.uid                                                                                  // 24
            }, {                                                                                                  // 23
                $set: {                                                                                           // 26
                    avatar: data                                                                                  // 27
                }                                                                                                 // 26
            });                                                                                                   // 25
        }, function (e) {                                                                                         // 30
            throw e;                                                                                              // 31
        });                                                                                                       // 32
    },                                                                                                            // 33
                                                                                                                  //
    homeUpdatePhoto: function homeUpdatePhoto(args) {                                                             // 35
        upload(args.photo, function (data) {                                                                      // 36
            Meteor.users.update({                                                                                 // 37
                _id: args.uid                                                                                     // 38
            }, {                                                                                                  // 37
                $set: {                                                                                           // 40
                    "photo": data                                                                                 // 41
                }                                                                                                 // 40
            });                                                                                                   // 39
                                                                                                                  //
            Dentists.update({                                                                                     // 45
                userid: args.uid                                                                                  // 46
            }, {                                                                                                  // 45
                $set: {                                                                                           // 48
                    photo: data                                                                                   // 49
                }                                                                                                 // 48
            });                                                                                                   // 47
        }, function (e) {                                                                                         // 52
            throw e;                                                                                              // 53
        });                                                                                                       // 54
    },                                                                                                            // 55
                                                                                                                  //
    homeUpdateUserPassword: function homeUpdateUserPassword(args) {                                               // 58
        var uid = args.uid;                                                                                       // 59
        var pwd = args.pwd;                                                                                       // 60
                                                                                                                  //
        var user = Meteor.users.findOne({                                                                         // 62
            _id: uid                                                                                              // 63
        });                                                                                                       // 62
        var md5 = CryptoJS.MD5(pwd + user.salt).toString();                                                       // 65
        Meteor.users.update({                                                                                     // 66
            _id: uid                                                                                              // 67
        }, {                                                                                                      // 66
            $set: {                                                                                               // 69
                password: md5                                                                                     // 70
            }                                                                                                     // 69
        });                                                                                                       // 68
    },                                                                                                            // 73
    createCashPay: function createCashPay(args) {                                                                 // 74
        var rid = Recharge.insert({                                                                               // 75
            userid: args.userid,                                                                                  // 76
            cash: args.cash,                                                                                      // 77
            createAt: new Date(),                                                                                 // 78
            ispay: 0                                                                                              // 79
                                                                                                                  //
        });                                                                                                       // 75
        return Recharge.findOne({ _id: rid });                                                                    // 82
    },                                                                                                            // 83
    paySuccess: function paySuccess(args) {                                                                       // 84
                                                                                                                  //
        var rc = Recharge.findOne({ _id: args.out_trade_no });                                                    // 86
                                                                                                                  //
        //检查是否已处理                                                                                                 //
        if (rc.ispay == 0) {                                                                                      // 89
            //更新充值记录                                                                                              //
            Recharge.update({ _id: args.out_trade_no }, {                                                         // 91
                $set: {                                                                                           // 92
                    ispay: 1,                                                                                     // 93
                    cash: args.price,                                                                             // 94
                    data: args,                                                                                   // 95
                    payAt: new Date()                                                                             // 96
                                                                                                                  //
                }                                                                                                 // 92
            });                                                                                                   // 91
                                                                                                                  //
            //充值                                                                                                  //
            Meteor.users.update({                                                                                 // 102
                _id: rc.userid                                                                                    // 103
            }, {                                                                                                  // 102
                $inc: {                                                                                           // 105
                    balance: rc.cash * 1,                                                                         // 106
                    income: rc.cash * 1                                                                           // 107
                }                                                                                                 // 105
            });                                                                                                   // 104
                                                                                                                  //
            //信息记录下来                                                                                              //
            //返回后在客户端纪录                                                                                           //
            return "SUCCESS";                                                                                     // 113
        }                                                                                                         // 115
                                                                                                                  //
        return "REPEAT";                                                                                          // 117
    }                                                                                                             // 120
                                                                                                                  //
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/home/publish.js                                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("userDetail", function (uid) {                                                                     // 1
                                                                                                                  //
    return Meteor.users.find({                                                                                    // 3
        _id: uid                                                                                                  // 4
    }, {                                                                                                          // 3
        fields: {                                                                                                 // 6
            nickname: 1,                                                                                          // 7
            username: 1,                                                                                          // 8
            email: 1,                                                                                             // 9
            vaildEmail: 1,                                                                                        // 10
            tel: 1,                                                                                               // 11
            avatar: 1,                                                                                            // 12
            point: 1,                                                                                             // 13
            balance: 1,                                                                                           // 14
            isadmin: 1,                                                                                           // 15
            createAt: 1,                                                                                          // 16
            invite: 1,                                                                                            // 17
            photo: 1,                                                                                             // 18
            income: 1                                                                                             // 19
        }                                                                                                         // 6
    });                                                                                                           // 5
});                                                                                                               // 22
                                                                                                                  //
Meteor.publish("myTracks", function (uid) {                                                                       // 24
                                                                                                                  //
    var fd = {                                                                                                    // 26
        income: 1,                                                                                                // 27
        balance: 1,                                                                                               // 28
        tel: 1,                                                                                                   // 29
        nickname: 1                                                                                               // 30
    };                                                                                                            // 26
                                                                                                                  //
    return [Meteor.users.find({                                                                                   // 33
        _id: uid                                                                                                  // 34
    }, {                                                                                                          // 33
        fields: fd                                                                                                // 36
    }), Tracks.find({                                                                                             // 35
        userid: uid                                                                                               // 39
    }), Bankcards.find({ userid: uid })];                                                                         // 38
});                                                                                                               // 44
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"jpush":{"methods.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/jpush/methods.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
//推送服务器端方法                                                                                                        //
Meteor.methods({                                                                                                  // 2
    //更新服务器端注册ID，再次必须返回［］数组形式的用户标签列表，最少为［“注册用户”］                                                                  //
    updateJpushRegistrationID: function updateJpushRegistrationID(args) {                                         // 4
        //初始化用户标签                                                                                                 //
        var tags = ["注册用户"];                                                                                      // 6
                                                                                                                  //
        var upi = UsersPushInfo.findOne({ userid: args.userid, regid: args.id });                                 // 8
                                                                                                                  //
        if (upi) {                                                                                                // 10
            UsersPushInfo.update({ _id: upi._id }, { $set: { regid: args.id } });                                 // 11
        } else {                                                                                                  // 12
            UsersPushInfo.insert({ userid: args.userid, regid: args.id });                                        // 13
        }                                                                                                         // 14
        console.log(args, tags);                                                                                  // 15
        return tags;                                                                                              // 16
    },                                                                                                            // 17
    jpushServerPush: function jpushServerPush(args) {                                                             // 18
        jpush.server(args);                                                                                       // 19
    }                                                                                                             // 20
});                                                                                                               // 2
                                                                                                                  //
// UsersPushInfo = new Meteor.Collection("usersPushInfo");                                                        //
// UserPushs = new Meteor.Collection("userPushs");                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"server.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/jpush/server.js                                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
jpush = {                                                                                                         // 1
    server: function server(msg) {                                                                                // 2
        if (jpush._check(msg)) {                                                                                  // 3
                                                                                                                  //
            //初始化用户标签                                                                                             //
            var upi = UsersPushInfo.findOne({ userid: msg.userid });                                              // 6
            if (upi) {                                                                                            // 7
                msg.regid = upi.regid;                                                                            // 8
            }                                                                                                     // 9
            UserPushs.insert(msg);                                                                                // 10
        }                                                                                                         // 11
    },                                                                                                            // 12
    _check: function _check(msg) {                                                                                // 13
        // if (!msg.type) {                                                                                       //
        //     console.log("需要制定是SERVER还是LOCAL");                                                                 //
        //     return false;                                                                                      //
        // }                                                                                                      //
        if (!msg.content) {                                                                                       // 18
            console.log("请填写推送内容");                                                                               // 19
            return false;                                                                                         // 20
        }                                                                                                         // 21
        if (!msg.title) {                                                                                         // 22
            console.log("ANDROID平台需要标题");                                                                         // 23
            return false;                                                                                         // 24
        }                                                                                                         // 25
        if (!msg.url) {                                                                                           // 26
            console.log("请设置跳转方向");                                                                               // 27
            return false;                                                                                         // 28
        }                                                                                                         // 29
        // if (!msg.userid && !msg.regid) {                                                                       //
        //     console.log("请设置用户ID 或 设备注册ID");                                                                   //
        //     return false;                                                                                      //
        // }                                                                                                      //
        if (isNaN(msg.badge * 1)) {                                                                               // 34
            console.log("请设置IOS提示角标，0为取消");                                                                       // 35
            return false;                                                                                         // 36
        }                                                                                                         // 37
        if (isNaN(msg.delay * 1)) {                                                                               // 38
            console.log("请设置延时时间，单位秒");                                                                           // 39
            return false;                                                                                         // 40
        }                                                                                                         // 41
        return true;                                                                                              // 42
    }                                                                                                             // 43
};                                                                                                                // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"messages":{"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/messages/publish.js                                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("mymessages", function (uid) {                                                                     // 1
    return Messages.find({ status: 1, $or: [{ from: uid }, { to: uid }] });                                       // 2
});                                                                                                               // 6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"new":{"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/new/publish.js                                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("news", function () {                                                                              // 1
    return News.find({}, {                                                                                        // 2
        sort: {                                                                                                   // 5
            createAt: -1                                                                                          // 6
        },                                                                                                        // 5
        limit: 10                                                                                                 // 8
    });                                                                                                           // 4
});                                                                                                               // 10
                                                                                                                  //
Meteor.publish("newsData", function (newsid, userid) {                                                            // 12
    if (userid) return [News.find({ _id: newsid }), NewsComment.find({ news: newsid }), NewsFovar.find({ "userid": userid, news: newsid })];else return [News.find({ _id: newsid }), NewsComment.find({ news: newsid })];
});                                                                                                               // 24
                                                                                                                  //
Meteor.publish("mynews", function (userid) {                                                                      // 26
    console.log(userid);                                                                                          // 27
    return [NewsFovar.find({ "userid": userid })];                                                                // 28
});                                                                                                               // 31
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"oss":{"config.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/oss/config.js                                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
oss = null;                                                                                                       // 1
Meteor.startup(function () {                                                                                      // 2
    oss = new ALY.OSS({                                                                                           // 3
        accessKeyId: "yYlOJE1T4NmsAi69",                                                                          // 4
        secretAccessKey: "Rgq8ToXYEcp5Xn28oOWyfRRyD5Y3U5",                                                        // 5
        endpoint: "http://oss-cn-beijing.aliyuncs.com", //测试环境                                                    // 6
        // endpoint: 'http://oss-cn-beijing-internal.aliyuncs.com', //线上环境                                        //
        apiVersion: '2013-10-15'                                                                                  // 8
    });                                                                                                           // 3
});                                                                                                               // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/oss/method.js                                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  //
upload = function upload(img, callback) {                                                                         // 2
                                                                                                                  //
    var prefix = img.substr(0, img.indexOf("base64") + 7);                                                        // 4
                                                                                                                  //
    var ext = "jpg";                                                                                              // 6
    var mine = "image/jpeg";                                                                                      // 7
    if (prefix.indexOf("png") > 0) {                                                                              // 8
        ext = "png";                                                                                              // 9
        mine = "image/png";                                                                                       // 10
    } else if (prefix.indexOf("gif") > 0) {                                                                       // 11
        ext = "gif";                                                                                              // 12
        mine = "image/gif";                                                                                       // 13
    }                                                                                                             // 14
                                                                                                                  //
    var name = "asset/" + parseInt(Math.random() * 10000000000) + "." + ext;                                      // 16
                                                                                                                  //
    var data = img.replace(/^data:image\/\w+;base64,/, "");                                                       // 18
    var base64 = new Buffer(data, "base64");                                                                      // 19
                                                                                                                  //
    var url = "http://cdn.yigonglue.com/" + name;                                                                 // 22
    oss.putObject({                                                                                               // 23
        Bucket: 'yglweb',                                                                                         // 24
        Key: name, // 注意, Key 的值不能以 / 开头, 否则会返回错误.                                                                // 25
        Body: base64,                                                                                             // 26
        AccessControlAllowOrigin: '*',                                                                            // 27
        ContentType: mine,                                                                                        // 28
        CacheControl: 'no-cache', // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9           // 29
        ContentDisposition: '', // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1           // 30
        ContentEncoding: 'utf-8', // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11          // 31
        ServerSideEncryption: 'AES256',                                                                           // 32
        Expires: null // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21                      // 33
    }, Meteor.bindEnvironment(function (err, msg) {                                                               // 23
        if (err) {                                                                                                // 36
            console.log(err);                                                                                     // 37
        } else {                                                                                                  // 38
            callback(url);                                                                                        // 39
        }                                                                                                         // 40
    }));                                                                                                          // 42
};                                                                                                                // 44
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"pay":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/pay/method.js                                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
/***                                                                                                              //
 ** 统一支付接口-服务端                                                                                                    //
 ** 参数说明                                                                                                          //
 ** pays = {                                                                                                      //
 **         subject: "付款单名称",                                                                                     //
 **         body: "付款单说明",                                                                                        //
 **         price: "付款单价格,单位：元", price|balance|point 最少存在一个                                                       //
 **         balance: "付款单价格,单位：余额",                                                                               //
 **         point: "付款单价格,单位：积分",                                                                                 //
 **         data: {付款单附带数据},                                                                                      //
 **         createAt: "付款单创建时间",                                                                                  //
 **         status: "付款单状态",                                                                                      //
 **         paystatus: "支付状态",                                                                                    //
 **         username: "支付者昵称",                                                                                    //
 **         userid: "支付者ID",                                                                                      //
 **         fruid: "推荐者ID",                                                                                       //
 **         curstate: "本次支付访问状态 INREG:本次访问完成登录",                                                                  //
 **         way: "支付方式",                                                                                          //
 ** }                                                                                                             //
 **                                                                                                               //
 **                                                                                                               //
 ***/                                                                                                             //
Meteor.methods({                                                                                                  // 23
    //生成付款单                                                                                                       //
    createPay: function createPay(args) {                                                                         // 25
        if (args.userid) {                                                                                        // 26
            var user = Meteor.users.findOne({ _id: args.userid });                                                // 27
            //检查余额                                                                                                //
            if (args.balance > 0) {                                                                               // 29
                var user_balance = user.balance ? user.balance : 0;                                               // 30
                if (user_balance < args.balance) {                                                                // 31
                    return "BALANCE";                                                                             // 32
                }                                                                                                 // 33
            }                                                                                                     // 34
            //检查积分                                                                                                //
            if (args.point > 0) {                                                                                 // 36
                var user_point = user.point ? user.point : 0;                                                     // 37
                if (user_point < args.point) {                                                                    // 38
                    return "POINT";                                                                               // 39
                }                                                                                                 // 40
            }                                                                                                     // 41
                                                                                                                  //
            //设置其它信息                                                                                              //
            args.createAt = new Date();                                                                           // 44
            args.status = 1;                                                                                      // 45
            args.username = user.nickname;                                                                        // 46
                                                                                                                  //
            //如果无现金支付                                                                                             //
            if (args.price == 0) {                                                                                // 49
                //余额支付                                                                                            //
                if (args.balance > 0) {                                                                           // 51
                    args.way = "BALANCE";                                                                         // 52
                    args.payAt = new Date();                                                                      // 53
                }                                                                                                 // 54
                //积分余额                                                                                            //
                if (args.point > 0) {                                                                             // 56
                    args.way = "POINT";                                                                           // 57
                    args.payAt = new Date();                                                                      // 58
                }                                                                                                 // 59
            } else {                                                                                              // 60
                args.paystatus = 0;                                                                               // 61
            }                                                                                                     // 62
                                                                                                                  //
            //插入付款单                                                                                               //
            var payid = Pays.insert(args);                                                                        // 65
            args._id = payid;                                                                                     // 66
                                                                                                                  //
            return args;                                                                                          // 68
        } else {                                                                                                  // 69
            //设置其它信息                                                                                              //
            args.createAt = new Date();                                                                           // 71
            args.status = 1;                                                                                      // 72
            args.way = "BALANCE";                                                                                 // 73
            args.payAt = new Date();                                                                              // 74
            var payid = Pays.insert(args);                                                                        // 75
            args._id = payid;                                                                                     // 76
                                                                                                                  //
            return args;                                                                                          // 78
        }                                                                                                         // 79
    },                                                                                                            // 81
    //现金付款完成                                                                                                      //
    payComplete: function payComplete(args) {                                                                     // 83
        var pay = Pays.findOne({ _id: args.pay._id });                                                            // 84
        console.log(pay);                                                                                         // 85
                                                                                                                  //
        if (pay.userid) {                                                                                         // 87
            var user = Meteor.users.findOne({ _id: pay.userid });                                                 // 88
            //检查余额                                                                                                //
            if (pay.balance > 0) {                                                                                // 90
                                                                                                                  //
                var user_balance = user.balance ? user.balance : 0;                                               // 92
                                                                                                                  //
                if (user_balance < pay.balance) {                                                                 // 94
                                                                                                                  //
                    Pays.update({                                                                                 // 96
                        _id: pay._id                                                                              // 97
                    }, {                                                                                          // 96
                        $set: {                                                                                   // 99
                            payAt: new Date(),                                                                    // 100
                            paystatus: 1,                                                                         // 101
                            tradeno: args.result,                                                                 // 102
                            way: args.pay.way,                                                                    // 103
                            error: "BALANCE"                                                                      // 104
                        }                                                                                         // 99
                    });                                                                                           // 98
                    //出现余额不足则现金计入余额                                                                               //
                    Meteor.users.update({                                                                         // 108
                        _id: user._id                                                                             // 109
                    }, {                                                                                          // 108
                        $inc: {                                                                                   // 111
                            balance: pay.price * 1                                                                // 112
                        }                                                                                         // 111
                    });                                                                                           // 110
                    return "BALANCE";                                                                             // 115
                } else {                                                                                          // 116
                    Meteor.users.update({                                                                         // 117
                        _id: user._id                                                                             // 118
                    }, {                                                                                          // 117
                        $inc: {                                                                                   // 120
                            balance: pay.balance * -1                                                             // 121
                        }                                                                                         // 120
                    });                                                                                           // 119
                }                                                                                                 // 124
            }                                                                                                     // 125
            //检查积分                                                                                                //
            if (pay.point > 0) {                                                                                  // 127
                var user_point = user.point ? user.point : 0;                                                     // 128
                if (user_point < pay.point) {                                                                     // 129
                                                                                                                  //
                    Pays.update({                                                                                 // 131
                        _id: pay._id                                                                              // 132
                    }, {                                                                                          // 131
                        $set: {                                                                                   // 134
                            payAt: new Date(),                                                                    // 135
                            paystatus: 1,                                                                         // 136
                            tradeno: args.result,                                                                 // 137
                            way: args.pay.way,                                                                    // 138
                            error: "POINT"                                                                        // 139
                        }                                                                                         // 134
                    });                                                                                           // 133
                    //出现余额不足则现金计入余额                                                                               //
                    Meteor.users.update({                                                                         // 143
                        _id: user._id                                                                             // 144
                    }, {                                                                                          // 143
                        $inc: {                                                                                   // 146
                            balance: pay.price * 1                                                                // 147
                        }                                                                                         // 146
                    });                                                                                           // 145
                    return "POINT";                                                                               // 150
                } else {                                                                                          // 151
                    Meteor.users.update({                                                                         // 152
                        _id: user._id                                                                             // 153
                    }, {                                                                                          // 152
                        $inc: {                                                                                   // 155
                            point: pay.point * -1                                                                 // 156
                        }                                                                                         // 155
                    });                                                                                           // 154
                }                                                                                                 // 159
            }                                                                                                     // 160
                                                                                                                  //
            //处理付款单                                                                                               //
            Pays.update({                                                                                         // 163
                _id: pay._id                                                                                      // 164
            }, {                                                                                                  // 163
                $set: {                                                                                           // 166
                    payAt: new Date(),                                                                            // 167
                    paystatus: 1,                                                                                 // 168
                    way: args.pay.way,                                                                            // 169
                    tradeno: args.result                                                                          // 170
                }                                                                                                 // 166
            });                                                                                                   // 165
                                                                                                                  //
            return "OK";                                                                                          // 174
        } else {                                                                                                  // 175
            //处理付款单                                                                                               //
            Pays.update({                                                                                         // 177
                _id: pay._id                                                                                      // 178
            }, {                                                                                                  // 177
                $set: {                                                                                           // 180
                    payAt: new Date(),                                                                            // 181
                    paystatus: 1,                                                                                 // 182
                    way: args.pay.way,                                                                            // 183
                    tradeno: args.result                                                                          // 184
                }                                                                                                 // 180
            });                                                                                                   // 179
        }                                                                                                         // 187
    }                                                                                                             // 189
});                                                                                                               // 23
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"person":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/person/method.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
    createPerson: function createPerson(args) {                                                                   // 2
        //根据身份证号码判定是否同一个用户                                                                                        //
                                                                                                                  //
        var p = Persons.findOne({ no: args.no });                                                                 // 5
        if (p) {                                                                                                  // 6
                                                                                                                  //
            //更新内容,不为空则更新                                                                                         //
            var modify = {};                                                                                      // 9
            if (args.name) {                                                                                      // 10
                modify.name = args.name;                                                                          // 11
            }                                                                                                     // 12
            if (args.address) {                                                                                   // 13
                modify.address = args.address;                                                                    // 14
            }                                                                                                     // 15
            if (args.blood) {                                                                                     // 16
                modify.blood = args.blood;                                                                        // 17
            }                                                                                                     // 18
            if (args.chronic) {                                                                                   // 19
                modify.chronic = args.chronic;                                                                    // 20
            }                                                                                                     // 21
            if (args.other) {                                                                                     // 22
                modify.other = args.other;                                                                        // 23
            }                                                                                                     // 24
                                                                                                                  //
            //如果档案已经存在则加入可访问列表                                                                                    //
            Persons.update({ _id: p._id }, {                                                                      // 28
                $addToSet: {                                                                                      // 29
                    users: args.userid                                                                            // 30
                },                                                                                                // 29
                $set: modify                                                                                      // 32
            });                                                                                                   // 28
        } else {                                                                                                  // 36
            //不存在则建立新的档案                                                                                          //
            var obj = {                                                                                           // 38
                name: args.name,                                                                                  // 39
                sex: args.sex,                                                                                    // 40
                brithday: args.brithday,                                                                          // 41
                no: args.no,                                                                                      // 42
                address: args.address,                                                                            // 43
                tel: args.tel,                                                                                    // 44
                urgent: args.urgent,                                                                              // 45
                blood: args.blood,                                                                                // 46
                rh: args.rh,                                                                                      // 47
                chronic: args.chronic,                                                                            // 48
                allergy: args.allergy,                                                                            // 49
                other: args.other,                                                                                // 50
                users: [args.userid],                                                                             // 51
                nickname: args.nickname,                                                                          // 52
                avatar: args.avatar,                                                                              // 53
                createAt: new Date(),                                                                             // 54
                status: 1,                                                                                        // 55
                updateAt: new Date()                                                                              // 56
            };                                                                                                    // 38
            Persons.insert(obj);                                                                                  // 58
        }                                                                                                         // 59
    }                                                                                                             // 61
                                                                                                                  //
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/person/publish.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("myPerson", function (uid) {                                                                       // 1
    return Persons.find({                                                                                         // 2
        users: { $in: [uid] }                                                                                     // 3
    });                                                                                                           // 2
});                                                                                                               // 5
Meteor.publish("personDetail", function (id) {                                                                    // 6
    return [Persons.find({                                                                                        // 7
        _id: id                                                                                                   // 9
    }), Referrals.find({ "person._id": id }), Visits.find({ "person._id": id })];                                 // 8
});                                                                                                               // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"referral":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/referral/method.js                                                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
    uploadPicForReferral: function (_uploadPicForReferral) {                                                      // 2
        function uploadPicForReferral(_x) {                                                                       // 2
            return _uploadPicForReferral.apply(this, arguments);                                                  // 2
        }                                                                                                         // 2
                                                                                                                  //
        uploadPicForReferral.toString = function () {                                                             // 2
            return _uploadPicForReferral.toString();                                                              // 2
        };                                                                                                        // 2
                                                                                                                  //
        return uploadPicForReferral;                                                                              // 2
    }(function (args) {                                                                                           // 2
        var obj = Referrals.findOne({ _id: args._id });                                                           // 3
        if (obj.person.pictures) {                                                                                // 4
            for (var i = 0; i < obj.person.pictures.length; i++) {                                                // 5
                var pic = obj.person.pictures[i];                                                                 // 6
                if (pic.indexOf("base64")) {                                                                      // 7
                    uploadPicForReferral(obj, i);                                                                 // 8
                }                                                                                                 // 9
            }                                                                                                     // 10
        }                                                                                                         // 11
    }),                                                                                                           // 13
    queryDepartmentPrice: function queryDepartmentPrice(args) {                                                   // 14
        var r = Referrals.findOne({                                                                               // 15
            _id: args.ref,                                                                                        // 16
            status: 1                                                                                             // 17
        });                                                                                                       // 15
        console.log(Departments.findOne({                                                                         // 19
            _id: r.master.sdepartment,                                                                            // 20
            status: 1                                                                                             // 21
        }));                                                                                                      // 19
                                                                                                                  //
        if (r) {                                                                                                  // 24
            return Departments.findOne({                                                                          // 25
                _id: r.master.sdepartment,                                                                        // 26
                status: 1                                                                                         // 27
            });                                                                                                   // 25
        }                                                                                                         // 29
    },                                                                                                            // 32
    paySuccessReferral: function paySuccessReferral(args) {                                                       // 33
        console.log(args);                                                                                        // 34
        Referrals.update({ _id: args.ref }, { $set: { checkPay: 1, payAt: new Date() } });                        // 35
        //选出最少接单的人                                                                                                //
    },                                                                                                            // 38
    sendInfo: function sendInfo(args) {                                                                           // 39
                                                                                                                  //
        sms.send(args.tel, args.username + ",您好,您的转诊单已被接收");                                                      // 41
                                                                                                                  //
        return "SUCCESS";                                                                                         // 43
    }                                                                                                             // 44
                                                                                                                  //
});                                                                                                               // 1
uploadPicForReferral = function uploadPicForReferral(obj, i) {                                                    // 47
    var pic = obj.person.pictures[i];                                                                             // 48
    upload(pic, function (data) {                                                                                 // 49
        var modify = { "person": {} };                                                                            // 50
        modify["person"]["pictures." + i] = data;                                                                 // 51
        Referrals.update({                                                                                        // 52
            _id: obj._id                                                                                          // 53
        }, {                                                                                                      // 52
            $set: modify                                                                                          // 55
        });                                                                                                       // 54
    });                                                                                                           // 57
};                                                                                                                // 58
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/referral/publish.js                                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("referralList", function (uid) {                                                                   // 1
    return Referrals.find({                                                                                       // 2
        "creater.userid": uid,                                                                                    // 3
        status: 1                                                                                                 // 4
    });                                                                                                           // 2
});                                                                                                               // 6
Meteor.publish("referralDetail", function (id) {                                                                  // 7
    var r = Referrals.findOne({                                                                                   // 8
        _id: id,                                                                                                  // 9
        status: 1                                                                                                 // 10
    });                                                                                                           // 8
    if (r) {                                                                                                      // 12
        return [Referrals.find({                                                                                  // 13
            _id: id,                                                                                              // 15
            status: 1                                                                                             // 16
        }), Persons.find({ _id: r.person._id })];                                                                 // 14
    }                                                                                                             // 21
});                                                                                                               // 23
                                                                                                                  //
// PersonDepartmentPay.find({person:r.person});                                                                   //
Meteor.publish("referralPrice", function (id) {                                                                   // 24
    var r = Referrals.findOne({                                                                                   // 25
        _id: id,                                                                                                  // 26
        status: 1                                                                                                 // 27
    });                                                                                                           // 25
    if (r) {                                                                                                      // 29
        return [Departments.find({                                                                                // 30
            _id: r.master.department,                                                                             // 32
            status: 1                                                                                             // 33
        })];                                                                                                      // 31
    }                                                                                                             // 37
});                                                                                                               // 39
                                                                                                                  //
Meteor.publish("myReferrals", function (uid) {                                                                    // 41
    return Referrals.find({ "creater.userid": uid, status: 1 });                                                  // 42
});                                                                                                               // 43
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"region":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/region/method.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
    badgeCount: function badgeCount(args) {                                                                       // 2
        for (var i = 0; i < args.badges.length; i++) {                                                            // 3
            var bd = args.badges[i];                                                                              // 4
            for (var j = 0; j < args.users.length; j++) {                                                         // 5
                var user = args.users[j];                                                                         // 6
                var ub = UserBadges.findOne({ userid: user, badge: bd });                                         // 7
                var bg = Badges.findOne({ alias: bd });                                                           // 8
                                                                                                                  //
                if (ub) {                                                                                         // 11
                    var modi = {};                                                                                // 12
                    modi["$inc"] = { num: args.num };                                                             // 13
                    if (bg.num <= ub.num + args.num) {                                                            // 14
                        modi["$set"] = { complete: 1 };                                                           // 15
                        UserBadges.update({ _id: ub._id }, modi);                                                 // 16
                        Badges.update({ _id: bg._id }, { $addToSet: { users: args.userid } });                    // 17
                    } else {                                                                                      // 18
                        modi["$set"] = { complete: 0 };                                                           // 19
                        UserBadges.update({ _id: ub._id }, modi);                                                 // 20
                    }                                                                                             // 21
                } else {                                                                                          // 23
                    UserBadges.insert({ userid: user, badge: bd, num: args.num, createAt: new Date(), complete: 0, rebate: 0 });
                }                                                                                                 // 25
                UserBadgesTrack.insert(args);                                                                     // 26
            }                                                                                                     // 27
        }                                                                                                         // 28
    }                                                                                                             // 30
                                                                                                                  //
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/region/publish.js                                                                                       //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("regions", function () {                                                                           // 1
    return Regions.find({                                                                                         // 2
        status: 1                                                                                                 // 3
    });;                                                                                                          // 2
});                                                                                                               // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"rotation":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/rotation/method.js                                                                                      //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
                                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/rotation/publish.js                                                                                     //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("rotationPersonUncheck", function (uid) {                                                          // 1
    return Referrals.find({                                                                                       // 2
        checkMaster: 0,                                                                                           // 3
        masterMaster: uid,                                                                                        // 4
        status: 1                                                                                                 // 5
    });;                                                                                                          // 2
});                                                                                                               // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"sms":{"client.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/sms/client.js                                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
sms = {                                                                                                           // 1
    // uid=1234&auth=faea920f7412b5da7be0cf42b8c93759&mobile=13612345678&msg=hello&expid=0                        //
    server: 'http://sms.10690221.com:9011/hy/?',                                                                  // 3
    uid: "8085911",                                                                                               // 4
    code: "ygl2016",                                                                                              // 5
    pwd: "ygl2016",                                                                                               // 6
    send: function send(tel, html) {                                                                              // 7
                                                                                                                  //
        console.log("SMS:" + html);                                                                               // 9
        HTTP.get(sms.server, {                                                                                    // 10
            params: {                                                                                             // 11
                uid: sms.uid,                                                                                     // 12
                auth: CryptoJS.MD5(sms.code + sms.pwd).toString().toLowerCase(),                                  // 13
                mobile: tel,                                                                                      // 14
                msg: html,                                                                                        // 15
                expid: 0,                                                                                         // 16
                encode: "utf-8"                                                                                   // 17
            }                                                                                                     // 11
        }, function (error, result) {                                                                             // 10
            if (!error) {                                                                                         // 20
                console.log("SMS-RES:" + result.content);                                                         // 21
            } else {                                                                                              // 22
                console.log("SMS-ERR:" + error);                                                                  // 23
            }                                                                                                     // 24
        });                                                                                                       // 25
    }                                                                                                             // 27
};                                                                                                                // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"visit":{"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/visit/method.js                                                                                         //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
    createTable: function createTable(args) {                                                                     // 2
        var obj = {                                                                                               // 3
            vid: args.vid,                                                                                        // 4
            topic: args.topic,                                                                                    // 5
            detail: args.detail,                                                                                  // 6
            date: args.date,                                                                                      // 7
            way: args.way,                                                                                        // 8
            symptom: args.symptom,                                                                                // 9
            sign: args.sign,                                                                                      // 10
            lifeway: args.lifeway,                                                                                // 11
            inspect: args.inspect,                                                                                // 12
            medicine: args.medicine,                                                                              // 13
            nextdate: args.nextdate,                                                                              // 14
            createAt: new Date(),                                                                                 // 15
            status: 1                                                                                             // 16
        };                                                                                                        // 3
        Tables.insert(obj);                                                                                       // 18
    }                                                                                                             // 19
                                                                                                                  //
});                                                                                                               // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"publish.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/visit/publish.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.publish("myVisits", function (uid) {                                                                       // 1
                                                                                                                  //
    return Visits.find({                                                                                          // 3
        $or: [{ "executer.userid": uid }, { "creater.userid": uid }],                                             // 4
        status: 1                                                                                                 // 8
    });                                                                                                           // 3
});                                                                                                               // 10
Meteor.publish("visitDetail", function (id) {                                                                     // 11
    return Visits.find({                                                                                          // 12
        _id: id                                                                                                   // 13
    });                                                                                                           // 12
});                                                                                                               // 15
// Meteor.publish("feildDetail", function(id) {                                                                   //
//     return Feilds.find({                                                                                       //
//         fid: id                                                                                                //
//     });                                                                                                        //
// });                                                                                                            //
                                                                                                                  //
Meteor.publish("visitDetails", function (id) {                                                                    // 23
    var r = Visits.findOne({                                                                                      // 24
        _id: id,                                                                                                  // 25
        status: 1                                                                                                 // 26
    });                                                                                                           // 24
    if (r) {                                                                                                      // 28
        return [Visits.find({                                                                                     // 29
            _id: id,                                                                                              // 31
            status: 1                                                                                             // 32
        }), Persons.find({ _id: r.person._id })];                                                                 // 30
    }                                                                                                             // 37
});                                                                                                               // 39
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"wechat":{"config.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/wechat/config.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
wechatConfig = {                                                                                                  // 1
	// appid:"wx6487235267a787f7",                                                                                   //
	// secret:"3ba5e0f80eef9566526f50eba48b625c",                                                                    //
	// mchid:"1232233802",                                                                                           //
	// partnerKey:"",                                                                                                //
                                                                                                                  //
	// appid:"wxe8f39b5b477a688c",                                                                                   //
	// secret:"b91814b6d38c6550e94c617dcf6e1f29",                                                                    //
	// mchid:"1363053902",                                                                                           //
	// partnerKey:"rtohjwipu4hjt3qjtoq3jt3qkt3ktjoq",                                                                //
                                                                                                                  //
	appid: "wxe8f39b5b477a688c",                                                                                     // 13
	secret: "b91814b6d38c6550e94c617dcf6e1f29",                                                                      // 14
	mchid: "1251959901",                                                                                             // 15
	partnerKey: "jkfhkjehkwhrbwhrbowrhobwrhb82yg0"                                                                   // 16
                                                                                                                  //
};                                                                                                                // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"method.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/wechat/method.js                                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.methods({                                                                                                  // 1
    logres: function logres(args) {                                                                               // 2
        console.log(args);                                                                                        // 3
    },                                                                                                            // 4
    signatureWechat: function signatureWechat(args) {                                                             // 5
                                                                                                                  //
        var signobj = {                                                                                           // 9
            jsapi_ticket: getTicket(),                                                                            // 10
            noncestr: CryptoJS.MD5(Math.random() + "").toString(),                                                // 11
            timestamp: Math.floor(Date.now() / 1000),                                                             // 12
            url: process.env.ROOT_URL + args.path                                                                 // 13
        };                                                                                                        // 9
                                                                                                                  //
        var signstr = json2query(signobj);                                                                        // 16
                                                                                                                  //
        signobj.signature = CryptoJS.SHA1(signstr).toString();                                                    // 18
        signobj.appId = wechatConfig.appid;                                                                       // 19
                                                                                                                  //
        console.log(signobj);                                                                                     // 21
                                                                                                                  //
        return signobj;                                                                                           // 23
    },                                                                                                            // 24
    setWxUserInfo: function setWxUserInfo(args) {                                                                 // 25
        var url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + wechatConfig.appid + "&secret=" + wechatConfig.secret + "&code=" + args.code + "&grant_type=authorization_code";
        var response = Meteor.http.get(url);                                                                      // 27
                                                                                                                  //
        if (response.statusCode === 200) {                                                                        // 29
            var json = JSON.parse(response.content);                                                              // 30
            if (json.errcode) {                                                                                   // 31
                console.log(response.content);                                                                    // 32
            } else {                                                                                              // 33
                Meteor.users.update({ _id: args.userid }, {                                                       // 34
                    $set: { openid: json.openid }                                                                 // 35
                });                                                                                               // 34
                                                                                                                  //
                return json.openid;                                                                               // 38
            }                                                                                                     // 39
        }                                                                                                         // 41
        return false;                                                                                             // 42
    },                                                                                                            // 44
    setWxUserInfoWithinLogin: function setWxUserInfoWithinLogin(args) {                                           // 45
        var url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + wechatConfig.appid + "&secret=" + wechatConfig.secret + "&code=" + args.code + "&grant_type=authorization_code";
        var response = Meteor.http.get(url);                                                                      // 47
        if (response.statusCode === 200) {                                                                        // 48
            var json = JSON.parse(response.content);                                                              // 49
            if (json.errcode) {                                                                                   // 50
                console.log(response.content);                                                                    // 51
            } else {                                                                                              // 52
                return json.openid;                                                                               // 53
            }                                                                                                     // 54
        }                                                                                                         // 56
    },                                                                                                            // 58
    createWxPay: function createWxPay(args) {                                                                     // 59
        // {                                                                                                      //
        //     tradeNo: 'AmnJBH8oiZp5BrcQs',                                                                      //
        //     subject: '车是一个特殊的商品车是一个特殊的商品车是一个特殊的商品车是一个特殊的商品车是一个特殊的商品',                                          //
        //     body: 'sdfasdfasdf。水电费水电费sdfsdf。水电费水电费sdfsdf。水电费水电费sdfsdf。水电费水电费sdfsdf。水电费水电费sdfsdf。sdfsdf。',      //
        //     price: 100,                                                                                        //
        //     notifyUrl: 'http://mfynotify.fami2u.com/wxpay'                                                     //
        // }                                                                                                      //
                                                                                                                  //
        console.log("=====================正在生成一微信预付款单=======================");                                   // 68
        console.log({                                                                                             // 69
            body: args.subject.substring(0, 15),                                                                  // 70
            out_trade_no: args.tradeNo,                                                                           // 71
            total_fee: args.price * 100,                                                                          // 72
            spbill_create_ip: this.connection.clientAddress,                                                      // 73
            notify_url: args.notifyUrl,                                                                           // 74
            trade_type: 'JSAPI',                                                                                  // 75
            openid: args.openid,                                                                                  // 76
            attach: ""                                                                                            // 77
        });                                                                                                       // 69
                                                                                                                  //
        var obj = {};                                                                                             // 80
        WXPay.createUnifiedOrder({                                                                                // 81
            body: args.subject.substring(0, 15),                                                                  // 82
            out_trade_no: args.tradeNo,                                                                           // 83
            total_fee: args.price * 100,                                                                          // 84
            spbill_create_ip: this.connection.clientAddress,                                                      // 85
            notify_url: args.notifyUrl,                                                                           // 86
            trade_type: 'JSAPI',                                                                                  // 87
            openid: args.openid,                                                                                  // 88
            attach: ""                                                                                            // 89
        }, function (error, result) {                                                                             // 81
            if (error) {                                                                                          // 91
                console.log("ERROR====>", error);                                                                 // 92
            } else {                                                                                              // 93
                console.log("RES=====>", result);                                                                 // 94
            }                                                                                                     // 95
                                                                                                                  //
            obj = {                                                                                               // 97
                appId: wechatConfig.appid,                                                                        // 98
                timeStamp: Math.floor(Date.now() / 1000),                                                         // 99
                nonceStr: CryptoJS.MD5(Math.random() + "").toString(),                                            // 100
                "package": "prepay_id=" + result.prepay_id,                                                       // 101
                signType: "MD5"                                                                                   // 102
            };                                                                                                    // 97
            obj.paySign = WXPay.sign(obj);                                                                        // 104
        });                                                                                                       // 107
        return obj;                                                                                               // 108
    }                                                                                                             // 111
                                                                                                                  //
});                                                                                                               // 1
                                                                                                                  //
json2query = function json2query(json) {                                                                          // 115
    var arr = [];                                                                                                 // 116
    for (var k in json) {                                                                                         // 117
        arr.push(k + "=" + json[k]);                                                                              // 118
    }                                                                                                             // 119
    return arr.join("&");                                                                                         // 120
};                                                                                                                // 121
                                                                                                                  //
getTicket = function getTicket() {                                                                                // 123
    var token = getWxToken();                                                                                     // 124
    if (token) {                                                                                                  // 125
        var wt = wxticket.findOne({ expiresAt: { $gt: Math.floor(Date.now() / 1000) } });                         // 126
                                                                                                                  //
        if (wt) {                                                                                                 // 128
            return wt.ticket;                                                                                     // 129
        } else {                                                                                                  // 130
            var url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=' + token + '&type=jsapi';
                                                                                                                  //
            var response = Meteor.http.get(url);                                                                  // 133
                                                                                                                  //
            if (response.statusCode === 200) {                                                                    // 135
                wxticket.update({}, {                                                                             // 136
                    ticket: response.data.ticket,                                                                 // 137
                    expiresAt: Math.floor(Date.now() / 1000 + 7200)                                               // 138
                });                                                                                               // 136
                return response.data.ticket;                                                                      // 140
            } else {                                                                                              // 141
                console.log("ticket error");                                                                      // 142
                return false;                                                                                     // 143
            }                                                                                                     // 144
        }                                                                                                         // 145
    }                                                                                                             // 146
};                                                                                                                // 148
getWxToken = function getWxToken() {                                                                              // 149
                                                                                                                  //
    var ack = wxaccesstoken.findOne({ expiresAt: { $gt: Math.floor(Date.now() / 1000) } });                       // 151
                                                                                                                  //
    if (ack) {                                                                                                    // 153
        return ack.token;                                                                                         // 154
    } else {                                                                                                      // 155
        var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + wechatConfig.appid + '&secret=' + wechatConfig.secret;
        console.log(url);                                                                                         // 157
        var response = Meteor.http.get(url);                                                                      // 158
                                                                                                                  //
        if (response.statusCode === 200) {                                                                        // 160
            wxaccesstoken.update({}, {                                                                            // 161
                token: response.data.access_token,                                                                // 162
                expiresAt: Math.floor(Date.now() / 1000) + 7200                                                   // 163
            });                                                                                                   // 161
            return response.data.access_token;                                                                    // 165
        } else {                                                                                                  // 166
            console.log("accesstoken error");                                                                     // 167
            return false;                                                                                         // 168
        }                                                                                                         // 169
    }                                                                                                             // 170
};                                                                                                                // 171
Meteor.startup(function () {                                                                                      // 172
    if (wxaccesstoken.find().count() == 0) {                                                                      // 173
        wxaccesstoken.insert({});                                                                                 // 174
    }                                                                                                             // 176
    if (wxticket.find().count() == 0) {                                                                           // 177
        wxticket.insert({});                                                                                      // 178
    }                                                                                                             // 179
});                                                                                                               // 181
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"pay.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/wechat/pay.js                                                                                           //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
WXPay = function buildAPI() {                                                                                     // 1
    var APP_ID = wechatConfig.appid;                                                                              // 2
    var APP_SECRET = wechatConfig.secret;                                                                         // 3
    var PARTNER_KEY = wechatConfig.partnerKey;                                                                    // 4
    var MCH_ID = wechatConfig.mchid;                                                                              // 5
    return {                                                                                                      // 6
        //创建统一支付订单                                                                                                //
        createUnifiedOrder: function createUnifiedOrder(opts, fn) {                                               // 8
                                                                                                                  //
            //this.showConfig();                                                                                  //
            var unifiedorderUrl = "https://api.mch.weixin.qq.com/pay/unifiedorder";                               // 11
            this.wxpayID = {                                                                                      // 12
                appid: APP_ID,                                                                                    // 13
                mch_id: MCH_ID,                                                                                   // 14
                device_info: "WEB"                                                                                // 15
            };                                                                                                    // 12
            opts.nonce_str = opts.nonce_str || WxPayUtil.generateNonceString();                                   // 17
            _.extend(opts, this.wxpayID);                                                                         // 18
            opts.sign = this.sign(opts);                                                                          // 19
                                                                                                                  //
            var postXml = WxPayUtil.buildXML({ xml: opts });                                                      // 21
            var response = Meteor.http.post(unifiedorderUrl, { content: postXml });                               // 22
            if (response.statusCode === 200) {                                                                    // 23
                WxPayUtil.parseXML(response.content, fn);                                                         // 24
            }                                                                                                     // 25
        },                                                                                                        // 26
        //根据微信订单号查询支付订单                                                                                           //
        queryOrder: function queryOrder(query, fn) {                                                              // 28
            var wxUrl = "https://api.mch.weixin.qq.com/pay/orderquery";                                           // 29
            if (!(query.transaction_id || query.out_trade_no)) {                                                  // 30
                fn(null, { return_code: 'FAIL', return_msg: '缺少参数' });                                            // 31
            }                                                                                                     // 32
            _.extend(query, this.wxpayID);                                                                        // 33
            query.sign = this.sign(query);                                                                        // 34
            var postXml = WxPayUtil.buildXML({ xml: query });                                                     // 35
            var response = Meteor.http.post(wxUrl, { content: postXml });                                         // 36
            if (response.statusCode === 200) {                                                                    // 37
                WxPayUtil.parseXML(response.content, fn);                                                         // 38
            }                                                                                                     // 39
        },                                                                                                        // 42
        //show config                                                                                             //
        showConfig: function showConfig(content) {                                                                // 44
            //console.log("APP_ID",APP_ID);                                                                       //
            //console.log("APP_SECRET",APP_SECRET);                                                               //
            //console.log("PARTNER_KEY",PARTNER_KEY);                                                             //
            //console.log("MCH_ID",MCH_ID);                                                                       //
        },                                                                                                        // 49
        //weixin sign                                                                                             //
        sign: function sign(param) {                                                                              // 51
            var querystring = Object.keys(param).filter(function (key) {                                          // 52
                return param[key] !== undefined && param[key] !== '' && ['pfx', 'partner_key', 'sign', 'key'].indexOf(key) < 0;
            }).sort().map(function (key) {                                                                        // 54
                return key + '=' + param[key];                                                                    // 55
            }).join("&") + "&key=" + PARTNER_KEY;                                                                 // 56
                                                                                                                  //
            var hash = CryptoJS.MD5(querystring).toString().toUpperCase();                                        // 58
            return hash;                                                                                          // 59
        }                                                                                                         // 60
    };                                                                                                            // 6
}();                                                                                                              // 62
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"util.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/wechat/util.js                                                                                          //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
WxPayUtil = {                                                                                                     // 1
    generateNonceString: function generateNonceString(length) {                                                   // 2
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';                             // 3
        var maxPos = chars.length;                                                                                // 4
        var noceStr = "";                                                                                         // 5
        for (var i = 0; i < (length || 32); i++) {                                                                // 6
            noceStr += chars.charAt(Math.floor(Math.random() * maxPos));                                          // 7
        }                                                                                                         // 8
        return noceStr;                                                                                           // 9
    },                                                                                                            // 10
    mix: function mix() {                                                                                         // 11
        var root = arguments[0];                                                                                  // 12
        if (arguments.length == 1) {                                                                              // 13
            return root;                                                                                          // 13
        }                                                                                                         // 13
        for (var i = 1; i < arguments.length; i++) {                                                              // 14
            for (var k in arguments[i]) {                                                                         // 15
                root[k] = arguments[i][k];                                                                        // 16
            }                                                                                                     // 17
        }                                                                                                         // 18
        return root;                                                                                              // 19
    },                                                                                                            // 20
    encodeUTF8: function encodeUTF8(str) {                                                                        // 21
        var temp = "",                                                                                            // 22
            rs = "";                                                                                              // 22
        for (var i = 0, len = str.length; i < len; i++) {                                                         // 23
            temp = str.charCodeAt(i).toString(16);                                                                // 24
            rs += "\\u" + new Array(5 - temp.length).join("0") + temp;                                            // 25
        }                                                                                                         // 26
        return rs;                                                                                                // 27
    },                                                                                                            // 28
    buildXML: function buildXML(json) {                                                                           // 29
                                                                                                                  //
        var builder = new xml2js.Builder();                                                                       // 31
        return builder.buildObject(json);                                                                         // 32
    },                                                                                                            // 33
    parseXML: function parseXML(xml, fn) {                                                                        // 34
        var parser = new xml2js.Parser({ trim: true, explicitArray: false, explicitRoot: false });                // 35
        parser.parseString(xml, fn || function (err, result) {});                                                 // 36
    }                                                                                                             // 37
                                                                                                                  //
};                                                                                                                // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// server/server.js                                                                                               //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
Meteor.startup(function () {                                                                                      // 1
    // Meteor.setInterval(function(){                                                                             //
    //     var ubs = UserBadges.find({complete:1,rebate:0}).fetch();                                              //
    //     for(var i = 0 ; i < ubs.length ;i++){                                                                  //
    //         var u = ubs[i];                                                                                    //
    //         var bg = Badges.findOne({ alias:u.badge});                                                         //
    //         Meteor.users.update({_id:u.userid},{                                                               //
    //             $inc:{point:bg.point}                                                                          //
    //         });                                                                                                //
    //         PointTrack.insert({                                                                                //
    //             userid:u.userid,                                                                               //
    //             createAt:new Date(),                                                                           //
    //             reason:"成就奖励:" + bg.name,                                                                      //
    //             num:bg.point,                                                                                  //
    //             data:u,                                                                                        //
    //         })                                                                                                 //
                                                                                                                  //
    //         UserBadges.update({_id:u._id},{$set:{rebate:1}});                                                  //
    //         console.log("some get ");                                                                          //
    //     }                                                                                                      //
    // },1000);                                                                                                   //
    // var hos = [{ "id": "125", "name": "北京协和医院" }];                                                             //
    // hos = JSON.parse(hos);                                                                                     //
    // console.log('start');                                                                                      //
    // var hoss = Hospitals.find({ orderBy: '' }).fetch();                                                        //
    // var ids = [];                                                                                              //
    // for (var i = hoss.length - 1; i >= 0; i--) {                                                               //
    //     ids.push(hoss[i]._id);                                                                                 //
    // }                                                                                                          //
    // for (var j = ids.length - 1; j >= 0; j--) {                                                                //
    //     console.log(ids[j]._id)                                                                                //
    //     Departments.insert({ "baiduid": "", "createAt": new Date(), "name": "全科", "orderBy": 0, "summary": "", "hospital": ids[j]._id });
    // }                                                                                                          //
                                                                                                                  //
    // var des  = Departments.find().fetch();                                                                     //
    // for(var i = 0 ; i < des.length ; i++){                                                                     //
    //     Departments.update({                                                                                   //
    //         _id:des[i]._id                                                                                     //
    //     },{                                                                                                    //
    //         $set:{status:1,price:10}                                                                           //
    //     })                                                                                                     //
    //     console.log(des[i]._id);                                                                               //
    // }                                                                                                          //
                                                                                                                  //
});                                                                                                               // 46
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json"]});
require("./lib/model/account.js");
require("./lib/model/bank.js");
require("./lib/model/banner.js");
require("./lib/model/cases.js");
require("./lib/model/discuz.js");
require("./lib/model/doctor.js");
require("./lib/model/feild.js");
require("./lib/model/jpush.js");
require("./lib/model/message.js");
require("./lib/model/new.js");
require("./lib/model/person.js");
require("./lib/model/referral.js");
require("./lib/model/region.js");
require("./lib/model/share.js");
require("./lib/model/table.js");
require("./lib/model/visit.js");
require("./lib/routers/account.js");
require("./lib/routers/banner.js");
require("./lib/routers/discuz.js");
require("./lib/routers/feilds.js");
require("./lib/routers/home.js");
require("./lib/routers/new.js");
require("./lib/routers/persons.js");
require("./lib/routers/recive.js");
require("./lib/routers/referral.js");
require("./lib/routers/rotation.js");
require("./lib/routers/site.js");
require("./lib/routers/table.js");
require("./lib/routers/task.js");
require("./lib/routers/visit.js");
require("./lib/facc.js");
require("./server/account/method.js");
require("./server/account/publish.js");
require("./server/account/server.js");
require("./server/bank/method.js");
require("./server/bank/publish.js");
require("./server/banner/publish.js");
require("./server/cases/publish.js");
require("./server/components/method.js");
require("./server/components/publish.js");
require("./server/departments/publish.js");
require("./server/discuz/methods.js");
require("./server/discuz/publish.js");
require("./server/doctor/method.js");
require("./server/doctor/publish.js");
require("./server/feild/method.js");
require("./server/feild/publish.js");
require("./server/home/methods.js");
require("./server/home/publish.js");
require("./server/jpush/methods.js");
require("./server/jpush/server.js");
require("./server/messages/publish.js");
require("./server/new/publish.js");
require("./server/oss/config.js");
require("./server/oss/method.js");
require("./server/pay/method.js");
require("./server/person/method.js");
require("./server/person/publish.js");
require("./server/referral/method.js");
require("./server/referral/publish.js");
require("./server/region/method.js");
require("./server/region/publish.js");
require("./server/rotation/method.js");
require("./server/rotation/publish.js");
require("./server/sms/client.js");
require("./server/visit/method.js");
require("./server/visit/publish.js");
require("./server/wechat/config.js");
require("./server/wechat/method.js");
require("./server/wechat/pay.js");
require("./server/wechat/util.js");
require("./server/server.js");
//# sourceMappingURL=app.js.map
