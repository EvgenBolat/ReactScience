interface myPermissions {
  canRead: boolean
  canEdit: boolean
  canDelete: boolean
}

type RolePermissions = {
  [key in 'admin' | 'user' | 'guest']: Readonly<myPermissions>
}

const guestPermissions: Readonly<myPermissions> = {
  canRead: true,
  canEdit: false,
  canDelete: false,
}

const userPermissions: Readonly<myPermissions> = {
  canRead: true,
  canEdit: true,
  canDelete: false,
}

const adminPermissions: Readonly<myPermissions> = {
  canRead: true,
  canEdit: true,
  canDelete: true,
}

function setPermissions(role: 'admin' | 'user' | 'guest', permissions: myPermissions) {
  if  (role === 'guest') {
    return guestPermissions
  }
  else if (role === 'admin') {
    return adminPermissions
  }
  else {
    return userPermissions
  }
}

let permissions: myPermissions = {
  canRead: true,
  canEdit: false,
  canDelete: false,
}
let adminPermission = (setPermissions('admin', permissions))
let userPermission = (setPermissions('user', permissions))
let guestPermission = (setPermissions('guest', permissions))
console.log(adminPermission)
console.log(userPermission)
console.log(guestPermission)