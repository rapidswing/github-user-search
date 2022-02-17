import styled from 'styled-components'

const UnstyledBasicInfo = ({ className, user }) => {
  return (
    <div className={className}>
      <UserName>{user.name}</UserName>
      <Login>{user.login}</Login>
      <JoinDate>{user.created_at}</JoinDate>
    </div>
  )
}

const BasicInfo = styled(UnstyledBasicInfo)`
  display: flex;
  flex-direction: column;
`

const UserName = styled.div`
`

const Login = styled.div`
`

const JoinDate = styled.div`
`



export default BasicInfo