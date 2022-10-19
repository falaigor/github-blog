import {Header} from "../../components/Header";
import {HomeContainer, ProfileWrapper} from './styles'

export function Home() {
    return (
        <>
            <Header/>
            <HomeContainer>
                <ProfileWrapper>
                    <div>Imagem</div>
                    <div>
                        <div>
                            <h2>Igor Santos</h2>
                            <span>GITHUB</span>
                        </div>
                        <p>Um texto bem bacana sobre minha pessoa</p>
                        <div>
                            <span>github</span>
                            <span>empresa</span>
                            <span>seguidores</span>
                        </div>
                    </div>
                </ProfileWrapper>
            </HomeContainer>
        </>
    )
}