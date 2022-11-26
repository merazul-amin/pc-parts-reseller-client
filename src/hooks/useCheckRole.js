import { useState } from 'react';
const useCheckRole = (email) => {
    const [role, setRole] = useState(null);
    const [roleIsLoading, setRoleIsLoading] = useState(true);
    if (email) {
        fetch(`https://server-gules-beta.vercel.app/role/${email}`)
            .then(res => res.json())
            .then(data => {
                setRole(data.role)
                setRoleIsLoading(false);
            })
    }
    return [role, roleIsLoading];
}

export default useCheckRole;