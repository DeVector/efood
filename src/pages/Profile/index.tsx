import Banner from "../../components/Banner"
import HeaderProfile from "../../components/HeaderProfile"
import ShopList from "../../components/ShopList"

import imgBanne from '../../assets/images/img_banner.png'

const Profile = () => {
    return (
        <>
            <HeaderProfile />
            <Banner 
                image={imgBanne} 
                infos={['Italiana']} title="La Dolce Vita Trattoria"/>
            <ShopList />
        </>
    )
}

export default Profile
