import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';

export default function SocialMediaIcon({ icon, textSize = 'text-4xl', url = '#', color = 'text-primary' }) {
  return (
    <Link href={url} className={`${textSize} ${color} flex p-0`}>
      <FontAwesomeIcon icon={icon} />
    </Link>
  )
}
