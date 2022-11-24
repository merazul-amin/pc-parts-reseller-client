import { useState } from 'react';
const useCheckRole = (email) => {
    const [role, setRole] = useState(null);
    const [roleIsLoading, setRoleIsLoading] = useState(true);
    if (email) {
        fetch(`http://localhost:5000/role/${email}`)
            .then(res => res.json())
            .then(data => {
                setRole(data.role)
                setRoleIsLoading(false);
            })
    }
    return [role, roleIsLoading];
}

export default useCheckRole;