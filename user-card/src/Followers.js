import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`

    body {
        letter-spacing:2.5px;
        background-color:#f1c4cb

    }
`
const ContainerDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    margin-left:none;
`
const Card = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    text-align:center;
    border-radius:10px;
    width:28%;
    margin:15px;
    box-shadow:0px 0px 7px 0px gray;
    background-color:white;
`
const Image = styled.img`
    max-width:100%;
    height:auto;
    width:30%;
    box-shadow:0px 0px 7px 0px gray;
`

class Followers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            follower: []
        }
    }

    render(){
        return(
            <div>
            <GlobalStyles/>
                <ContainerDiv> 
                    <h1>Followers:</h1>
                </ContainerDiv>
                  
                <ContainerDiv>
                        {this.props.followers.map(follower =>
                            <Card>
                                <h2>{follower.login}</h2>
                                 <Image src={follower.avatar_url}/>
                                 <p>{follower.location}</p>
                                 <p>{follower.bio}</p>
                            </Card>
                        )}
                </ContainerDiv>
            </div>
            
        )
    }
}

export default Followers;