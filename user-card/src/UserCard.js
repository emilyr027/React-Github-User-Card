import React from 'react'
import styled from 'styled-components'

const ContainerDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:5%;
`

const Card = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    width:65%;
    box-shadow:0px 0px 7px 0px gray;
    background-color:white;
`
const Image = styled.img`
    max-width:100%;
    height:auto;
    width:28%;
    box-shadow:0px 0px 7px 0px gray;
`

class UserCard extends React.Component {
 

    render(){
        return(
            <ContainerDiv>
                <Card>
                <h2>{this.props.user.login}</h2>
                <Image src={this.props.user.avatar_url}/>
                <p>{this.props.user.location}</p>
                <p>{this.props.user.bio}</p>
                </Card>
            </ContainerDiv>
        )
    }
}

export default UserCard