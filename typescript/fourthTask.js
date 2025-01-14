var guestPermissions = {
    canRead: true,
    canEdit: false,
    canDelete: false,
};
var userPermissions = {
    canRead: true,
    canEdit: true,
    canDelete: false,
};
var adminPermissions = {
    canRead: true,
    canEdit: true,
    canDelete: true,
};
function setPermissions(role, permissions) {
    if (role === 'guest') {
        return guestPermissions;
    }
    else if (role === 'admin') {
        return adminPermissions;
    }
    else {
        return userPermissions;
    }
}
var permissions = {
    canRead: true,
    canEdit: false,
    canDelete: false,
};
var adminPermission = (setPermissions('admin', permissions));
var userPermission = (setPermissions('user', permissions));
var guestPermission = (setPermissions('guest', permissions));
console.log(adminPermission);
console.log(userPermission);
console.log(guestPermission);
// guestPermission.canDelete = true
