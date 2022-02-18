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
        {/* <img src={img} alt={property} /> */}
      </div>
      <div>
        {data || 'Not available'}
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
  }
`

const UnstyledSocialBar = ({ className, user }) => {
  return (
    <div className={className}>
      <Social property="Location" data={user.location} img={IconLocation} />
      <Social property="Website" data={user.website} img={IconWebsite} />
      <Social property="Twitter" data={user.twitter} img={IconTwitter} />
      <Social property="Company" data={user.company} img={IconCompany} />
    </div>
  )
}

const SocialBar = styled(UnstyledSocialBar)`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr;
`

export default SocialBar