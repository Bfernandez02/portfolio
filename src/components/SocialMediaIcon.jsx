import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

export default function SocialMediaIcon({ icon, textSize = 'text-4xl', url = '#' }) {
  return (
    <Link href={url} className={`${textSize} text-primary`}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  )
}
