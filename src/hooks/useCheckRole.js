import { useState } from 'react';
const useCheckRole = (email) => {
    const [role, setRole] = useState(null);
    if (email) {
        fetch(`http://localhost:5000/role/${email}`)
            .then(res => res.json())
            .then(data => {
                setRole(data.role)
            })
    }
    return [role];
}

export default useCheckRole;