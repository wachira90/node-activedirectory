# node-activedirectory
node activedirectory ldap ldaps

node v18.16.1

## Clone and install

```sh
git clone https://github.com/wachira90/node-activedirectory.git
cd node-activedirectory/
yarn install
```


## Test

```sh
node connect-activedirectory.js
```

## Result 

### On uccess

```json
[
  {
    "dn": "CN=Administrators,CN=Builtin,DC=example,DC=com",
    "cn": "Administrators",
    "description": "Administrators have complete and unrestricted access to the computer/domain"
  },
  {
    "dn": "CN=Backup Operators,CN=Builtin,DC=example,DC=com",
    "cn": "Backup Operators",
    "description": "Backup Operators can override security restrictions for the sole purpose of backing up or restoring files"
  },
  {
    "dn": "CN=Denied RODC Password Replication Group,CN=Users,DC=example,DC=com",
    "cn": "Denied RODC Password Replication Group",
    "description": "Members in this group cannot have their passwords replicated to any read-only domain controllers in the domain"
  },
  {
    "dn": "CN=DnsAdmins,CN=Users,DC=example,DC=com",
    "cn": "DnsAdmins",
    "description": "DNS Administrators Group"
  },
  {
    "dn": "CN=Domain Admins,CN=Users,DC=example,DC=com",
    "cn": "Domain Admins",
    "description": "Designated administrators of the domain"
  },
  {
    "dn": "CN=Domain Computers,CN=Users,DC=example,DC=com",
    "cn": "Domain Computers",
    "description": "All workstations and servers joined to the domain"
  },
  {
    "dn": "CN=Domain Controllers,CN=Users,DC=example,DC=com",
    "cn": "Domain Controllers",
    "description": "All domain controllers in the domain"
  },
  {
    "dn": "CN=Domain Guests,CN=Users,DC=example,DC=com",
    "cn": "Domain Guests",
    "description": "All domain guests"
  },
  {
    "dn": "CN=Enterprise Admins,CN=Users,DC=example,DC=com",
    "cn": "Enterprise Admins",
    "description": "Designated administrators of the enterprise"
  },
  {
    "dn": "CN=Enterprise Key Admins,CN=Users,DC=example,DC=com",
    "cn": "Enterprise Key Admins",
    "description": "Members of this group can perform administrative actions on key objects within the forest."
  },
  {
    "dn": "CN=Event Log Readers,CN=Builtin,DC=example,DC=com",
    "cn": "Event Log Readers",
    "description": "Members of this group can read event logs from local machine"
  },
  {
    "dn": "CN=Guests,CN=Builtin,DC=example,DC=com",
    "cn": "Guests",
    "description": "Guests have the same access as members of the Users group by default, except for the Guest account which is further restricted"
  },
  {
    "dn": "CN=Network Configuration Operators,CN=Builtin,DC=example,DC=com",
    "cn": "Network Configuration Operators",
    "description": "Members in this group can have some administrative privileges to manage configuration of networking features"
  },
  {
    "dn": "CN=Server Operators,CN=Builtin,DC=example,DC=com",
    "cn": "Server Operators",
    "description": "Members can administer domain servers"
  },
  { "dn": "CN=powerbi,OU=groupexample,DC=example,DC=com", "cn": "powerbi" }
]

```

### On fail

```
ERROR: {"lde_message":"80090308: LdapErr: DSID-0C090439, comment: AcceptSecurityContext error, data 52e, v4563\u0000","lde_dn":null}
ERROR: {"lde_message":"80090308: LdapErr: DSID-0C090439, comment: AcceptSecurityContext error, data 52e, v4563\u0000","lde_dn":null}
```
