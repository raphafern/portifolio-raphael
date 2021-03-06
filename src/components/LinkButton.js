import React, {useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import { Icon, InlineIcon } from '@iconify/react';
import githubOctocat from '@iconify-icons/logos/github-octocat';
import instagramSquare from '@iconify-icons/fa-brands/instagram-square';
import facebookIcon from '@iconify-icons/fa-brands/facebook';
import './WidthLimit.scss';

const LinkButton = (props) => {
  const [icon, setIcon] = useState('')
  useEffect(() => {
    if(props.link.includes('github')) {
      
      setIcon(<Icon icon={githubOctocat}/>)
    } else if(props.link.includes('instagram')) {

        setIcon(<Icon icon={instagramSquare} />);
    } else if(props.link.includes('facebook')) {

        setIcon(<Icon icon={facebookIcon} />);
    }

  }, [props])
  
  
  return (
      <Button 
      variant="outline-light" 
      href={props.link} 
      className="mb-3 max-button"
      size="lg"
      block
      > 
        {icon}

      </Button>

   
  )
}

export default LinkButton








