import { BsGithub, BsMailbox } from "react-icons/bs"

import links from "data/links.json";

interface ActionButtonGroupsProps {
  size: number;
}

export function ActionButtonGroups( { size }: ActionButtonGroupsProps ) {
  return <>
    <a href={links.github} title="open github page" target="_blank" rel="noreferrer"><BsGithub size={size}/></a>
    <a href={links.mailto} title="send a mail to lee-gyu"><BsMailbox size={size}/></a>
  </>
}