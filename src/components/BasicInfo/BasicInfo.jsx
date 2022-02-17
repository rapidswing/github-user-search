import styled from 'styled-components'
import moment from 'moment'

const UnstyledBasicInfo = ({ className, user }) => {  
  return (
    <div className={className}>
      <UserName>{user.name}</UserName>
      <Login>@{user.login}</Login>
      <JoinDate>
        Joined {moment(user.created_at).utc().format('D MMM YYYY')}
      </JoinDate>
    </div>
  )
}

const BasicInfo = styled(UnstyledBasicInfo)`
  display: flex;
  flex-direction: column;
`

const UserName = styled.div`
  color: ${props => props.theme.colors.name};
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.4rem;
`

const Login = styled.div`
  color: ${props => props.theme.colors.login};
  font-size: 1.3rem;
  line-height: 1.9rem;
  text-decoration: underline;
`

const JoinDate = styled.div`
  color: ${props => props.theme.colors.date};
  font-size: 1.3rem;
  line-height: 1.9rem;
  margin-top: auto;
`

export default BasicInfo