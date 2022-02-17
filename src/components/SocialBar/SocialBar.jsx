import styled from 'styled-components'

import IconLocation from 'assets/icon-location.svg'
import IconWebsite from 'assets/icon-website.svg'
import IconTwitter from 'assets/icon-twitter.svg'
import IconCompany from 'assets/icon-company.svg'

const UnstyledSocial = ({ alt, className, data, img }) => (
  <div className={className}>
    <div>
      <img src={img} alt={alt} />
    </div>
    {data || 'Not available.'}
  </div>
)

const Social = styled(UnstyledSocial)`
  display: flex;
  flex-direction: row;
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
  display: flex;
  flex-direction: column;
`

export default SocialBar