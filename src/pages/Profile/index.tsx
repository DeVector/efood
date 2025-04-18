import Banner from "../../components/Banner"
import HeaderProfile from "../../components/HeaderProfile"

const Profile = () => {
    return (
        <>
            <HeaderProfile />
            <Banner infos={['Italiana']} title="La Dolce Vita Trattoria"/>
            <div>Profile</div>
        </>
    )
}

export default Profile
