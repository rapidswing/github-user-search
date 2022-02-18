import styled from 'styled-components'

import IconLocation from 'assets/icon-location.svg'
import IconWebsite from 'assets/icon-website.svg'
import IconTwitter from 'assets/icon-twitter.svg'
import IconCompany from 'assets/icon-company.svg'

const UnstyledSocial = ({ alt, className, data, img, ...rest }) => (
  <div className={className}>
    <div>
      <img src={img} alt={alt} />
    </div>
    <div>
      {data || 'Not available'}
    </div>
  </div>
)

const Social = styled(UnstyledSocial)`
  display: flex;
  flex-direction: row;
  opacity: ${props => props.data ? 1 : 0.5};

  div:nth-of-type(1) {
    height: 2rem;
    width: 2rem;
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
      <Social alt="Location" data={user.location} img={IconLocation} />
      <Social alt="Website" data={user.website} img={IconWebsite} />
      <Social alt="Twitter" data={user.twitter} img={IconTwitter} />
      <Social alt="Company" data={user.company} img={IconCompany} />
    </div>
  )
}

const SocialBar = styled(UnstyledSocialBar)`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr;
`

export default SocialBar