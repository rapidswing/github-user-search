import styled from 'styled-components'

import IconLocation from 'assets/icon-location.svg'
import IconWebsite from 'assets/icon-website.svg'
import IconTwitter from 'assets/icon-twitter.svg'
import IconCompany from 'assets/icon-company.svg'

const StyledSocialBar = styled.div`
`

const StyledSocial = styled.div`
`

const SocialBar = ({ user }) => {
  return (
    <StyledSocialBar>
      <StyledSocial>
        <img src={IconLocation} alt="Location" />
        {user.location || 'Not available.'}
      </StyledSocial>
      <StyledSocial>
        <img src={IconWebsite} alt="Website" />
        {user.blog || 'Not available.'}
      </StyledSocial>
      <StyledSocial>
        <img src={IconTwitter} alt="Twitter" />
        {user.twitter || 'Not available.'}
      </StyledSocial>
      <StyledSocial>
        <img src={IconCompany} alt="Company" />
        {user.company || 'Not available.'}
      </StyledSocial>
    </StyledSocialBar>
  )
}

export default SocialBar