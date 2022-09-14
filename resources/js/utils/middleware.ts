export default {
    canAccess(permissions?: string[]): boolean {
        let userPermissions = ['view', 'abc'];

        if (permissions?.length) {
            const hasPermissions = userPermissions.filter(value => permissions.includes(value));
            return !!hasPermissions.length
        }

        return true;
    }
}

