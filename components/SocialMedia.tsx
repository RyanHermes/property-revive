import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function SocialMedia() {
	return (
		<div className="social">
			<SocialIcon
				url="https://www.facebook.com/people/PropertyRevive/61555246303296/"
				style={{ margin: '5px' }}
			/>
			<SocialIcon
				url="https://www.instagram.com/property_revive/"
				style={{ margin: '5px' }}
			/>
		</div>
	)
}
