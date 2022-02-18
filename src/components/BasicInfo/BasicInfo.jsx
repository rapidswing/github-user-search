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

  @media (min-width: 768px) {
    margin-top: 1rem;
  }

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const UserName = styled.div`
  color: ${props => props.theme.colors.name};
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 2.4rem;

  @media (min-width: 768px) {
    font-size: 2.6rem;
    line-height: 3.9rem;
  }

  @media (min-width: 1440px) {
    order: 1;
  }
`

const Login = styled.div`
  color: ${props => props.theme.colors.login};
  font-size: 1.3rem;
  line-height: 1.9rem;
  margin-bottom: 0.6rem;
  text-decoration: underline;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  @media (min-width: 1440px) {
    order: 3;
  }
`

const JoinDate = styled.div`
  color: ${props => props.theme.colors.date};
  font-size: 1.3rem;
  line-height: 1.9rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }

  @media (min-width: 1440px) {
    margin-left: auto;
    padding-top: 0.5rem;
    order: 2;
  }
`

export default BasicInfo