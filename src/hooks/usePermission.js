import {useContext, useState} from 'react';
import PermissionContext from "services/Auth/PermissionProvider/permissionContext";

const usePermission = (permission) => {

    const [loading, setLoading] = useState(true);
    const [allowed, setAllowed] = useState();

    const {isAllowedTo} = useContext(PermissionContext);

    isAllowedTo(permission).then((allowed) => {
        setLoading(false);
        setAllowed(allowed);
    })
    return [loading, allowed]
}

export default usePermission;
