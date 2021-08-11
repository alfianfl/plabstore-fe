// import React from 'react'

function useProfile() {

    const editProfile = (data) => {
        console.log(data)
        console.log('berhasil edit profile')
    }

    return {editProfile}
}

export default useProfile
