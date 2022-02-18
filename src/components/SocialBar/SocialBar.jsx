import styled from 'styled-components'

import { ReactComponent as IconLocation } from 'assets/icon-location.svg'
import { ReactComponent as IconWebsite } from 'assets/icon-website.svg'
import { ReactComponent as IconTwitter } from 'assets/icon-twitter.svg'
import { ReactComponent as IconCompany } from 'assets/icon-company.svg'

const UnstyledSocial = ({ className, property, data, img }) => {
  const Icon = img

  return (
    <div className={className}>
      <div>
        <Icon />
      </div>
      <div>
        {data ?
          (property === 'Website' ? <a href={data} alt="User's website" >{data}</a> : data) :
          'Not available'
        }
      </div>
    </div>
  )
}

const Social = styled(UnstyledSocial)`
  display: flex;
  flex-direction: row;
  opacity: ${props => props.data ? 1 : 0.5};

  div:nth-of-type(1) {
    height: 2rem;
    width: 2rem;
    
    path {
      fill: ${props => props.theme.colors.social};
    }
  }

  div:nth-of-type(2) {
    color: ${props => props.theme.colors.social};
    font-size: 1.3rem;
    line-height: 1.9rem;
    margin-left: 1.3rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 2.2rem;
    }
  }

  @media (min-width: 768px) {
    :nth-of-type(1) {
      order: 1;
    }
    :nth-of-type(2) {
      order: 3;
    }
    :nth-of-type(3) {
      order: 2;
    }
    :nth-of-type(4) {
      order: 4;
    }
  }
`

const UnstyledSocialBar = ({ className, user }) => (
  <div className={className}>
    <Social property="Location" data={user.location} img={IconLocation} />
    <Social property="Website" data={user.blog} img={IconWebsite} />
    <Social property="Twitter" data={user.twitter_username} img={IconTwitter} />
    <Social property="Company" data={user.company} img={IconCompany} />
  </div>
)

const SocialBar = styled(UnstyledSocialBar)`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr;

  div:nth-of-type(2) {
    >div:nth-of-type(2) {
      a {
        color: ${props => props.theme.colors.social};
        text-decoration: none;

        :hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: grid;
    gap: 1.6rem 4.8rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

export default SocialBar