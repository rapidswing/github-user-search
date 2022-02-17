import styled from 'styled-components'

const UnstyledBasicInfo = ({ className, user }) => {
  return (
    <div className={className}>
      <UserName>{user.name}</UserName>
      <Login>@{user.login}</Login>
      <JoinDate>{user.created_at}</JoinDate>
    </div>
  )
}

const BasicInfo = styled(UnstyledBasicInfo)`
  display: flex;
  flex-direction: column;
`

const UserName = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.4rem;
`

const Login = styled.div`
  color: ${props => props.theme.colors.brightBlue};
  font-size: 1.3rem;
  line-height: 1.9rem;
  text-decoration: underline;
`

const JoinDate = styled.div`
  color: ${props => props.theme.colors.gray};
  font-size: 1.3rem;
  line-height: 1.9rem;
`

export default BasicInfo