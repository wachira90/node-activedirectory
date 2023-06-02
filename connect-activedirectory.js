#!node
// Initialize
const ActiveDirectory = require('activedirectory');

const config = {
    // url: 'ldaps://172.16.1.50/',
    url: 'ldap://172.16.1.50/',
    baseDN: 'dc=example,dc=com',
    username : 'wachira@example.com',
    password : 'pass1234',
    // port: 636
    port: 389
};

const ad = new ActiveDirectory(config);
// const username = 'wachira@example.com';
// const password = 'pass1234';

// Authenticate
// ad.authenticate(username, password, function(err, auth) {
//     if (err) {
//         console.log('ERROR: '+JSON.stringify(err));
//         return;
//     }
//    if (auth) {
//        console.log('Authenticated!');
//    }else {
//        console.log('Authentication failed!');
//    }
// });

const sAMAccountName  = 'wachira@example.com';

ad.getGroupMembershipForUser(sAMAccountName, function(err, groups) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }

  if (! groups) 
    console.log('User: ' + sAMAccountName + ' not found.');
  else 
    console.log(JSON.stringify(groups));
});



// const ad2 = new ActiveDirectory(config);
// ad2.isUserMemberOf(username, groupName, function(err, isMember) {
//   if (err) {
//     console.log('ERROR: ' +JSON.stringify(err));
//     return;
//   }
//   console.log(username + ' isMemberOf ' + groupName + ': ' + isMember);
// });

