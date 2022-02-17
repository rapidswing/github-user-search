import styled from 'styled-components'

const StyledBasicInfo = styled.div`
`

const UserName = styled.div`
`

const Login = styled.div`
`

const JoinDate = styled.div`
`

const BasicInfo = ({ user }) => {
  return (
    <StyledBasicInfo>
      <UserName>{user.name}</UserName>
      <Login>{user.login}</Login>
      <JoinDate>{user.created_at}</JoinDate>
    </StyledBasicInfo>
  )
}

export default BasicInfo